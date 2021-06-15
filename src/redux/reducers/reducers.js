import { combineReducers } from "redux";
import rootCards from "../containers/rootCards";
import ChoiceCard from "../containers/rootChoiceCard";
import closeCards from "../containers/rootClosedCard";

const allReducers = combineReducers({
  rootCards,
  ChoiceCard,
  closeCards
});

export default allReducers;
