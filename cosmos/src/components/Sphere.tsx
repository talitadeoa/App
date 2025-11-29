// src/components/Sphere/Sphere.tsx
import React from 'react';
import { SphereId } from '../../types';

export interface SphereProps {
  id: SphereId;
  label: string;
  onClick: (id: SphereId) => void;
  isZooming?: boolean;
}

export const Sphere: React.FC<SphereProps> = ({
  id,
  label,
  onClick,
  isZooming,
}) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <button
      type="button"
      className={`sphere ${isZooming ? 'zooming' : ''}`}
      onClick={handleClick}
    >
      <div className="sphere-core" />
      <span className="sphere-label">{label}</span>
    </button>
  );
};
