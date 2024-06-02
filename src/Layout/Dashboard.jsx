import { Toaster } from "react-hot-toast";
import {
  FaBook,
  FaDollarSign,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import {
  MdMenu,
  MdOutlineEmail,
  MdOutlineRateReview,
  MdOutlineRestaurantMenu,
  MdRestaurantMenu,
} from "react-icons/md";
import { RiReservedLine } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex gap-8">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu p-4 space-y-4 font-medium">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome className="mr-2"></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <MdRestaurantMenu className="mr-2"></MdRestaurantMenu>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <MdMenu className="mr-2"></MdMenu>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook className="mr-2"></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUser className="mr-2"></FaUser>
                  Manage Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome className="mr-2"></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <RiReservedLine className="mr-2"></RiReservedLine>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaDollarSign className="mr-2"></FaDollarSign>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart className="mr-2"></FaShoppingCart>
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdOutlineRateReview className="mr-2"></MdOutlineRateReview>
                  My Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook className="mr-2"></FaBook>
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          <div className="divider divider-neutral"></div>
          <li>
            <NavLink to="/">
              <FaHome className="mr-2"></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <MdOutlineRestaurantMenu className="mr-2"></MdOutlineRestaurantMenu>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/shop">
              <FaShoppingBag className="mr-2"></FaShoppingBag>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <MdOutlineEmail className="mr-2"></MdOutlineEmail>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Dashboard;
