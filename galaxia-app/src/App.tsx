// src/App.tsx
import React, { useState } from "react";
import "./styles.css";

import { SCREENS, ScreenId } from "./constants/screens";

// Telas
import HomeScreen from "./screens/HomeScreen";
import GalaxiaScreen from "./screens/GalaxiaScreen";
import LuasScreen from "./screens/LuasScreen";
import SolScreen from "./screens/SolScreen";
import SpaceScreen from "./screens/SpaceScreen";
import EclipseScreen from "./screens/EclipseScreen";
import AtomoScreen from "./screens/AtomoScreen";


// Wrapper
import ScreenWrapper from "./components/ScreenWrapper";

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>(SCREENS.HOME);

  console.log("currentScreen:", currentScreen);

  if (currentScreen === SCREENS.HOME) {
    return <HomeScreen onSelectScreen={setCurrentScreen} />;
  }

  return (
    <ScreenWrapper onBack={() => setCurrentScreen(SCREENS.HOME)}>
      {currentScreen === SCREENS.GALAXIA && <GalaxiaScreen />}
      {currentScreen === SCREENS.LUAS && <LuasScreen />}
      {currentScreen === SCREENS.SOL && <SolScreen />}
      {currentScreen === SCREENS.TERRA && <TerraScreen />}
      {currentScreen === SCREENS.ECLIPSE && <EclipseScreen />}
      {currentScreen === SCREENS.ATOMO && <AtomoScreen />}
      {currentScreen === SCREENS.SPACE && <SpaceScreen />}
    </ScreenWrapper>
  );
};

export default App;
