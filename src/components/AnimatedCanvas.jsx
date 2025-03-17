import { useRef, useEffect } from "react";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";
Matter.use(MatterAttractors);

export default function AnimatedCanvas() {
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
    <>
      <div ref={canvasRef} className="absolute inset-0 overflow-hidden" />
    </>
  );
}
