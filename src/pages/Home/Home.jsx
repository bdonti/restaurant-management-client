import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss Home</title>
      </Helmet>
      <div className="w-full">
        <Banner></Banner>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
      </div>
    </div>
  );
};

export default Home;
