import './Card.css';

const Card = ({icon}) => {
  return (
    <div className="Card">
      <img src={icon} className="Card__image"></img>
    </div>
  );
};

export default Card;
