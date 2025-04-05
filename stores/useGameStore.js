import { create } from "zustand";

const useGameStore = create((set, get) => ({
  symbols: [],
  isRobotPicking: true,
  robotPick: {},
  rightPick: {},
  bannedSymbolIndex: 0,
  colors: ["crimson", "lightseagreen", "indigo", "dodgerblue"],
  bannedColor: "red",
  corrects: 0,
  mistakes: 0,
  wrongPick: false,
  round: 0,

  timer: 60 * 5,
  timerInterval: null,

  startTimer: () => {
    if (get().timerInterval) return;
    clearInterval(get().timerInterval);

    const interval = setInterval(() => {
      set((state) => {
        if (state.timer > 0) {
          return { timer: state.timer - 1 };
        } else {
          clearInterval(interval);
          return { timer: 0 };
        }
      });
    }, 1000);

    set({ timerInterval: interval });
  },
  stopTimer: () => {
    clearInterval(get().timerInterval);
    set({ timerInterval: null });
  },
}));

export default useGameStore;
