import { create } from "zustand";

const useGameStore = create(() => ({
  symbols: [],
  score: 0,
  isRobotPicking: true,
}));

export default useGameStore;
