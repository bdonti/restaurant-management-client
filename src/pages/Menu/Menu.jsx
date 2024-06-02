import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import coverImg from "../../assets/menu/banner3.jpg";
import desertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTile from "../../components/SectionTitle/SectionTile";
import MenuCategory from "./MenuCategory";
import MenuCard from "./MenuCard";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Menu</title>
      </Helmet>
      <Cover img={coverImg} title="OUR MENU"></Cover>

      {/* popular menu */}
      <div>
        <div className="my-4">
          <SectionTile
            subHeading={"---Don't miss---"}
            heading={"TODAY'S OFFER"}
          ></SectionTile>
        </div>
        <div>
          <MenuCategory items={offered} coverTitle={"Offered"}></MenuCategory>
        </div>
      </div>

      {/* deserts */}
      <div>
        <MenuCard
          menuImg={desertImg}
          coverTitle={"dessert"}
          headingTitle={"Dessert"}
          items={dessert}
        ></MenuCard>
      </div>
      {/* soup */}
      <div>
        <MenuCard
          menuImg={desertImg}
          coverTitle={"soup"}
          headingTitle={"Soup"}
          items={soup}
        ></MenuCard>
      </div>
      {/* pizza */}
      <div>
        <MenuCard
          menuImg={pizzaImg}
          coverTitle={"pizza"}
          headingTitle={"Pizza"}
          items={pizza}
        ></MenuCard>
      </div>
      {/* salad */}
      <div>
        <MenuCard
          menuImg={saladImg}
          coverTitle={"salad"}
          headingTitle={"Salad"}
          items={salad}
        ></MenuCard>
      </div>
    </div>
  );
};

export default Menu;
