// src/types.ts
export type SphereId =
  | 'galaxia-maior'
  | 'galaxia-menor'
  | 'eclipse'
  | 'lua'
  | 'sol'
  | 'terra';

export interface SphereDefinition {
  id: SphereId;
  label: string;
}
