// SpaceScene.jsx
import { useState } from "react";

// importe as imagens (ajuste os caminhos dos arquivos)
// import imgSpace from "./img/space-earth-moon-sun.jpg";  // imagem 1
// import imgEarth from "./img/earth-sunrise.jpg";         // imagem 2

export default function SpaceScene() {
  const [view, setView] = useState("space"); // 'space' ou 'earth'

  const handleEarthClick = () => {
    setView("earth");
  };

  const handleMoonClick = () => {
    alert("Você clicou na Lua 🌙 (aqui você pode abrir outra tela, info, etc.)");
  };

  const handleSunClick = () => {
    alert("Você clicou no Sol ☀️ (talvez outra cena futuramente?)");
  };

  if (view === "earth") {
    // tela com a segunda imagem
    return (
      <div className="scene-container">
        <img src={imgEarth} alt="Terra vista do espaço ao nascer do Sol" className="scene-image" />
        <button className="back-button" onClick={() => setView("space")}>
          Voltar para o espaço
        </button>
      </div>
    );
  }

  // tela com a primeira imagem e as áreas clicáveis
  return (
    <div className="scene-container">
      <div className="scene-wrapper">
        <img
          src={imgSpace}
          alt="Terra, Lua e Sol no espaço"
          className="scene-image"
        />

        {/* Hotspot Terra */}
        <button
          className="hotspot hotspot-earth"
          onClick={handleEarthClick}
          aria-label="Terra"
        />

        {/* Hotspot Lua */}
        <button
          className="hotspot hotspot-moon"
          onClick={handleMoonClick}
          aria-label="Lua"
        />

        {/* Hotspot Sol */}
        <button
          className="hotspot hotspot-sun"
          onClick={handleSunClick}
          aria-label="Sol"
        />
      </div>
    </div>
  );
}
