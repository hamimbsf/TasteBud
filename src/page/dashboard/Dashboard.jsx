import {
  FaBars,
  FaHome,
  FaMailBulk,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <>
      <div className="flex">
        <div className="drawer lg:drawer-open lg:w-[30%] ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              {/* Sidebar content here */}
              <li>
                <NavLink to="/">User Home</NavLink>
              </li>
              <li>
                <NavLink
                  className=" focus:text-white font-semibold"
                  to="/dashboard/cart"
                >
                  <FaShoppingCart /> My cart ({cart.length})
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink className=" focus:text-white font-semibold" to="/">
                  <FaHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink className=" focus:text-white font-semibold" to="/menu">
                  <FaBars /> Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  className=" focus:text-white font-semibold"
                  to="/our-shop/salad"
                >
                  <FaShop /> Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  className=" focus:text-white font-semibold"
                  to="/our-shop/salad"
                >
                  <FaMailBulk /> Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
