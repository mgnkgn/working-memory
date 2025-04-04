import useGameStore from "../useGameStore";

function resetGame() {
  useGameStore.setState({
    bannedSymbolIndex: 0,
    corrects: 0,
    mistakes: 0,
    robotPick: {},
    timer: 300,
    timerInterval: null,
  });
}

export default resetGame;
