// src/components/Sphere/Sphere.tsx
import React from 'react';
import styles from './Sphere.module.css';
import { SphereId } from '../../types';

export interface SphereProps {
  id: SphereId;
  label: string;
  onClick: (id: SphereId) => void;
  isZooming?: boolean;
}

export const Sphere: React.FC<SphereProps> = ({ id, label, onClick, isZooming }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <button
      className={`${styles.sphere} ${isZooming ? styles.sphereZooming : ''}`}
      onClick={handleClick}
      type="button"
    >
      <div className={styles.core} />
      <span className={styles.label}>{label}</span>
    </button>
  );
};
