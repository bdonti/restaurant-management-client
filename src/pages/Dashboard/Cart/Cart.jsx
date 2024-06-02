import { RiDeleteBinLine } from "react-icons/ri";
import SectionTile from "../../../components/SectionTitle/SectionTile";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your food has been deleted",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div>
        <SectionTile
          subHeading={"---My Cart---"}
          heading={"WANNA ADD MORE?"}
        ></SectionTile>
      </div>
      <div className="flex gap-[120px]">
        <h2 className="text-[32px]">Total orders: {cart.length}</h2>
        <h2 className="text-[32px]">Total Price: ${Math.round(totalPrice)}</h2>
        {!cart.length ? (
          <button
            disabled
            className="py-3 px-6 text-white bg-[#684b21] rounded-[8px]"
          >
            Pay
          </button>
        ) : (
          <Link to="/dashboard/payment">
            <button className="py-3 px-6 text-white bg-[#D1A054] rounded-[8px]">
              Pay
            </button>
          </Link>
        )}
      </div>
      <div className="w-3/4">
        <div
          className="overflow-x-auto mt-[38px]"
          style={{ borderRadius: "15px 15px 0px 0px" }}
        >
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] text-white">
              <tr>
                <th></th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, idx) => (
                <tr key={item._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="mask mask-squircle w-16 h-16">
                      <img src={item.image} alt="Food Picture" />
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-warning"
                    >
                      <RiDeleteBinLine></RiDeleteBinLine>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
