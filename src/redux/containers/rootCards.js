import icons from "../../contants/constants";
import { CARDS } from "../../contants/types";

const initialState = {
    icons,
};

const rootCards = (state = initialState, action) => {
  switch (action.type) {
    case CARDS:
      return {
        ...state,
        icons: state.icons,
      };
    default:
      return state;
  }
};

export default rootCards;
