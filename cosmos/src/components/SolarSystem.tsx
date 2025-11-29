// src/components/SolarSystem/SolarSystem.tsx
import React, { useState, useCallback } from 'react';

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
      const relX = (event.clientX - rect.left) / rect.width; // 0–1
      const relY = (event.clientY - rect.top) / rect.height; // 0–1

      const speed = 0.8 + relX * 0.6; // 0.8–1.4
      const wobble = 0.8 + Math.abs(relY - 0.5) * 1.0; // 0.8–1.3

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
      className="system-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={styleVars}
    >
      <div className="system">
        <div className="star-core" />

        <div className="planet-orbit">
          <div className="planet">
            {/* 4 luas, órbitas trocoidais aproximadas */}
            <div className="moon-orbit moon-orbit-1">
              <div className="moon-inner">
                <div className="moon" />
              </div>
            </div>
            <div className="moon-orbit moon-orbit-2">
              <div className="moon-inner">
                <div className="moon" />
              </div>
            </div>
            <div className="moon-orbit moon-orbit-3">
              <div className="moon-inner">
                <div className="moon" />
              </div>
            </div>
            <div className="moon-orbit moon-orbit-4">
              <div className="moon-inner">
                <div className="moon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="solar-hint">
        mova o cursor: as luas escutam o seu gesto.
      </p>
    </div>
  );
};
