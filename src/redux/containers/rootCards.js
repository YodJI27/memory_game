import icons from "../../contants/constants";
import { CARDS, UPDATEARRAY } from "../../contants/types";

const initialState = {
  icons,
};

const rootCards = (state = initialState, action) => {
  switch (action.type) {
    case UPDATEARRAY:
      return {
        ...state,
        icons: action.payload.card,
      };
    default:
      return state;
  }
};

export default rootCards;
