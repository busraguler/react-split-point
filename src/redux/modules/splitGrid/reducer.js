import * as actionTypes from "./actionTypes";

const lSGridSize = JSON.parse(localStorage.getItem("gridSize"));
const horizontalWindow = lSGridSize?.horizontalWindow;
const topVerticalWindow = lSGridSize?.topVerticalWindow;
const bottomVerticalWindow = lSGridSize?.bottomVerticalWindow;

const initialState = {
  gridSizes: {
    horizontalWindow: horizontalWindow
      ? [horizontalWindow[0], horizontalWindow[1]]
      : [60, 40],
    topVerticalWindow: topVerticalWindow
      ? [topVerticalWindow[0], topVerticalWindow[1]]
      : [70, 30],
    bottomVerticalWindow: bottomVerticalWindow
      ? [bottomVerticalWindow[0], bottomVerticalWindow[1]]
      : [70, 30],
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GRID_SIZES:
      const size = { ...state.gridSizes, ...action.payload };
      localStorage.setItem("gridSize", JSON.stringify(size));
      return {
        ...state,
        gridSizes: size,
      };
    default:
      return state;
  }
};

export default reducer;
