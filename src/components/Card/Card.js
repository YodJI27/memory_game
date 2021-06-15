import { connect, useDispatch } from "react-redux";
import "./Card.css";
import { addCardArray } from "../../redux/reducers/actionCreators";

const Card = ({ icon }) => {
  const dispatch = useDispatch();

  return (
    <div className="Card">
      <img
        src={icon.icon}
        className="Card__image"
        onClick={() => {
          dispatch(addCardArray(icon));
        }}
      ></img>
    </div>
  );
};

const mapDispatchToProps = { addCardArray };

export default connect(null, mapDispatchToProps)(Card);
