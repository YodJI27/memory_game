import { combineReducers } from "redux";
import rootCards from "../containers/rootCards";
import ChoiceCard from "../containers/rootChoiceCard";

const allReducers = combineReducers({
  rootCards,
  ChoiceCard,
});

export default allReducers;
