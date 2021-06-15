import { CLOSECARD } from "../../contants/types";

const initialState = {
  card: false,
};

const closeCards = (state = initialState, action) => {
  switch (action.type) {
    case CLOSECARD:
      return {
        ...state,
        card: action.payload.close,
      };
    default:
      return state;
  }
};

export default closeCards;
