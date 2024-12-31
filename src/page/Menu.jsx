import { Helmet } from "react-helmet-async";
import Cover from "../components/ReuseAble/Cover";
import banner from "../../public/assets/banner3.jpg";
import featured from "../../public/assets/featured.jpg";
import dessertImg from "../../public/assets/dessert-bg.jpeg";
import pizzaImg from "../../public/assets/pizza-bg.jpg";
import soupImg from "../../public/assets/soup-bg.jpg";
import saladImg from "../../public/assets/salad-bg.jpg";
import ReUse from "../components/ReuseAble/ReUse";
import UseMenu from "../hooks/UseMenu";
import MenuItem from "../components/MenuItem";
import { Link } from "react-router-dom";
import MenuCategory from "../components/MenuCategory";

const Menu = () => {
  const [menu] = UseMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  //   console.log(soup);

  return (
    <>
      <Helmet>
        <title>TasteBud || Our Menu</title>
      </Helmet>
      <Cover banner={banner} title="our menu" />
      {/* ALL MENU */}
      <div className="">
        <ReUse title="today's offer" subtitle="---Don't miss---" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 container mx-auto">
          {offered.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
        <Link to="/our-shop">
          <button className="btn btn-outline border-x-0 border-t-0 hover:btn-success mx-auto block my-8">
            View Full Menu
          </button>
        </Link>
      </div>
      <Cover banner={dessertImg} title="dessert" />
      {/* DESSERTS */}
      <MenuCategory category={dessert} title="dessert" />
      {/* pizza */}
      <Cover banner={pizzaImg} title="pizza" />
      <MenuCategory category={pizza} title="pizza" />
      {/* salad */}
      <Cover banner={saladImg} title="salads" />
      <MenuCategory category={salads} title="salad" />
      {/* soup */}
      <Cover banner={soupImg} title="soup" />
      <MenuCategory category={soup} title="soup" />
    </>
  );
};

export default Menu;
