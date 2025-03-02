import { useLoaderData, useNavigate } from "react-router-dom";

const UserShowDetails = () => {
  const user = useLoaderData();

  const { id, name, username, email, phone, website, address, company } = user;

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center text-center leading-7 border border-emerald-300 rounded-xl m-5 p-8 bg-emerald-100 shadow-lg">
      <div>
        <h3>ID : {id}</h3>
        <h1>Name : {name}</h1>
        <h1>User-name : {username}</h1>
        <h5>Company : {company.name}</h5>
        <h5>Address : {address.street}</h5>
        <h5>Website : {website}</h5>
        <h4>
          Contact :{" "}
          <div>
            <small>Phone : {phone}</small> , <small>Email : {email}</small>
          </div>
        </h4>
        <button
          onClick={handleGoBack}
          className="btn bg-emerald-300 rounded-xl text-base font-medium"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserShowDetails;
