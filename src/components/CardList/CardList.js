import Card from "../Card/Card";
import "./CardList.css";
import { connect } from "react-redux";


const CardList = ({ cardsArray }) => {
  return (
    <section className="CardList">
      <div className="CardList__info">
        <label className="CardList__label">
          {" "}
          Введите имя:
          <input className="CardList__input"></input>
        </label>
        <button className="CardList__button">Начать игру</button>
      </div>
      <div className="CardList__cards">
        {cardsArray.map((item) => {
          return <Card icon={item} key={item.value}/>;
        })}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    cardsArray: state.rootCards.icons,
  };
};

export default connect(mapStateToProps, null)(CardList);
