import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineDown } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

import { Pagination, Navigation } from "swiper";
const Slider = () => {
  return (
    <section id="swiper_slider">
      <div className="border_radius">
        <div className="container py-5">
          <div className="row mb-5">
            <div className="col-lg-7">
              <div className="popular">
                <span>Top collections</span>
                <span>
                  last 24 hours <AiOutlineDown style={{ fontSize: "25px" }} />
                </span>
              </div>
            </div>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            // breakpoints={{
            //     640: {
            //       slidesPerView: 2,
            //       spaceBetween: 20,
            //     },
            //     768: {
            //       slidesPerView: 4,
            //       spaceBetween: 40,
            //     },
            //     1024: {
            //       slidesPerView: 4,
            //       spaceBetween: 50,
            //     },
            //     1624: {
            //         slidesPerView: 4,
            //         spaceBetween: 50,
            //       },
            //   }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiperCart">
                <div className="slider_img">
                  <img
                    src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperCart">
                <div className="slider_img">
                  <img
                    src="https://source.unsplash.com/gySMaocSdqs/600x300"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiperCart">
                <div className="slider_img">
                  <img
                    src="https://source.unsplash.com/random/300×300"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;
