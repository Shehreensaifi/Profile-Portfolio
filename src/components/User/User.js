import Star from "../Ui/Stars";
import Button1 from "../Ui/Button1";
import Button2 from "../Ui/Button2";
import "./User.css";
const User = (props) => {
  const userId = props.id;
  const cardClass = `box ${userId % 2 === 0 ? "card" : "card1"}`;
  return (
    <div className={cardClass}>
      <section className="home" key={props.id}>
        <div className="home-content">
          <h1 className="rating">{props.rating}</h1>
          <Star star={props.rating} />
          <h1>{props.name}</h1>
          <h3>{props.designation}</h3>
          <p>{props.description}</p>
          <Button1 />
        </div>

        <div className="home-img">
          <img src={props.image} alt="Profile"></img>
          <Button2 name={props.name} />
        </div>
      </section>
    </div>
  );
};
export default User;
