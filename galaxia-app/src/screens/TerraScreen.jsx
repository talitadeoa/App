import SpaceScene from "../components/SpaceScene";

export default function TerraScreen() {
  return (
    <>
      <h2>Terra</h2>
      <p>
        Rotação, translação, ângulo do eixo, visualizações de dia/noite, etc.
      </p>
      <SpaceScene />
    </>
  );
}
