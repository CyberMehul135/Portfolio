import { useRef, useEffect } from "react";
import Matter from "matter-js";
import MatterAttractors from "matter-attractors";
Matter.use(MatterAttractors);

export default function AnimatedCanvas({ theme = "dark" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const Engine = Matter.Engine,
      Events = Matter.Events,
      Runner = Matter.Runner,
      Render = Matter.Render,
      World = Matter.World,
      Body = Matter.Body,
      Mouse = Matter.Mouse,
      Common = Matter.Common,
      Bodies = Matter.Bodies;

    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    const render = Render.create({
      element: canvas,
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
          fillStyle: theme === "dark" ? "#db3b3b" : "#61c3d9",
          strokeStyle: theme === "dark" ? "#db3b3b" : "#61c3d9",
          lineWidth: 1,
        },
        isStatic: true,
        collisionFilter: {
          group: -1,
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

    // Define color sets
    const darkModeColors = {
      polygon: "#222222",
      smallCircle1: ["#27292d", "#444444"],
      smallCircle2: ["#334443", "#222222"],
      largeCircle: "#191919",
      stroke1: "#000000",
      stroke2: "#111111",
    };

    const lightModeColors = {
      polygon: "#d7dde5",
      smallCircle1: ["#c2e9f2", "#d3d3d3"],
      smallCircle2: ["#f7fffb", "#d4e5f9"],
      largeCircle: "#e6f0fa",
      stroke1: "#8bb8f1",
      stroke2: "#aac4e0",
    };

    const colors = theme === "light" ? lightModeColors : darkModeColors;

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
            fillStyle: colors.polygon,
            strokeStyle: colors.stroke1,
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
            fillStyle:
              r > 0.3 ? colors.smallCircle1[0] : colors.smallCircle1[1],
            strokeStyle: colors.stroke1,
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
            fillStyle:
              r > 0.3 ? colors.smallCircle2[0] : colors.smallCircle2[1],
            strokeStyle: colors.stroke2,
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
            fillStyle: colors.largeCircle,
            strokeStyle: colors.stroke2,
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
  }, [theme]);

  return <div ref={canvasRef} className="absolute inset-0 overflow-hidden" />;
}
