import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const Carousel = ({ pictures }) => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      {pictures.map((picture, i) => (
        <SwiperSlide key={i}>
          <img src={picture} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
