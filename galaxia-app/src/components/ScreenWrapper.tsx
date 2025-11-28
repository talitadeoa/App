export default function ScreenWrapper({ children, onBack }) {
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
