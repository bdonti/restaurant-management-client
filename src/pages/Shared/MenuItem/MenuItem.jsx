const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[118px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name} ------------------</h3>
        <p className="text-[#737373] w-[400px] mx-auto">{recipe}</p>
      </div>
      <p className="text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuItem;
