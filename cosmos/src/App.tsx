// src/App.tsx
import React, { useState } from 'react';
import { SphereId, SphereDefinition } from './types';
import { Home } from './views/Home/Home';
import { DetailView } from './views/DetailView/DetailView';
import { StarBackground } from './components/StarBackground/StarBackground';

const SPHERES: SphereDefinition[] = [
  { id: 'galaxia-maior', label: 'galáxia maior' },
  { id: 'galaxia-menor', label: 'galáxia menor' },
  { id: 'eclipse', label: 'eclipse' },
  { id: 'lua', label: 'lua' },
  { id: 'sol', label: 'sol' },
  { id: 'terra', label: 'terra' },
];

export const App: React.FC = () => {
  const [currentSphere, setCurrentSphere] = useState<SphereId | null>(null);
  const [zoomingSphere, setZoomingSphere] = useState<SphereId | null>(null);

  const handleSphereClick = (id: SphereId) => {
    setZoomingSphere(id);
    // Espera a animação de zoom antes de trocar para a tela de detalhe
    setTimeout(() => {
      setCurrentSphere(id);
      setZoomingSphere(null);
    }, 700);
  };

  const handleBackToHome = () => {
    setCurrentSphere(null);
  };

  return (
    <div className="app-root">
      <StarBackground />
      {currentSphere === null ? (
        <Home
          spheres={SPHERES}
          onSphereClick={handleSphereClick}
          zoomingSphere={zoomingSphere}
        />
      ) : (
        <DetailView sphereId={currentSphere} onBack={handleBackToHome} />
      )}
    </div>
  );
};

export default App;
