import { connect, useDispatch } from "react-redux";
import "./Card.css";
import { addCardArray, closedCards } from "../../redux/reducers/actionCreators";

const Card = ({ icon }) => {
  const dispatch = useDispatch();

  const handleChangeImage = () => {
    dispatch(addCardArray(icon));
    if (icon.visible === true) {
      dispatch(closedCards(false, icon));
    }
  };

  return (
    <div className="Card" onClick={handleChangeImage}>
      <img
        src={icon.icon}
        className={icon.visible ? "Card__image-active" : "Card__image"}
      ></img>
    </div>
  );
};

const mapStateToProps = (state) => {
  const cardsCards = state.ChoiceCard.image.map((item) => {
    return item.visible;
  });
  return {
    vovapupkin: cardsCards,
  };
};
const mapDispatchToProps = { addCardArray, closedCards };

export default connect(mapStateToProps, mapDispatchToProps)(Card);
