import useGameStore from "../useGameStore";

function checkUserAnswer({ symbol, color }) {
  const {
    symbols,
    bannedSymbolIndex,
    bannedColor,
    robotPick,
    rightPick,
    corrects,
    mistakes,
  } = useGameStore.getState();

  const indexOfSelectedSymbol = symbols.indexOf(symbol);

  // Check if user picked the banned symbol
  if (indexOfSelectedSymbol === bannedSymbolIndex) {
    useGameStore.setState({ mistakes: mistakes + 1 });
    triggerWrongPickEffect();
    return;
  }

  // Check if user picked the banned color
  if (color === bannedColor) {
    useGameStore.setState({ mistakes: mistakes + 1 });
    triggerWrongPickEffect();
    return;
  }

  // Check if user picked the robot's choice
  if (symbol.id === robotPick.id) {
    useGameStore.setState({ mistakes: mistakes + 1 });
    triggerWrongPickEffect();
    return;
  }

  // Validate rightPick to ensure it isn't overridden by rules
  const isRightPickInvalid =
    rightPick.id === robotPick.id ||
    symbols.indexOf(rightPick) === bannedSymbolIndex;

  // If user picks the invalid right pick, it's also a wrong answer
  if (isRightPickInvalid && symbol.id === rightPick.id) {
    triggerWrongPickEffect();
    return;
  }

  if (!isRightPickInvalid && symbol.id !== rightPick.id) {
    useGameStore.setState({ mistakes: mistakes + 1 });
    triggerWrongPickEffect();
    return;
  }

  // Check if the pick is correct
  if (!isRightPickInvalid && symbol.id === rightPick.id) {
    useGameStore.setState({ corrects: corrects + 1 });
    return;
  }

  // Check if rick pick is invalid and user picked something that was not wrong
  if (
    isRightPickInvalid &&
    symbol.id !== robotPick.id &&
    indexOfSelectedSymbol !== bannedSymbolIndex
  ) {
    useGameStore.setState({ corrects: corrects + 1 });
    return;
  }

  return;
}

function triggerWrongPickEffect() {
  useGameStore.setState({ wrongPick: true });
  setTimeout(() => {
    useGameStore.setState({ wrongPick: false });
  }, 1000);
}

export default checkUserAnswer;
