// src/views/Home/Home.tsx
import React from 'react';
import { SphereDefinition, SphereId } from '../../types';
import { Sphere } from '../../components/Sphere/Sphere';

interface HomeProps {
  spheres: SphereDefinition[];
  onSphereClick: (id: SphereId) => void;
  zoomingSphere: SphereId | null;
}

export const Home: React.FC<HomeProps> = ({
  spheres,
  onSphereClick,
  zoomingSphere,
}) => {
  const isBackgroundBlurred = Boolean(zoomingSphere);

  return (
    <div className="home-container">
      <div className="home-title">
        <h1>cosmos íntimo</h1>
        <p>toque em uma esfera para entrar na sua órbita.</p>
      </div>

      <div
        className={`sphere-grid ${isBackgroundBlurred ? 'blurred' : ''}`}
      >
        {spheres.map((sphere) => (
          <Sphere
            key={sphere.id}
            id={sphere.id}
            label={sphere.label}
            onClick={onSphereClick}
            isZooming={zoomingSphere === sphere.id}
          />
        ))}
      </div>
    </div>
  );
};
