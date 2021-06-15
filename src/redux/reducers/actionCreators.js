import icons from "../../contants/constants";
import { CARDS, CHOICECARD, CLOSECARD, UPDATEARRAY } from "../../contants/types";

const cardsCreator = () => {
  return {
    type: CARDS,
    payload: {
      icons,
    },
  };
};

export const addCardArray = (card) => {
  return {
    type: CHOICECARD,
    payload: {
      value: card.value,
      icon: card.icon
    },
  };
};
export const deleteCardArray = (card) => {
  return {
    type: CLOSECARD,
    payload: {
      value: card,
    },
  };
};

export const updateArray = (card) => {
  return (dispatch) => {
    return setTimeout(
      () =>
        dispatch({
          type: UPDATEARRAY,
          payload: {
            card: card,
          },
        }),
      2000
    );
  };
}


export default { cardsCreator };
