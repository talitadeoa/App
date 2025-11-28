import LuasCanvas from "../components/LuasCanvas";

export default function LuasScreen() {
  return (
    <div className="luas-wrapper">
      <LuasCanvas />
      <div className="hud">
        Clique em uma lua para focar • Clique de novo ou aperte Esc para voltar
      </div>
    </div>
  );
}
