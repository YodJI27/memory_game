import { CHOICECARD, CLOSECARD, UPDATEARRAY } from "../../contants/types";
import image from "../../contants/constants";
import store from "../store";
import { updateArray } from "../reducers/actionCreators";

const initialState = {
  image,
};

const newCardsArray = [];

// const handleChange = (action, state) => {
//   console.log(state);
//   newCardsArray.push(action);
//   if (newCardsArray.length === 2) {
//     if (newCardsArray[0] === newCardsArray[1]) {
//       const newArrayState = state.image.filter((item) => {
//         if (item.icon !== newCardsArray[0]) {
//           return item;
//         }
//       });
//       store.dispatch(updateArray(newArrayState));
//       state.image = newArrayState;
//       newCardsArray.length = 0;
//       console.log(newArrayState)
//       return state.image;
//     }
//   }
// };

const ChoiceCard = (state = initialState, action) => {
  switch (action.type) {
    case CHOICECARD:
      return {
        ...state,
        icons: state.image.map((item) => {
          if (item.value === action.payload.value) {
            newCardsArray.push(action.payload.icon);
            if (newCardsArray.length === 2) {
              if (newCardsArray[0] === newCardsArray[1]) {
                const newArrayState = state.image.filter((item) => {
                  if (item.icon !== newCardsArray[0]) {
                    return item;
                  }
                });
                store.dispatch(updateArray(newArrayState));
                state.image = newArrayState;
                newCardsArray.length = 0;
                return state.image;
              }
              newCardsArray.length = 0;
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
