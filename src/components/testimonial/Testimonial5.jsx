import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimolial_Data } from "./tsData";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

function Testimonial5() {
  const slider = useMemo(() => {
    return {
      loop: true,
      spaceBetween: 0,
      speed: 2000,
      centeredSlides: true,
      // direction: "vertical",
      navigation: {
        nextEl: ".nextbtn3",
        prevEl: ".prevbtn3",
      },
      autoplay: {
        delay: 5000,
      },
      spaceBetween: 20,
    };
  }, []);
  return (
    <div className="home5-testimonial-area">
      <div className="container">
        <div
          className="testi-left wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="section-title-5">
            <span>CLIENT REVIEW</span>
            <h2>Happy Client</h2>
            <div className="testimolial-left">
              <p>
                This is what our clients say about us.
                <br />
                Don't trust our words, trust them
              </p>
            </div>
          </div>
        </div>
        <div
          className="testimolial-right wow animate fadeInUp"
          data-wow-delay="300ms"
          data-wow-duration="1500ms"
        >
          <Swiper {...slider} className="swiper ">
            <div className="swiper-wrapper">
              {testimolial_Data.map((item, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                <div className="testimonial-container">
                  <div className="testimonial-top">
                    <div className="author-img">
                      <img src={item.authorImg} alt="logo" />
                    </div>
                    <div className="review-right">
                      <img src="assets/img/home-4/trastpilot-star.svg" alt="" />
                    </div>
                  </div>
                  <div className="testimonial-content">
                    <p>“{item.review}”</p>
                  </div>
                  <div className="testimonial-btm">
                    <div className="author-content">
                      {" "}
                      <h4>{item.author}</h4>
                      {index === 0 && <span>Founder at Vistadrone, Abu Dhabi</span>}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              ))}
            
            </div>
          </Swiper>
          <div className="swiper-btn-group">
            <div className="swiper-btn prevbtn3">
              <i className="bi bi-arrow-up" />
            </div>
            <div className="swiper-btn nextbtn3">
              <i className="bi bi-arrow-down" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial5;
