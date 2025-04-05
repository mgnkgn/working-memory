import useGameStore from "../useGameStore";
import shuffleColors from "./shuffleColor.action";

async function pickRobotSymbol() {
  const { symbols, colors, round } = useGameStore.getState();
  const randomRobotPick = symbols[Math.floor(Math.random() * symbols.length)];
  const randomRightPick = symbols[Math.floor(Math.random() * symbols.length)];
  const randomBannedIndex = Math.floor(Math.random() * symbols.length);
  const randomBannedColor = colors[Math.floor(Math.random() * colors.length)];

  if (round % 5 === 0) {
    shuffleColors();
  }

  useGameStore.setState({
    robotPick: randomRobotPick,
    rightPick: randomRightPick,
    bannedSymbolIndex: randomBannedIndex,
    bannedColor: randomBannedColor,
    round: round + 1,
  });

  // Wait for 1 second before updating the state
  await new Promise((resolve) => setTimeout(resolve, 1400));

  return randomRobotPick;
}

export default pickRobotSymbol;
