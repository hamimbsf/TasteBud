import React from "react";

const Card = ({ item }) => {
  const { name, recipe, image, price } = item;
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
            <button className="btn btn-outline border-x-0 border-t-0 text-white hover:btn-primary">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
