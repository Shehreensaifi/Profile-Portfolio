import User from "./User";
import "./Users.css";
import DUMMY_DATA from "./../Content";
const Users = (props) => {
  const userList = DUMMY_DATA.map((user) => (
    <User
      key={user.id}
      id={user.id}
      name={user.name}
      image={user.image}
      rating={user.rating}
      designation={user.designation}
      description={user.description}
    />
  ));
  return <ul className="container">{userList}</ul>;
};
export default Users;
