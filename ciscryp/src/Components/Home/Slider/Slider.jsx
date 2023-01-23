import React from "react";
import "./Slider.css";
import "swiper/css/bundle";
import { AiOutlineDown } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

const Slider = () => {
  return (
    <section id="swiper-collect">
      <div className="bg_color">
        <div className="container">
          <span>Top collections</span>
          <span>
            last 24 hours <AiOutlineDown style={{ fontSize: "25px" }} />
          </span>
          <p>Discover the new creative economy</p>
        </div>
        <div className="container">
          <div className="row">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                400: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                500: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                600: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="img">
                  <img
                    id="img-bright"
                    src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  />
                  <div className="img-inner-title">
                    <div className="info-person">
                      <img
                        src="https://chisnghiax.com/ciscryp/static/media/Image-6.f9fbe7060b79c99c7a60.png"
                        alt=""
                      />
                      <span>by Jane Cooper</span>
                      <TiTickOutline style={{ color: "blue" }} />
                    </div>
                    <span>Awesome collection</span>
                  </div>
                  <div className="img-inner">
                    <img
                      src="https://images.unsplash.com/photo-1599054802207-91d346adc120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1557264305-7e2764da873b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img">
                  <img
                    id="img-bright"
                    src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  />
                  <div className="img-inner-title">
                    <div className="info-person">
                      <img
                        src="https://chisnghiax.com/ciscryp/static/media/Image-6.f9fbe7060b79c99c7a60.png"
                        alt=""
                      />
                      <span>by Jane Cooper</span>
                      <TiTickOutline style={{ color: "blue" }} />
                    </div>
                    <span>Awesome collection</span>
                  </div>
                  <div className="img-inner">
                    <img
                      src="https://images.unsplash.com/photo-1599054802207-91d346adc120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1557264305-7e2764da873b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img">
                  <img
                    id="img-bright"
                    src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  />
                  <div className="img-inner-title">
                    <div className="info-person">
                      <img
                        src="https://chisnghiax.com/ciscryp/static/media/Image-6.f9fbe7060b79c99c7a60.png"
                        alt=""
                      />
                      <span>by Jane Cooper</span>
                      <TiTickOutline style={{ color: "blue" }} />
                    </div>
                    <span>Awesome collection</span>
                  </div>
                  <div className="img-inner">
                    <img
                      src="https://images.unsplash.com/photo-1599054802207-91d346adc120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1557264305-7e2764da873b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="img">
                  <img
                    id="img-bright"
                    src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt=""
                  />
                  <div className="img-inner-title">
                    <div className="info-person">
                      <img
                        src="https://chisnghiax.com/ciscryp/static/media/Image-6.f9fbe7060b79c99c7a60.png"
                        alt=""
                      />
                      <span>by Jane Cooper</span>
                      <TiTickOutline style={{ color: "blue" }} />
                    </div>
                    <span>Awesome collection</span>
                  </div>
                  <div className="img-inner">
                    <img
                      src="https://images.unsplash.com/photo-1599054802207-91d346adc120?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1581985673473-0784a7a44e39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                    <img
                      src="https://images.unsplash.com/photo-1557264305-7e2764da873b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
