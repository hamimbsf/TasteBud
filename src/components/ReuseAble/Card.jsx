import React from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const Card = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  // console.log(refetch);

  // console.log(user);

  const handleAddToCart = () => {
    if (user && user?.email) {
      // add to db
      const cartItem = {
        menuId: _id,
        name,
        recipe,
        image,
        price,
        email: user?.email,
      };

      axiosSecure.post(`/carts`, cartItem).then((res) => {
        console.log(res.data);
        if (res?.data?.insertedId) {
          Swal.fire({
            title: "Congrats",
            text: `${name} added to your cart`,
            icon: "success",
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Log in to Add to cart",
        text: "Without log in you can't add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <>
      <div className="card card-compact rounded-none">
        <figure>
          <img className="object-center relative object-cover" src={image} />
          <p className="absolute top-4 right-4 text-white bg-slate-950 px-3 rounded-md py-2">
            ${price}
          </p>
        </figure>
        <div className="card-body text-center space-y-2">
          <h2 className="card-title justify-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={handleAddToCart}
              className="btn btn-outline border-x-0 border-t-0 text-white hover:btn-primary"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
