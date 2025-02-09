import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const BackgroundParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: { speed: 1 },
          opacity: { value: 0.3 },
          line_linked: { enable: true, color: "#b219ca" },
        },
      }}
    />
  );
};

export default BackgroundParticles;
