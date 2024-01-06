import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CardComponent from "../components/CardComponent";
import MoonImage from "../images/moon.png";
import BeachImage from "../images/beach.png";
import ForestImage from "../images/forest.png";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Should be updated to be used for newly added songs
const SwiperComponent: React.FC = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      spaceBetween={50}
      observer={true}
      observeParents={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_wrapper"
    >
      <SwiperSlide style={{ width: "200px" }}>
        <CardComponent
          id="1"
          title="Sleep Music"
          subTitle="Music to sleep to"
          imageSrc={MoonImage}
        />
      </SwiperSlide>
      <SwiperSlide style={{ width: "200px" }}>
        <CardComponent
          id="2"
          title="Beach Music"
          subTitle="Relaxing at the beach"
          imageSrc={BeachImage}
        />
      </SwiperSlide>
      <SwiperSlide style={{ width: "200px" }}>
        <CardComponent
          id="3"
          title="Forest Music"
          subTitle="Forest inspiration"
          imageSrc={ForestImage}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
