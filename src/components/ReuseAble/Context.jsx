const Context = ({ title, subtitle }) => {
  return (
    <>
      <div className="container mx-auto py-20 text-center bg-[#0000005f] px-[10%] space-y-4">
        <h1 className="text-3xl uppercase text-white">{title}</h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          enim laborum totam molestias consectetur repellendus ullam, ratione
          vitae quod et aliquam dignissimos sint fugiat officiis reiciendis
          repellat cum consequuntur tempora.
        </p>
      </div>
    </>
  );
};

export default Context;
