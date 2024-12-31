import React from "react";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ category, title }) => {
  return (
    <>
      <div className="py-24 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {category.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
        <Link to={`/our-shop/${title}`}>
          <button className="btn uppercase btn-outline border-x-0 border-t-0 hover:btn-success mx-auto block my-8">
            View {title}
          </button>
        </Link>
      </div>
    </>
  );
};

export default MenuCategory;
