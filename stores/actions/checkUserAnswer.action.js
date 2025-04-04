import useGameStore from "../useGameStore";

function checkUserAnswer(symbol) {
  const {
    symbols,
    bannedSymbolIndex,
    robotPick,
    rightPick,
    corrects,
    mistakes,
  } = useGameStore.getState();

  const indexOfSelectedSymbol = symbols.indexOf(symbol);
  console.log(symbol, indexOfSelectedSymbol);

  // Check if user picked the banned symbol
  if (indexOfSelectedSymbol === bannedSymbolIndex) {
    console.log("wrong pick: banned symbol");
    useGameStore.setState({ mistakes: mistakes + 1 });
    triggerWrongPickEffect();
    return;
  }

  // Check if user picked the robot's choice
  if (symbol.id === robotPick.id) {
    console.log("wrong pick: robot's choice");
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
    console.log("wrong pick: invalid right pick");
    triggerWrongPickEffect();
    return;
  }

  // Check if the pick is correct
  if (!isRightPickInvalid && symbol.id === rightPick.id) {
    console.log("correct pick");
    useGameStore.setState({ corrects: corrects + 1 });
    return;
  }

  // Check if rick pick is invalid and user picked something that was not wrong
  if (
    isRightPickInvalid &&
    symbol.id !== robotPick.id &&
    indexOfSelectedSymbol !== bannedSymbolIndex
  ) {
    console.log("correct pick: right pick invalid, user picked a valid one");
    useGameStore.setState({ corrects: corrects + 1 });
    return;
  }

  // TODO: Implement voice pick logic if needed
  // if (symbol.id === voicePick.id) {
  //   console.log("wrong pick: voice selection banned");
  //   useGameStore.setState({ mistakes: mistakes + 1 });
  //   return;
  // }

  return;
}

function triggerWrongPickEffect() {
  useGameStore.setState({ wrongPick: true });
  setTimeout(() => {
    useGameStore.setState({ wrongPick: false });
  }, 1000);
}

export default checkUserAnswer;
