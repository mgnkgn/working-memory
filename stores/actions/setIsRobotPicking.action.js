import useGameStore from "../useGameStore";

function setIsRobotPicking(isPicking) {
  return useGameStore.setState({ isRobotPicking: isPicking });
}

export default setIsRobotPicking;
