import { Outlet, useNavigation } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Navber></Navber>
      <Header></Header>
      <div>
        {navigation.state === "loading" ? (
          <p className=" text-center">Loading...</p>
        ) : (
          <Outlet></Outlet>
        )}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
