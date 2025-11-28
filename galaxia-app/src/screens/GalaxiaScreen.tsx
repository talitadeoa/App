import SolarSystemCanvas from "../components/SolarSystemCanvas";

export default function GalaxiaScreen() {
  return (
    <div className="galaxia-wrapper">
      <SolarSystemCanvas />
      <div className="hud">
        Clique no Sol, em planetas ou luas • Clique no vazio para voltar à visão geral
      </div>
    </div>
  );
}
