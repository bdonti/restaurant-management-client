import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const OrderCard = ({ item }) => {
  const { image, name, price, recipe, _id } = item;
  const navigate = useNavigate();
  const { user } = useAuth();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  const handleAddToCart = (food) => {
    console.log(food);
    if (user && user.email) {
      //send cart item
      const cartItem = {
        menuId: _id,
        userEmail: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          toast.success(`${food.name} added to cart successfully`);
        }
        refetch();
      });
    } else {
      toast.error("Please Login to add to cart");
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <div className="card w-96 shadow-xl">
      <figure>
        <img src={image} alt="Food" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body">
        <div className="flex flex-col justify-center items-center space-y-3">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline hover:bg-[#111827] hover:text-[#BB8506] border-[#BB8506] border-0 border-b-4 mt-4"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
