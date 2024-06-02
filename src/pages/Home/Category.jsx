import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTile from "../../components/SectionTitle/SectionTile";

const Category = () => {
  return (
    <div className="my-10">
      <SectionTile
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTile>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-[32px] text-center uppercase -mt-16 text-[#FFFFFF]">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="text-[32px] text-center uppercase -mt-16 text-[#FFFFFF]">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="text-[32px] text-center uppercase -mt-16 text-[#FFFFFF]">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="text-[32px] text-center uppercase -mt-16 text-[#FFFFFF]">
            Pastries
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="text-[32px] text-center uppercase -mt-16 text-[#FFFFFF]">
            Vegetables
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
