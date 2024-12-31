import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slide1 from "../../public/assets/slide1.jpg";
import slide2 from "../../public/assets/slide2.jpg";
import slide3 from "../../public/assets/slide3.jpg";
import slide4 from "../../public/assets/slide4.jpg";
import slide5 from "../../public/assets/slide5.jpg";
import ReUse from "../components/ReuseAble/ReUse";
const Category = () => {
  const title = "Order online";
  const subtitle = "--From 11.00am to 10.00pm--";
  return (
    <>
      <ReUse title={title} subtitle={subtitle} />
      <div className="my-14">
        <Swiper
          slidesPerView={5}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper pb-8"
        >
          <SwiperSlide>
            <img src={slide1} />
            <h1 className="text-white -mt-16 text-center text-2xl">SALAD</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} />
            <h1 className="text-white -mt-16 text-center text-2xl">PIZZA</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} />
            <h1 className="text-white -mt-16 text-center text-2xl">SOUP</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} />
            <h1 className="text-white -mt-16 text-center text-2xl">DESSERT</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} />
            <h1 className="text-white -mt-16 text-center text-2xl">SALAD</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} />
            <h1 className="text-white -mt-16 text-center text-2xl">SALAD</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} />
            <h1 className="text-white -mt-16 text-center text-2xl">SALAD</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} />
            <h1 className="text-white -mt-16 text-center text-2xl">SALAD</h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide1} />
            <h1 className="text-white -mt-16 text-center text-2xl">SALAD</h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Category;
