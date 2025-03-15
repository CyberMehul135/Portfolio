import { useRef, useEffect } from "react";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";
Matter.use(MatterAttractors);
import Button from "../components/Button";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Home() {
  const heroRef = useRef(null);

  const handleClick = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Animation Effect code ::
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize Matter.js animation here
    const canvas = canvasRef.current;
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // aliases
    const Engine = Matter.Engine,
      Events = Matter.Events,
      Runner = Matter.Runner,
      Render = Matter.Render,
      World = Matter.World,
      Body = Matter.Body,
      Mouse = Matter.Mouse,
      Common = Matter.Common,
      Composite = Matter.Composite,
      Composites = Matter.Composites,
      Bodies = Matter.Bodies;

    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    const render = Render.create({
      element: canvas, // still referring to the div now
      engine: engine,
      options: {
        showVelocity: false,
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
      },
    });

    const runner = Runner.create();

    const world = engine.world;
    world.gravity.scale = 0;

    const attractiveBody = Bodies.circle(
      dimensions.width / 2,
      dimensions.height / 2,
      Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
      {
        render: {
          fillStyle: `#000`,
          strokeStyle: `#000`,
          lineWidth: 0,
        },
        isStatic: true,
        collisionFilter: {
          group: -1, // 👈 ye negative group ensure karega ki koi collision na ho
        },
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              };
            },
          ],
        },
      }
    );

    World.add(world, attractiveBody);

    for (let i = 0; i < 60; i++) {
      let x = Common.random(0, dimensions.width);
      let y = Common.random(0, dimensions.height);
      let s =
        Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      let poligonNumber = Common.random(3, 6);
      let r = Common.random(0, 1);

      World.add(
        world,
        Bodies.polygon(x, y, poligonNumber, s, {
          mass: s / 20,
          friction: 0,
          frictionAir: 0.02,
          angle: Math.round(Math.random() * 360),
          render: {
            fillStyle: "#222222",
            strokeStyle: "#000000",
            lineWidth: 2,
          },
        })
      );

      World.add(
        world,
        Bodies.circle(x, y, Common.random(2, 8), {
          mass: 0.1,
          friction: 0,
          frictionAir: 0.01,
          render: {
            fillStyle: r > 0.3 ? `#27292d` : `#444444`,
            strokeStyle: `#000000`,
            lineWidth: 2,
          },
        })
      );

      World.add(
        world,
        Bodies.circle(x, y, Common.random(2, 20), {
          mass: 6,
          friction: 0,
          frictionAir: 0,
          render: {
            fillStyle: r > 0.3 ? `#334443` : `#222222`,
            strokeStyle: `#111111`,
            lineWidth: 4,
          },
        })
      );

      World.add(
        world,
        Bodies.circle(x, y, Common.random(2, 30), {
          mass: 0.2,
          friction: 0.6,
          frictionAir: 0.8,
          render: {
            fillStyle: `#191919`,
            strokeStyle: `#111111`,
            lineWidth: 3,
          },
        })
      );
    }

    const mouse = Mouse.create(render.canvas);

    Events.on(engine, "afterUpdate", function () {
      if (!mouse.position.x) return;
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 1,
        y: (mouse.position.y - attractiveBody.position.y) * 1,
      });
    });

    Render.run(render);
    Runner.run(runner, engine);

    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full bg-[rgb(17,17,17)]">
      <div ref={canvasRef} className="absolute inset-0 overflow-hidden" />
      <section className="mx-auto flex flex-col  h-screen justify-between">
        <Navbar />
        <HeroSection />
        <span className="mb-16 mx-auto relative group">
          <Button text={"Latest Works"} handleClick={handleClick} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-5 fill-white absolute top-[120%] left-1/2 -translate-x-1/2 group-hover:top-[135%] transition-all duration-200"
          >
            <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
          <div className="after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[rgb(57,57,57)] after:left-1/2 after:top-[200%]"></div>
        </span>
      </section>

      <div ref={heroRef} className="bg-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta
        laborum repellendus omnis quisquam. Dolorem, repellat omnis nihil earum
        cupiditate qui et eveniet vitae. Libero mollitia eius cum perspiciatis
        aliquam! Similique eum voluptas cumque labore quae harum suscipit libero
        exercitationem vero. Ipsum minima iusto exercitationem quibusdam
        voluptatum ratione commodi, dignissimos dolorem assumenda laborum maxime
        dolor, quae soluta? Modi, sed aut. Unde reiciendis rerum numquam nulla
        repellendus, at alias vero labore totam quidem placeat est praesentium
        minima libero vitae esse maiores deleniti voluptates veniam officia.
        Alias eligendi quae ad provident ullam. Beatae inventore rerum
        perferendis deleniti, esse sit magnam quisquam veniam. Voluptas, ipsa
        aspernatur itaque, et cupiditate natus blanditiis doloribus quae tenetur
        illo, nulla tempora maxime veritatis perspiciatis. Ipsam, error veniam.
        Enim eos quibusdam, corporis totam quidem voluptate alias ea modi
        aspernatur suscipit dicta asperiores laborum, autem reprehenderit quae
        ratione quam minus sapiente ab rerum dignissimos provident qui! Debitis,
        sunt ducimus? Doloribus odio, officia similique impedit vero autem
        accusantium architecto illo voluptas quia minus commodi non alias error
        excepturi. Voluptas excepturi cum dolores quis ducimus distinctio,
        quibusdam culpa harum tempora itaque! Totam qui sapiente tempore quasi
        provident doloremque quos neque, voluptatem atque dicta. Dolorum dolores
        ipsum atque ad ratione nesciunt! Nisi quidem sequi odit eligendi quos?
        Itaque quod quos non corrupti. Impedit blanditiis corporis vero illo
        iusto repudiandae! Similique voluptatem quo adipisci dignissimos porro
        incidunt perspiciatis quos, suscipit molestiae perferendis nesciunt iste
        totam. Quia alias pariatur perferendis, incidunt consequatur ex eveniet.
        Laboriosam atque blanditiis, architecto sequi aut nesciunt soluta
        inventore tempora illo. Temporibus doloremque ab accusamus sint, quos
        ipsum quidem quod et sapiente explicabo officiis, quas similique quaerat
        ea facere vel. Sint delectus quia dignissimos incidunt, minima ab
        aperiam quos fugit. Sequi qui sed at sunt voluptate vitae tenetur,
        eligendi amet harum fugit quia ratione provident, hic, illo quam
        consectetur dolores? Ad beatae nihil cumque repudiandae dicta, dolore,
        officia recusandae consequuntur qui blanditiis doloremque facere labore
        at perferendis iste? Qui deleniti dicta quisquam dolor eius aperiam
        labore quos est natus ratione? Voluptatibus nemo sapiente neque quis
        eius iste saepe, dignissimos perspiciatis officiis laboriosam animi,
        labore quasi repudiandae fugiat amet. Omnis, laboriosam quisquam
        similique iusto doloribus ab perspiciatis ratione rem totam voluptates!
        Voluptatibus expedita totam ipsum ut porro soluta quam, ea dolorem fuga
        quidem? Eius dolorum, cupiditate necessitatibus aut, magnam optio
        similique sequi libero repellat cum quae, sit adipisci! Error, ex
        ratione? Possimus expedita quibusdam inventore quod dicta eveniet earum
        suscipit a beatae architecto! Architecto a sit, culpa similique, cum
        dicta cumque nisi, enim tempore nemo exercitationem iste quam ipsam.
        Incidunt, ad. Error veritatis ullam unde repellat, excepturi aut
        asperiores tenetur sequi laudantium. Minima natus, perspiciatis autem
        animi rem iusto culpa officia itaque? Corporis cum tempore illum
        incidunt iusto eveniet libero animi. Reiciendis, suscipit, totam est
        nostrum voluptatem sed exercitationem velit rem minima aperiam possimus
        non? Repudiandae amet earum, alias nihil aliquid, perspiciatis tempore
        quidem, enim provident consequuntur pariatur magni obcaecati numquam!
        Excepturi qui similique ipsam tenetur facilis reprehenderit, et laborum
        possimus cumque, architecto debitis temporibus voluptas consequatur
        repudiandae aliquam rem iusto dicta id perferendis eos voluptatibus!
        Aspernatur molestiae saepe totam mollitia. Aliquam minima repellendus
        iste. Vel illo eligendi impedit, nesciunt architecto numquam ab ducimus
        eaque incidunt voluptas harum cum autem cumque, iure pariatur tenetur
        culpa vitae. Distinctio nesciunt dolores dolor libero? Iure adipisci est
        sunt laborum ex dolor tempora illo delectus, voluptate vel reprehenderit
        eum accusamus commodi veritatis architecto! Id pariatur omnis doloribus
        aliquid quibusdam tenetur ea reprehenderit ex corrupti natus. Et,
        maxime. Dignissimos inventore corporis, aut similique harum, voluptate
        magni asperiores voluptatem iusto officia rem vero incidunt beatae
        mollitia doloremque rerum molestias laborum aperiam, quas id quasi.
        Atque, unde eligendi! Voluptatibus, animi ipsa. Expedita, nostrum
        perspiciatis. Nesciunt doloremque reiciendis, itaque eveniet tempore
        sapiente modi ipsum! Cumque quo explicabo, illo molestias, minima ex
        dolorem magni qui nisi nihil reprehenderit sapiente temporibus.
        Assumenda doloremque sunt a incidunt aliquid nisi, dolore debitis,
        maxime sed possimus autem velit neque nulla vero? Quas aut facilis
        voluptate, itaque quidem ea ipsum officia sint. Consequuntur, animi
        beatae. Recusandae odio excepturi voluptatem et, placeat officia maxime
        quia corrupti repellendus quae non dolores, sit sint corporis alias
        eveniet eos asperiores voluptatibus. Quod ipsum earum ipsam nemo
        similique officia possimus! Dignissimos, pariatur expedita minus ducimus
        explicabo quidem reiciendis non deleniti maxime soluta aliquam sed
        beatae unde nemo fugit perferendis, minima ipsa mollitia. Illo
        voluptatem, magnam molestias veniam aut vitae distinctio. Tempore
        debitis molestiae maiores assumenda officiis sapiente ut placeat
        exercitationem veritatis dolor. Mollitia laudantium quasi veniam
        exercitationem eum dolorem deserunt iste consectetur vel architecto,
        officiis hic minus blanditiis placeat atque. Voluptatum maxime qui
        recusandae, illum ut fugit cum quaerat hic velit nobis aut nulla
        reprehenderit obcaecati magni nihil repudiandae nostrum voluptatibus
        tempora? Voluptas iste atque vero, iure maxime cumque mollitia! Ut
        alias, minima ipsam voluptate iure facilis laboriosam blanditiis
        praesentium harum exercitationem a quo. Excepturi dolores id omnis,
        sequi perspiciatis ex, quia officia nemo ipsum aperiam autem voluptas
        itaque magnam. Harum minima eos doloribus vitae blanditiis illo
        praesentium eligendi, deleniti omnis vel facilis temporibus beatae hic,
        explicabo alias repellendus delectus perspiciatis facere quae iure, quas
        tempora modi! Recusandae, deserunt amet? Atque numquam architecto qui
        ullam possimus? Fugit possimus enim libero quaerat ex error rerum
        assumenda, similique non quasi magnam reiciendis commodi sit cum
        voluptate repellat quia eveniet, ut ipsam beatae. Quas, itaque
        voluptatem, iure necessitatibus neque quia pariatur sint suscipit
        eligendi magni voluptatum aliquid voluptas dolore quod modi doloribus
        dolor? Quaerat animi nulla natus quia quam aperiam dignissimos molestias
        dolorem? Earum odio recusandae sed incidunt nam libero esse facere omnis
        culpa, reprehenderit reiciendis asperiores unde labore veniam iste, fuga
        eligendi vitae modi expedita neque qui. Accusantium sit architecto
        cumque quos! Dolor quae fugiat, minus officia ipsum adipisci veniam
        nesciunt dolore natus impedit at velit tempora voluptate minima maxime
        ut voluptatum non rem eaque consequuntur dignissimos. Quo commodi
        repellendus neque in. Aperiam provident maxime quis rem a numquam
        adipisci sit consectetur. Nulla quis facilis ex eligendi voluptates
        labore eveniet voluptate expedita, corporis neque blanditiis eaque?
        Ipsam iusto excepturi laborum numquam quibusdam. Dicta, libero magnam
        ratione perferendis provident et adipisci perspiciatis aperiam nulla
        doloremque, architecto officiis in? Dolor, ratione soluta molestias
        similique tempora magnam vel consectetur at minus dignissimos quibusdam?
        Necessitatibus, ducimus? Ea deserunt ex laboriosam quam optio ratione
        incidunt vero odio ipsam debitis impedit nam eligendi minus
        consequuntur, nemo nesciunt illum possimus necessitatibus sint labore
        eveniet maxime voluptas, eos nostrum? Vel. Assumenda, sunt qui dicta quo
        minima earum commodi ipsa, blanditiis quas tempore tenetur eius
        quisquam, veritatis iure. Ex consectetur doloribus magni, inventore
        debitis ut quibusdam, quas, voluptatibus quis placeat soluta. Reiciendis
        natus rerum dolore dolores eveniet iusto quaerat voluptas illo odit,
        incidunt deleniti recusandae. Neque voluptate quisquam esse est velit,
        at earum ipsam expedita perferendis impedit sapiente ratione odio
        laudantium. Nobis accusamus, enim autem quibusdam voluptates aliquam
        excepturi accusantium sit doloremque dicta minima velit illo blanditiis
        modi optio sapiente eveniet ut possimus? Minima ipsam amet eos
        repellendus, est id ad! Nostrum cum impedit dolorem, exercitationem
        dicta a? Asperiores animi nulla corrupti dolores praesentium voluptas
        aliquid qui. Harum obcaecati aliquid repellat facilis molestias nulla
        atque ut incidunt quidem? Velit, quia ab. Distinctio sed eveniet labore,
        commodi repudiandae consequuntur beatae molestias harum alias id tempora
        explicabo, molestiae laborum doloremque? Illo quo, porro sed, eos soluta
        alias placeat odit quisquam a, quos minima. Esse, neque exercitationem?
        Nam, a voluptas qui officiis cumque voluptate corrupti totam fugit quis
        vitae ad fugiat nihil ea! Quo laudantium blanditiis facere distinctio
        corporis rerum, nisi sequi quidem magni. Eum voluptates cupiditate
        dolores ducimus debitis itaque impedit cum reprehenderit in deserunt
        porro perferendis maxime, repellat, minima odit aliquid, laborum
        laudantium temporibus eveniet id aliquam omnis neque saepe.
        Voluptatibus, itaque! Labore laudantium, voluptate nulla molestias alias
        officia quas rem blanditiis nam enim pariatur nemo voluptates vero.
        Assumenda consectetur, delectus excepturi expedita, quia, repudiandae ea
        quis reiciendis explicabo inventore fugit nobis! Cum earum, voluptas
        quia rem placeat quidem officiis. Eaque veniam cum doloribus repellendus
        dolore enim nam impedit asperiores! Quod, facere! Delectus reprehenderit
        perferendis quas repellendus corporis! Labore eum fugiat qui. Dolorem,
        itaque ipsum. Assumenda odit vel reprehenderit explicabo illum debitis,
        porro facilis corporis tempore ipsum sint natus totam minus in itaque ut
        minima! Eius, magni itaque magnam rerum perspiciatis non. Amet excepturi
        quam a, tempore laborum quasi maiores sint commodi! Pariatur illo aut
        laudantium aspernatur delectus ut. Corrupti sapiente nam distinctio,
        illum sequi quisquam placeat iure, officia ipsam quaerat aspernatur?
        Aliquam fugit dolor quia velit optio eaque accusantium soluta numquam?
        Quas doloremque aspernatur ut autem exercitationem. Obcaecati aspernatur
        facere odio quas dignissimos, sequi velit esse totam! Impedit doloremque
        debitis esse. Veritatis nisi iure sapiente illum ad vel. Corporis in
        esse alias corrupti porro sit quod blanditiis dicta praesentium iusto,
        unde omnis architecto impedit quo modi, nihil eius dolorum aperiam!
        Cupiditate? Ipsum ab sed tenetur, sequi quam quos consequuntur aliquam a
        quasi, nemo cum ex facere, adipisci dolorum unde corporis! Quis fuga
        labore voluptatibus aspernatur iure suscipit natus quia, numquam
        dolorem! Inventore dolores possimus sunt culpa id iure nam? Facilis,
        molestias vitae reiciendis quidem nostrum consequatur nemo accusamus est
        iusto fugit quo aspernatur, odio cumque nobis, dolore eveniet et enim
        perspiciatis. A dolor quibusdam iure voluptatum ut incidunt quas,
        placeat, quasi, quidem deserunt quia modi esse totam voluptates tenetur
        nostrum. Suscipit asperiores, sequi ipsam vitae necessitatibus fugiat
        labore fuga quas! Enim. Atque blanditiis quam quo excepturi provident
        sequi animi facere, quia rem distinctio hic, beatae aliquid qui
        perspiciatis delectus maiores. Corporis est aliquam architecto
        repellendus dolorem nobis obcaecati accusantium odio libero! Esse eius
        necessitatibus nulla rem explicabo magnam recusandae voluptas, possimus,
        nam aspernatur id inventore alias natus est ab vero eligendi asperiores
        accusantium? At consequuntur eum ipsa qui esse doloribus animi.
        Reprehenderit reiciendis ratione dolore dolorem voluptatibus odio
        laborum expedita atque sequi earum explicabo et rerum aliquid possimus
        ullam recusandae, esse quo temporibus sapiente facilis eaque
        perspiciatis quia? Eius, minima ipsa. Quod autem dolor exercitationem
        natus molestias at quia molestiae debitis, adipisci, corrupti nobis
        ipsam sunt nihil consequatur blanditiis? Perspiciatis labore
        exercitationem doloremque corrupti beatae harum cupiditate cum,
        assumenda perferendis adipisci. Consequatur atque, placeat dolor
        mollitia voluptatibus, iure molestiae cupiditate perferendis porro
        repudiandae ea vitae non quaerat magni cum eius eum quidem in culpa
        laudantium? Aspernatur incidunt nostrum suscipit facere id? Placeat
        exercitationem, possimus natus voluptates necessitatibus perferendis!
        Quaerat cumque corporis quas repellendus, rem illo sed cum ipsum vero
        numquam aliquid accusamus placeat enim adipisci ipsa error veniam
        dignissimos! Obcaecati, non. Illum fugit amet expedita voluptatum fugiat
        vitae saepe veniam consequuntur repellat eligendi, esse quo sit quod
        obcaecati tempore nostrum fuga autem dolor vero qui, repudiandae a
        molestiae! Beatae, voluptas cupiditate? Et eum error recusandae odit
        vero voluptatem quae iusto eaque? Quaerat, asperiores eum dolores
        officiis nemo praesentium neque odio! Dolor odit aliquam deleniti, in
        quia sint. Earum cumque dolores natus. Mollitia numquam sed accusamus
        nisi quam, facilis labore soluta? Nihil facilis blanditiis animi, ad
        maxime amet iure placeat? Natus sequi sunt, necessitatibus odit repellat
        blanditiis non dolorum enim provident architecto? Tenetur veritatis est
        aspernatur provident incidunt iure, repudiandae mollitia excepturi rem
        obcaecati quod optio ratione explicabo beatae numquam soluta? Dolorem
        tenetur nisi voluptatibus eaque earum inventore placeat quae, qui
        temporibus! Laboriosam soluta eveniet ullam, atque vitae quo est
        incidunt ex modi delectus. Delectus, temporibus perspiciatis. Unde
        similique, dolore vitae, asperiores sapiente ex doloribus totam omnis
        facilis atque, modi autem sit. Odit atque nobis ad cumque blanditiis
        animi vitae dolorum reprehenderit error cum culpa voluptatibus
        accusantium, ducimus repudiandae assumenda consequuntur unde inventore!
        Atque perspiciatis vel nesciunt, vero et sapiente magnam excepturi? Iure
        placeat id quod fuga, aut sapiente. Quaerat nam nihil harum rerum
        officia? Deleniti, unde sit ipsum quas necessitatibus, voluptatem veniam
        soluta culpa asperiores assumenda aperiam. Iusto voluptates harum
        reprehenderit. Amet necessitatibus dolor cum saepe aliquid autem aut
        laborum earum magnam consequatur, commodi, magni repellat! Cum vel
        quisquam vero impedit illo totam dolores beatae provident quam. Quasi
        voluptates labore architecto! Suscipit nobis exercitationem numquam
        fugiat dolor, dolorum voluptatibus deleniti soluta atque quaerat
        asperiores quas odit neque repellendus inventore fuga voluptatum id
        cupiditate repellat aspernatur tempora modi eos, cum pariatur! Ullam.
        Quibusdam fugiat impedit harum consectetur possimus animi, at assumenda
        dicta corporis repellat. Consequatur natus labore ipsa minima,
        perspiciatis est quos? Molestias incidunt, quaerat perferendis et
        nesciunt possimus accusamus dicta ex. Soluta porro rem commodi sapiente
        aliquid. In sequi, omnis laborum iusto ratione obcaecati odit harum ex
        eius ab praesentium dicta vel dolorem officiis doloremque odio
        consequuntur debitis. Ex, at assumenda. Accusantium eaque ut assumenda
        eum nemo recusandae nobis laborum, sunt debitis iste saepe vel culpa,
        laboriosam tempore cupiditate quidem non ea ipsum odio porro blanditiis
        iusto nulla! Exercitationem, doloribus adipisci. Doloremque, nobis
        tempora repellendus culpa ex tempore alias in autem error nostrum,
        delectus mollitia dolore, expedita optio aut ipsa ullam ea modi
        obcaecati vero corporis? Sapiente iusto doloribus autem sint? Dolor
        explicabo magni ea dolores amet autem non qui! Unde alias repellendus
        porro ratione libero sed culpa numquam obcaecati possimus necessitatibus
        eligendi, ea, vitae fuga nulla ipsum delectus placeat dignissimos! Fugit
        veniam unde odio nulla. Sapiente repudiandae eaque ut adipisci amet
        voluptatibus! Amet nisi repellat saepe quis nostrum maxime autem
        incidunt corporis harum qui ab, temporibus, sapiente similique
        dignissimos animi. Eaque illo a debitis quaerat doloremque quisquam
        deserunt nam quos! Quis quasi perferendis minus suscipit, vitae
        obcaecati autem molestias culpa! Consequatur vero temporibus incidunt
        deleniti. Earum nesciunt iure reprehenderit quia? Officia veniam
        molestias assumenda consequatur deleniti? Nisi laboriosam, aliquam
        placeat non numquam fugit, veritatis nemo rem at quae adipisci
        consectetur amet ullam soluta, nulla ipsam quod recusandae sequi. Saepe,
        nesciunt. Voluptates, harum tempore! Neque, animi, dignissimos enim
        aliquid officiis ab deleniti vero corrupti modi accusamus fuga
        voluptates nesciunt fugit quisquam ut quod placeat explicabo nobis!
        Autem saepe eos repellat ducimus? Soluta incidunt vitae autem, minus
        sequi nam ab, accusamus pariatur quaerat nobis omnis mollitia ducimus
        velit enim sapiente quidem maiores illum non voluptatum impedit quasi
        tempore excepturi cupiditate atque? Eaque? Ex accusantium eius sapiente
        aspernatur reprehenderit cumque velit molestiae dolorum dicta, assumenda
        a blanditiis temporibus, id nihil corporis non ullam. Maxime a odio
        accusantium nesciunt. Sit vitae magni nisi totam. Odio facere alias
        praesentium! Vel delectus nam nihil suscipit saepe molestias distinctio
        magnam obcaecati qui! Consectetur, aperiam ea delectus labore qui, hic
        sunt molestiae temporibus quos, deserunt perspiciatis fuga? Alias. Velit
        minima cupiditate harum ullam! Voluptates quam, animi tempore officia
        eligendi quae sequi sit provident repellendus reprehenderit,
        voluptatibus sint asperiores neque! Aliquam sit minus est dolorem, vitae
        at nostrum labore? Ullam facere mollitia velit magni, dolor similique
        dolorum magnam iure aliquid perspiciatis itaque ipsam! Eum, blanditiis
        cumque aspernatur ut, quisquam commodi architecto animi tempore
        reprehenderit aperiam facilis sed molestiae numquam? Tenetur esse
        tempora qui minus natus eveniet nihil minima temporibus, accusamus
        praesentium cum illum veniam incidunt ad rem. Harum mollitia corporis,
        eum exercitationem esse repellendus fugiat nobis ipsam eos cupiditate?
        Tempora, ducimus totam beatae voluptatem, est molestias nobis,
        consequuntur debitis modi odio veritatis deserunt quae ipsum temporibus
        exercitationem soluta saepe dicta corrupti? Tenetur, architecto omnis a
        odio corrupti soluta reiciendis? Debitis fugiat possimus impedit aut
        ipsam a. In, itaque asperiores deserunt laborum laboriosam culpa aperiam
        animi porro eveniet eligendi ad totam? Incidunt culpa, consequuntur
        accusamus ut quas perferendis reiciendis eaque? Et, repellendus.
        Consequatur repellat consectetur odio tempore nobis libero reiciendis
        vitae nulla ad recusandae quod adipisci veritatis sunt obcaecati
        ducimus, dolorum earum sed ex animi atque perspiciatis molestias qui!
        Laboriosam? Natus odio fuga officia. Necessitatibus dicta eum rem omnis
        laboriosam accusantium repellat exercitationem id ex, sapiente vel,
        dolorem fugiat, itaque expedita ratione? Accusantium maiores nostrum
        quas laborum officiis, possimus recusandae. Magni at quam cupiditate
        laboriosam explicabo in, reiciendis eos magnam dolor dolores obcaecati,
        natus repellat odio harum dolorem necessitatibus sunt atque a laborum
        asperiores voluptates sed quo? Numquam, sapiente distinctio! Sequi
        officia architecto facilis ea accusamus deleniti omnis ullam pariatur,
        doloribus id suscipit nulla eos dolor praesentium! Tempora consectetur
        voluptatibus dolore. Non harum quidem vitae, libero aliquam et possimus
        voluptatibus! Minus, quae nostrum. Numquam maiores natus facilis alias
        deserunt ex accusamus facere, suscipit sed eos iure, eaque, ut quas
        molestias aliquid earum illo consequuntur. Quas odio quos qui dolorem
        praesentium. Voluptatibus labore consectetur, ipsa suscipit magnam
        ducimus. Adipisci doloremque, alias harum recusandae obcaecati optio sed
        deserunt itaque neque velit, cupiditate quidem. Iure quaerat saepe
        suscipit beatae sequi quis culpa ipsa! Placeat ex mollitia voluptatum,
        voluptas dicta odit recusandae fugiat excepturi, voluptatem neque eos,
        provident praesentium? Debitis, alias cupiditate! Voluptas rerum earum
        soluta asperiores aspernatur expedita similique beatae at eaque minus!
        Voluptate quasi dicta veritatis, quisquam laudantium porro est animi
        quas numquam tempora. Exercitationem adipisci totam doloremque aut ipsam
        aliquam obcaecati rem nam, facere, sunt similique blanditiis aliquid
        saepe reprehenderit enim! Dolore nam saepe illum. Atque esse culpa nihil
        iusto, fugit sed placeat maxime magni eius recusandae, doloribus
        obcaecati cumque quibusdam id mollitia! Delectus praesentium magnam
        porro similique repellat quasi cumque? Non dignissimos omnis corrupti
        perferendis nihil. Laborum modi temporibus at velit harum debitis
        repellat! Delectus, ipsum? Obcaecati officiis at esse praesentium
        laudantium quae modi quisquam nisi, molestiae quis omnis aspernatur?
        Tenetur illum quia quos, ullam animi provident eum ratione ea tempore
        veniam incidunt rem iusto, debitis enim ducimus doloribus. Placeat amet
        quod similique culpa delectus, mollitia provident debitis cupiditate
        perspiciatis! Tenetur ratione expedita eius, atque commodi laborum sit
        assumenda! Impedit iste ratione, quos molestiae natus officiis itaque,
        rerum aliquid sunt eligendi a quasi esse quod laudantium. Odio
        voluptatum vel minus. Voluptatem adipisci reprehenderit, atque
        accusantium quo explicabo aliquid laboriosam repudiandae blanditiis
        sapiente perspiciatis sunt sequi quae assumenda? Animi voluptas placeat
        quas pariatur, magnam optio nesciunt beatae fuga, autem sint nostrum.
        Ratione obcaecati maxime numquam? Quas fuga neque consequatur odio velit
        harum a! Nisi libero quas, aliquam eaque obcaecati similique
        perspiciatis consectetur voluptatibus! Provident aperiam consequatur
        quis perspiciatis porro error vel! Voluptate totam voluptatem quos
        perferendis, consequuntur quam aliquid aliquam ipsam quia atque quasi
        qui ratione. Minima minus iste incidunt, sed porro commodi laboriosam
        illum nulla quod ad, vel fugiat dolorem. Repellendus, magni quas error
        impedit incidunt maiores nulla ipsam! Tenetur magni, numquam suscipit
        enim ipsum possimus nostrum alias quae harum, delectus voluptates vel.
        Nisi laboriosam velit in adipisci, illo error. Consequuntur impedit fuga
        hic repellendus ab tempora vero praesentium aliquam nulla officiis?
        Provident impedit vel similique cum iste adipisci. Deleniti, rerum
        ducimus aspernatur ipsum voluptatibus iure illo adipisci eligendi quae.
      </div>
    </div>
  );
}
