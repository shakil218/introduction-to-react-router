import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const User = ({ user }) => {
  const { id, name, username, email, phone } = user;
console.log(user);
  const navigate =useNavigate()

  const handleShowDetails = () => {
    navigate(`/user/${id}`)
  }

  return (
    <div className=" text-3xl border border-emerald-300 rounded-xl text-center m-5 p-8 bg-emerald-100 shadow-lg">
      <h1 className="font-semibold">{name}</h1>
      <h1>
        <small>Username:{username}</small>
      </h1>
      <p>
        <small>Email:{email}</small>
      </p>
      <p>
        <small>Phone:{phone}</small>
      </p>
      <button onClick={handleShowDetails} className="btn bg-emerald-300 rounded-xl text-base font-medium">Show Details</button>
    </div>
  );
};
User.propTypes = {
  user: PropTypes.object,
};
export default User;
