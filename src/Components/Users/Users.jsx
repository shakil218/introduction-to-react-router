import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  // console.log(users);
  return (
    <div>
      <h1 className="text-5xl font-bold text-center text-green-300 my-24">
        This is our smart and productive Users.
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
