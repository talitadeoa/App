// src/views/Home/Home.tsx
import React from 'react';
import styles from './Home.module.css';
import { SphereDefinition, SphereId } from '../../types';
import { Sphere } from '../../components/Sphere/Sphere';

interface HomeProps {
  spheres: SphereDefinition[];
  onSphereClick: (id: SphereId) => void;
  zoomingSphere: SphereId | null;
}

export const Home: React.FC<HomeProps> = ({ spheres, onSphereClick, zoomingSphere }) => {
  const isBackgroundBlurred = Boolean(zoomingSphere);

  return (
    <div className={styles.container}>
      <div className={styles.overlayTitle}>
        <h1>cosmos íntimo</h1>
        <p>toque em uma esfera para entrar na sua órbita.</p>
      </div>

      <div
        className={`${styles.sphereGrid} ${isBackgroundBlurred ? styles.blurred : ''}`}
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
