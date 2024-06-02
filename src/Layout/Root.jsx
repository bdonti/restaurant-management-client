import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

const Root = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");

  return (
    <div>
      <div className="w-full mx-auto">
        {noHeaderFooter || <Navbar></Navbar>}
      </div>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
      <div className="w-full mx-auto">
        {noHeaderFooter || <Footer></Footer>}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Root;
