import { SCREENS } from "../constants/screens";

export default function HomeScreen({ onSelectScreen }) {
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
