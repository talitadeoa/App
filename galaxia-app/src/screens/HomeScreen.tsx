// src/screens/HomeScreen.tsx
import React from "react";
import { SCREENS, ScreenId } from "../constants/screens";

type HomeScreenProps = {
  onSelectScreen: (screen: ScreenId) => void;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ onSelectScreen }) => {
  return (
    <div className="home-root">
      <div className="home-overlay">
        <h1 className="home-title">Cosmo App</h1>

        <button
          className="circle circle-pos-galaxia"
          onClick={() => onSelectScreen(SCREENS.GALAXIA)}
        >
          Galáxia
        </button>

        <button
          className="circle circle-pos-luas"
          onClick={() => onSelectScreen(SCREENS.LUAS)}
        >
          Luas
        </button>

        <button
          className="circle circle-pos-sol"
          onClick={() => onSelectScreen(SCREENS.SOL)}
        >
          Sol
        </button>

        <button
          className="circle circle-pos-terra"
          onClick={() => onSelectScreen(SCREENS.TERRA)}
        >
          Terra
        </button>

        <button
          className="circle circle-pos-eclipse"
          onClick={() => onSelectScreen(SCREENS.ECLIPSE)}
        >
          Eclipse
        </button>

        {/* NOVO: Atomo */}
        <button
          className="circle circle-pos-atomo"
          onClick={() => onSelectScreen(SCREENS.ATOMO)}
        >
          Átomo
        </button>

        {/* NOVO: Space */}
        <button
          className="circle circle-pos-space"
          onClick={() => onSelectScreen(SCREENS.SPACE)}
        >
          Espaço
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
