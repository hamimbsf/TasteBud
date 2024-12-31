import PopularItem from "../components/PopularItem";
import Banner from "./Banner";
import Category from "./Category";
import ChefRecomend from "./ChefRecomend";
import Featured from "./Featured";
import OurRecomend from "./OurRecomend";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <ChefRecomend />
      <PopularItem />
      <OurRecomend />
      <Featured />
      <Testimonial />
    </>
  );
};

export default Home;
