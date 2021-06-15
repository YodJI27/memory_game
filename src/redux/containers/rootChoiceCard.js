import { CHOICECARD, CLOSECARD, UPDATEARRAY } from "../../contants/types";
import image from "../../contants/constants";
import store from "../store";
import { updateArray } from "../reducers/actionCreators";

const initialState = {
  image,
};

const newCardsArray = [];

const ChoiceCard = (state = initialState, action) => {
  switch (action.type) {
    case CHOICECARD:
      return {
        ...state,
        icons: state.image.map((item) => {
          if (item.value === action.payload.value) {
            item.visible = true;
            newCardsArray.push(item);
            if (newCardsArray.length === 2) {
              if (newCardsArray[0].icon === newCardsArray[1].icon) {
                const newArrayState = state.image.filter((item) => {
                  if (item.icon !== newCardsArray[0].icon) {
                    return item;
                  }
                });
                store.dispatch(updateArray(newArrayState));
                state.image = newArrayState;
                newCardsArray.length = 0;
                return state.image;
              } else {
                setTimeout(() => {
                  newCardsArray.map((card) => {
                    card.visible = false;
                  });
                  newCardsArray.length = 0;
                }, 200);
              }
            }
          }
        }),
      };

    case UPDATEARRAY:
      return {
        ...state,
        image: action.payload.card,
      };
    default:
      return state;
  }
};

export default ChoiceCard;
