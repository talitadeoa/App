import { useState } from "react";
import "./styles.css";

import { SCREENS } from "./constants/screens";

import HomeScreen from "./screens/Home";
import ScreenWrapper from "./components/ScreenWrapper";

import GalaxiaScreen from "./screens/Galaxia";
import LuasScreen from "./screens/LuasScreen";
import SolScreen from "./screens/SolScreen";
import TerraScreen from "./screens/TerraScreen";
import EclipseScreen from "./screens/EclipseScreen";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.HOME);

  // Tela inicial com os 5 círculos
  if (currentScreen === SCREENS.HOME) {
    return <HomeScreen onSelectScreen={setCurrentScreen} />;
  }

  // Telas internas, sempre embrulhadas no ScreenWrapper
  return (
    <ScreenWrapper onBack={() => setCurrentScreen(SCREENS.HOME)}>
      {currentScreen === SCREENS.GALAXIA && <GalaxiaScreen />}
      {currentScreen === SCREENS.LUAS && <LuasScreen />}
      {currentScreen === SCREENS.SOL && <SolScreen />}
      {currentScreen === SCREENS.TERRA && <TerraScreen />}
      {currentScreen === SCREENS.ECLIPSE && <EclipseScreen />}
    </ScreenWrapper>
  );
}
