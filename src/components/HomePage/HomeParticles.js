import { React, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function HomeParticles() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 0.4,
              opacity_min: 0.1,
              sync: false,
            },
          },

          shape: {
            type: "circle",
            polygon: {
              nb_sides: 5,
            },
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          size: {
            value: { min: 1, max: 6 },
          },
          // line_linked: {
          //   enable: true,
          //   distance: 150,
          //   color: "#ffffff",
          //   opacity: 0.4,
          //   width: 1,
          // },
        },
        detectRetina: true,
        parallax: {
          enable: true,
          force: 2,
          smooth: 10,
        },
        retina_detect: true,
        // background: {
        //   color: "#000000",
        //   image: "",
        //   position: "50% 50%",
        //   repeat: "no-repeat",
        //   size: "cover",
        // },
      }}
    />
  );
}

export default HomeParticles;
