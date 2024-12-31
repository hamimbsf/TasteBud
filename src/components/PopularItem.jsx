import UseMenu from "../hooks/UseMenu";
import MenuItem from "./MenuItem";
import ReUse from "./ReuseAble/ReUse";

const PopularItem = () => {
  const [menu] = UseMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <>
      <div className="my-16">
        <ReUse title="From Our menu" subtitle="--Check it out--" />
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-6 my-10">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item} />
          ))}
        </div>
        <button className="btn btn-outline border-x-0 border-t-0 hover:btn-success mx-auto block my-8">
          View Full Menu
        </button>
      </div>
    </>
  );
};

export default PopularItem;
