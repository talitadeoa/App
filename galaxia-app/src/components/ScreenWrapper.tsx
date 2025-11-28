// src/components/ScreenWrapper.tsx
import React from "react";

type ScreenWrapperProps = {
  onBack: () => void;
  children: React.ReactNode;
};

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ onBack, children }) => {
  return (
    <div className="screen-root">
      <button className="back-button" onClick={onBack}>
        ⬅ Voltar
      </button>
      {children}
    </div>
  );
};

export default ScreenWrapper;
