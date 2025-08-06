// components/GenreParticles.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const GenreParticles = ({ children }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 50,
                duration: 0.4,
              },
            },
          },
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                area: 200,
              },
            },
            color: {
              value: "#facc15", // yellow-400
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.6,
            },
            size: {
              value: { min: 1, max: 3 },
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce",
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GenreParticles;
