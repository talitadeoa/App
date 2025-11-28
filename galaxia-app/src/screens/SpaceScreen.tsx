// src/screens/SpaceScreen.tsx
import React from "react";

const SpaceScreen: React.FC = () => {
  const handleClick = (id: number) => {
    console.log(`Esfera ${id} clicada`);
    // futura lógica: mostrar texto, mudar camada, etc.
  };

  return (
    <div className="screen-root">
      <h2>Espaço</h2>
      <p>Clique nas esferas para viajar por camadas do espaço.</p>

      <div className="space-balls-row">
        <button
          className="space-ball space-ball--1"
          onClick={() => handleClick(1)}
        >
          1
        </button>
        <button
          className="space-ball space-ball--2"
          onClick={() => handleClick(2)}
        >
          2
        </button>
        <button
          className="space-ball space-ball--3"
          onClick={() => handleClick(3)}
        >
          3
        </button>
      </div>
    </div>
  );
};

export default SpaceScreen;
