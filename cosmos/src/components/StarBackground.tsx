// src/components/StarBackground/StarBackground.tsx
import React, { useMemo } from 'react';

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
}

const generateStars = (count: number): Star[] => {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 1.8 + 0.5,
      delay: Math.random() * 5,
      duration: Math.random() * 6 + 4,
    });
  }
  return stars;
};

export const StarBackground: React.FC = () => {
  const stars = useMemo(() => generateStars(140), []);

  return (
    <div className="sky">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={
            {
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};
