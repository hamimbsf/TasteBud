import React, { useContext } from "react";
import { MdAccountCircle } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const [cart] = useCart();

  const handleLoggedOut = () => {
    logoutUser()
      .then((res) => {
        Swal.fire({
          title: "you have successfully logged out",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const links = (
    <>
      <li>
        <NavLink className="font-semibold" to="/">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold" to="*">
          CONTACT US
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold" to="*">
          DASHBOARD
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold" to="/menu">
          OUR MENU
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold" to="/our-shop/salad">
          OUR SHOP
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed top-0 z-[999] px-8 py-4 backdrop-blur-sm bg-[#1c1c1c89]/30 ... justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link>
            <svg
              width="150"
              height="28"
              viewBox="0 0 350 48.56874310747565"
              // className="looka-1j8o68f"
              className="fill-current"
            >
              <defs id="SvgjsDefs1239"></defs>
              <g
                id="SvgjsG1240"
                featurekey="K5GtsI-0"
                transform="matrix(3.272826321299325,0,0,3.272826321299325,-0.5236517120142272,-18.06600279175327)"
                // fill="#111111"
              >
                <path d="M4.6 20 l0 -11.6 l-4.44 0 l0 -2.4 l11.52 0 l0 2.4 l-4.44 0 l0 11.6 l-2.64 0 z M24.4 20 l-1.18 -2.64 l-7.32 0 l-1.2 2.64 l-2.86 0 l6.28 -14 l2.88 0 l6.28 14 l-2.88 0 z M22.16 14.9 l-2.6 -5.96 l-2.6 5.96 l5.2 0 z M39 8.3 l-2.1 1.08 c-0.48 -0.8 -1.8 -1.56 -3.32 -1.56 c-1.96 0 -2.9 0.82 -2.9 1.86 c0 1.22 1.44 1.56 3.12 1.76 c2.92 0.36 5.64 1.12 5.64 4.46 c0 3.12 -2.76 4.46 -5.88 4.46 c-2.86 0 -5.06 -0.88 -6.1 -3.44 l2.2 -1.14 c0.62 1.54 2.24 2.22 3.94 2.22 c1.66 0 3.22 -0.58 3.22 -2.1 c0 -1.32 -1.38 -1.86 -3.24 -2.06 c-2.86 -0.34 -5.5 -1.1 -5.5 -4.24 c0 -2.88 2.84 -4.06 5.42 -4.08 c2.18 0 4.44 0.62 5.5 2.78 z M45.1 20 l0 -11.6 l-4.44 0 l0 -2.4 l11.52 0 l0 2.4 l-4.44 0 l0 11.6 l-2.64 0 z M64.22 17.4 l0 2.6 l-10.48 0 l0 -14 l10.48 0 l0 2.56 l-7.86 0 l0 3.22 l7.58 0 l0 2.46 l-7.58 0 l0 3.16 l7.86 0 z M68.78 13.940000000000001 l0 3.6 l4.04 0 c1.08 0 2.62 -0.36 2.62 -1.68 c0 -1.26 -1.54 -1.92 -2.62 -1.92 l-4.04 0 z M68.78 8.4 l0 3.22 l4.04 0 c1.66 0 2.2 -0.7 2.2 -1.5 c0 -0.64 -0.52 -1.72 -2.2 -1.72 l-4.04 0 z M72.82000000000001 6 c2.76 0 4.82 1.24 4.82 4.06 c0 1.08 -0.52 2.12 -1.82 2.7 c1.64 0.5 2.24 2.24 2.24 3.12 c0 3.12 -2.34 4.12 -5.24 4.12 l-6.64 0 l0 -14 l6.64 0 z M89.58 6.02 l2.62 0 l0 8.02 c0 4.14 -2.54 6.26 -6.06 6.26 c-3.36 0 -6.22 -2.04 -6.22 -6.26 l0 -8.02 l2.62 0 l0 8.02 c0 2.52 1.44 3.86 3.62 3.86 s3.42 -1.46 3.42 -3.86 l0 -8.02 z M100.1 6 c4.8 0 6.94 3.42 7 6.88 c0.06 3.54 -2.1 7.12 -7 7.12 l-5.5 0 l0 -14 l5.5 0 z M97.22 8.5 l0 8.96 l2.88 0 c3.18 0 4.44 -2.32 4.38 -4.6 c-0.06 -2.18 -1.34 -4.36 -4.38 -4.36 l-2.88 0 z"></path>
              </g>
            </svg>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end items-center gap-2">
          {/* <button className=" font-semibold">SignOut</button> */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                {user ? (
                  <img src={user?.photoURL} alt="" />
                ) : (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user ? (
                <>
                  <li>
                    <button onClick={handleLoggedOut}>Log Out</button>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {user ? cart?.length : 0}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
