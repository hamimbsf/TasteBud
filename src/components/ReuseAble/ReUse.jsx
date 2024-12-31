const ReUse = ({ title, subtitle }) => {
  return (
    <div className=" my-8 md:w-[30%] mx-auto text-center">
      <p className=" text-yellow-600 italic py-2">{subtitle}</p>
      <h1 className="text-3xl uppercase py-2 border-y-2 border-[#c5bbbb]">
        {title}
      </h1>
    </div>
  );
};

export default ReUse;
