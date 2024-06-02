import SectionTile from "../../components/SectionTitle/SectionTile";
import MenuItem from "../Shared/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <div className="mt-[92px]">
      <SectionTile
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectionTile>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 my-14">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
