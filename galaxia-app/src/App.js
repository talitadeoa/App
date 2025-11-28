import { useState } from "react";
import "./styles.css";

import { SCREENS } from "./constants/screens";

// Telas
import HomeScreen from "./screens/HomeScreen";
import GalaxiaScreen from "./screens/GalaxiaScreen";
import LuasScreen from "./screens/LuasScreen";
import SolScreen from "./screens/SolScreen";
import TerraScreen from "./screens/TerraScreen";
import EclipseScreen from "./screens/EclipseScreen";

// Wrapper
import ScreenWrapper from "./components/ScreenWrapper";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.HOME);

  // DEBUG: mostra qual tela o estado está marcando
  console.log("currentScreen:", currentScreen);

  // Tela inicial com os 5 círculos
  if (currentScreen === SCREENS.HOME) {
    return <HomeScreen onSelectScreen={setCurrentScreen} />;
  }

  // Telas internas, embrulhadas no ScreenWrapper
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
