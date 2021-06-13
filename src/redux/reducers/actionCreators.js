import icons from "../../contants/constants";
import { CARDS } from "../../contants/types";

const cardsCreator = () => {
  return (dispatch) => {
    dispatch({
      type: CARDS,
      payload: {
        icons,
      },
    });
  };
};

export default { cardsCreator };
