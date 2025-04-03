import useGameStore from "../useGameStore";
import { symbols } from "../../constants/Symbol";

function getRandomSymbols() {
  const randomSymbols = [...symbols]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  useGameStore.setState({
    symbols: randomSymbols,
  });
}

export default getRandomSymbols;
