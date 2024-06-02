import SectionTile from "../../components/SectionTitle/SectionTile";
import featureImg from "../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item py-4 px-4 mb-8">
      <SectionTile
        subHeading={"---Check it out---"}
        heading={
          <div className="text-white">
            <div>
              <p className="divider divider-success w-1/2 mx-auto mt-4"></p>
              <h3 className="text-[40px]">FROM OUR MENU</h3>
              <p className="divider divider-success w-1/2 mx-auto"></p>
            </div>

            <div className="md:flex md:justify-center md:items-center gap-6 my-8 bg-opacity-40">
              <div>
                <img src={featureImg} alt="" />
              </div>
              <div>
                <p className="text-[24px] text-start">March 20, 2023</p>
                <p className="text-[24px] text-start">WHERE CAN I GET SOME?</p>
                <p className="text-[20px] text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  voluptate facere, deserunt dolores maiores quod nobis quas
                  quasi. Eaque repellat recusandae ad laudantium tempore
                  consequatur consequuntur omnis ullam maxime tenetur.
                </p>
                <div className="flex items-start mt-4">
                  <button className="btn btn-outline border-0 border-b-4 text-white">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Featured;
