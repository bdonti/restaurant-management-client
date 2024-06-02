import { Link } from "react-router-dom";
import MenuItem from "../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverTitle }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 my-14">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <Link to={`/order/${coverTitle}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            ORDER YOUR FAVORITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
