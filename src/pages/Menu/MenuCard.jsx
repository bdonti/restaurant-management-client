import SectionTile from "../../components/SectionTitle/SectionTile";
import Cover from "../Shared/Cover/Cover";
import MenuCategory from "./MenuCategory";

const MenuCard = ({ menuImg, coverTitle, headingTitle, items }) => {
  return (
    <div>
      <div className="my-4">
        <Cover img={menuImg} title={`"${coverTitle}"`}></Cover>
      </div>
      <div className="my-4">
        <SectionTile
          subHeading={"---Check it out---"}
          heading={`"${headingTitle}"`}
        ></SectionTile>
      </div>
      <div>
        <MenuCategory items={items} coverTitle={coverTitle}></MenuCategory>
      </div>
    </div>
  );
};

export default MenuCard;
