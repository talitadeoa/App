// src/components/SolarSystem/SolarSystem.tsx
import React, { useState, useCallback } from 'react';
import styles from './SolarSystem.module.css';

interface CSSVars extends React.CSSProperties {
  '--orbit-speed-factor'?: number;
  '--wobble-factor'?: number;
}

export const SolarSystem: React.FC = () => {
  const [orbitSpeedFactor, setOrbitSpeedFactor] = useState(1);
  const [wobbleFactor, setWobbleFactor] = useState(1);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width; // 0 - 1
      const relY = (event.clientY - rect.top) / rect.height; // 0 - 1

      // Mapear X para velocidade (um pouco mais rápido à direita)
      const speed = 0.8 + relX * 0.6; // 0.8 a 1.4
      // Mapear Y para wobble (mais wobble em cima/baixo)
      const wobble = 0.8 + Math.abs(relY - 0.5) * 1.0; // 0.8 a 1.3

      setOrbitSpeedFactor(speed);
      setWobbleFactor(wobble);
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setOrbitSpeedFactor(1);
    setWobbleFactor(1);
  }, []);

  const styleVars: CSSVars = {
    '--orbit-speed-factor': orbitSpeedFactor,
    '--wobble-factor': wobbleFactor,
  };

  return (
    <div
      className={styles.systemWrapper}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={styleVars}
    >
      <div className={styles.system}>
        <div className={styles.starCore} />

        <div className={styles.planetOrbit}>
          <div className={styles.planet}>
            <div className={styles.planetGlow} />

            {/* 4 luas, com pequenas variações de raio e fase */}
            <div className={`${styles.moonOrbit} ${styles.moonOrbit1}`}>
              <div className={styles.moonInner}>
                <div className={styles.moon} />
              </div>
            </div>
            <div className={`${styles.moonOrbit} ${styles.moonOrbit2}`}>
              <div className={styles.moonInner}>
                <div className={styles.moon} />
              </div>
            </div>
            <div className={`${styles.moonOrbit} ${styles.moonOrbit3}`}>
              <div className={styles.moonInner}>
                <div className={styles.moon} />
              </div>
            </div>
            <div className={`${styles.moonOrbit} ${styles.moonOrbit4}`}>
              <div className={styles.moonInner}>
                <div className={styles.moon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.hint}>mova o cursor: as luas escutam o seu gesto.</p>
    </div>
  );
};
