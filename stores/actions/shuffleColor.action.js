import useGameStore from "../useGameStore";

function shuffleColors() {
  const { colors } = useGameStore.getState();
  const shuffledColors = [...colors];
  for (let i = shuffledColors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledColors[i], shuffledColors[j]] = [
      shuffledColors[j],
      shuffledColors[i],
    ];
  }
  useGameStore.setState({ colors: shuffledColors });
}

export default shuffleColors;
