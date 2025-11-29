// src/views/DetailView/DetailView.tsx
import React from 'react';
import styles from './DetailView.module.css';
import { SphereId } from '../../types';
import { SolarSystem } from '../../components/SolarSystem/SolarSystem';

interface DetailViewProps {
  sphereId: SphereId;
  onBack: () => void;
}

const labelMap: Record<SphereId, string> = {
  'galaxia-maior': 'galáxia maior',
  'galaxia-menor': 'galáxia menor',
  eclipse: 'eclipse',
  lua: 'lua',
  sol: 'sol',
  terra: 'terra',
};

export const DetailView: React.FC<DetailViewProps> = ({ sphereId, onBack }) => {
  const label = labelMap[sphereId];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton} type="button" onClick={onBack}>
          ← voltar
        </button>
      </header>

      <section className={styles.content}>
        <div className={styles.textBlock}>
          <h2>{label}</h2>
          <p>
            você atravessou o espaço e caiu nesse pequeno sistema solar.
            cada órbita aqui responde gentilmente ao seu movimento.
          </p>
        </div>

        <SolarSystem />
      </section>
    </div>
  );
};
