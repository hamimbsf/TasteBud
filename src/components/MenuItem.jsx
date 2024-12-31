const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <>
      <div className="flex items-center gap-6 p-4">
        <div>
          <img
            className="w-20 h-20 object-cover object-center rounded-tl-none rounded-full"
            src={image}
            alt={`${name} image`}
          />
        </div>
        <div className="flex-1 flex justify-between">
          <div>
            <h2 className="text-lg font-bold uppercase">{name}</h2>
            <p className="text-sm">{recipe}</p>
          </div>
          <p className="text-lg font-semibold text-yellow-600">{price}</p>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
