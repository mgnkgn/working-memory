import { create } from "zustand";

const useGameStore = create(() => ({
  symbols: [],
  isRobotPicking: true,
  robotPick: {},
  rightPick: {},
  bannedSymbolIndex: 0,
  corrects: 0,
  mistakes: 0,
  wrongPick: false,
}));

export default useGameStore;
