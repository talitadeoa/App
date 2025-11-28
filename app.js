// App.jsx
import { useState } from "react";
import "./styles.css";

const SCREENS = {
  HOME: "home",
  GALAXIA: "galaxia",
  LUAS: "luas",
  SOL: "sol",
  TERRA: "terra",
  ECLIPSE: "eclipse",
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.HOME);

  if (currentScreen === SCREENS.HOME) {
    return <HomeScreen onSelectScreen={setCurrentScreen} />;
  }

  return (
    <ScreenWrapper onBack={() => setCurrentScreen(SCREENS.HOME)}>
      {currentScreen === SCREENS.GALAXIA && <GalaxiaInterna />}
      {currentScreen === SCREENS.LUAS && <Luas />}
      {currentScreen === SCREENS.SOL && <Sol />}
      {currentScreen === SCREENS.TERRA && <Terra />}
      {currentScreen === SCREENS.ECLIPSE && <Eclipse />}
    </ScreenWrapper>
  );
}

// ----- TELA INICIAL COM OS 5 CÍRCULOS -----

function HomeScreen({ onSelectScreen }) {
  const circles = [
    { id: SCREENS.GALAXIA, label: "Galáxia interna" },
    { id: SCREENS.LUAS, label: "Luas" },
    { id: SCREENS.SOL, label: "Sol" },
    { id: SCREENS.TERRA, label: "Terra" },
    { id: SCREENS.ECLIPSE, label: "Eclipse" },
  ];

  return (
    <div className="app-root">
      <div className="space-bg" />
      <div className="home-overlay">
        <h1 className="title">Mapa Interativo Cósmico</h1>
        <p className="subtitle">
          Clique em um círculo para entrar. Clique no vazio, lá dentro, para voltar.
        </p>
        <div className="circle-grid">
          {circles.map((circle) => (
            <button
              key={circle.id}
              className="circle"
              onClick={() => onSelectScreen(circle.id)}
            >
              <span className="circle-label">{circle.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----- ENVOLTÓRIO DAS TELAS INTERNAS -----
// Clique no fundo volta pra home. Clique no conteúdo não volta.

function ScreenWrapper({ children, onBack }) {
  return (
    <div className="screen-root" onClick={onBack}>
      <div
        className="screen-content"
        onClick={(e) => {
          e.stopPropagation(); // impede o clique de subir e voltar
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ----- TELAS INTERNAS (PLACEHOLDERS) -----
// Aqui você depois encaixa canvas/SVG/animações 2D.

function GalaxiaInterna() {
  return (
    <>
      <h2>Galáxia interna</h2>
      <p>
        Aqui entra sua visualização 2D da galáxia interna: braços, núcleo,
        estrelas, talvez trilhas orbitais…
      </p>
    </>
  );
}

function Luas() {
  return (
    <>
      <h2>Luas</h2>
      <p>
        Espaço para fases da lua, órbita em torno da Terra, sombras, alinhamentos…
      </p>
    </>
  );
}

function Sol() {
  return (
    <>
      <h2>Sol</h2>
      <p>
        Estrutura do Sol, brilho, erupções, camadas, ou o que você quiser destacar.
      </p>
    </>
  );
}

function Terra() {
  return (
    <>
      <h2>Terra</h2>
      <p>
        Rotação, translação, ângulo do eixo, visualizações de dia/noite, etc.
      </p>
    </>
  );
}

function Eclipse() {
  return (
    <>
      <h2>Eclipse</h2>
      <p>
        Combine Sol, Terra e Lua para mostrar eclipses solares e lunares,
        alinhamentos e sombras.
      </p>
    </>
  );
}
