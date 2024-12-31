import React from "react";
import ReUse from "../components/ReuseAble/ReUse";
import featured from "../../public/assets/featured.jpg";

const Featured = () => {
  return (
    <>
      <div
        className={`bg-[url('../../public/assets/featured.jpg')] bg-cover bg-center bg-fixed`}
      >
        <div className="backdrop-brightness-50 py-10">
          <ReUse title="from our menu" subtitle="--Check it out--" />
          <div className="flex justify-center items-center gap-6 container mx-auto mb-10">
            <div>
              <img className="" src={featured} alt="" />
            </div>
            <div className=" space-y-3">
              <h2>{new Date().toLocaleDateString()}</h2>
              <p className="text-lg">Where can i get some ?</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Similique tenetur eligendi aspernatur aliquam dolorum in
                sapiente? Nulla voluptates facilis quasi quam laboriosam? Libero
                assumenda possimus quas ipsum perferendis, ipsam aut?
              </p>
              <button className="btn btn-outline border-x-0 border-t-0 hover:btn text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
