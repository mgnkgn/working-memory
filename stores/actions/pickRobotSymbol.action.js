import useGameStore from "../useGameStore";

async function pickRobotSymbol() {
  const { symbols } = useGameStore.getState();
  const randomRobotPick = symbols[Math.floor(Math.random() * symbols.length)];
  const randomRightPick = symbols[Math.floor(Math.random() * symbols.length)];
  const randomBannedIndex = Math.floor(Math.random() * symbols.length);

  console.log("Robot picked:", randomRobotPick);
  console.log("Right pick:", randomRightPick);

  useGameStore.setState({
    robotPick: randomRobotPick,
    rightPick: randomRightPick,
    bannedSymbolIndex: randomBannedIndex,
  });

  // Wait for 1 second before updating the state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return randomRobotPick;
}

export default pickRobotSymbol;
