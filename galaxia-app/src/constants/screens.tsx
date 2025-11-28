// src/constants/screens.ts
export const SCREENS = {
  HOME: "HOME",
  GALAXIA: "GALAXIA",
  LUAS: "LUAS",
  SOL: "SOL",
  TERRA: "TERRA",
  ECLIPSE: "ECLIPSE",
  ATOMO: "ATOMO",
  SPACE: "SPACE",
} as const;

export type ScreenId = (typeof SCREENS)[keyof typeof SCREENS];
