import React, { useMemo } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
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
    };
  }, []);
  return (
    <div className="home5-testimonial-area ">
      <div className="container">
        <div className="row g-lg-4 gy-5 align-items-center">
          <div
            className="col-lg-4 wow animate fadeInUp"
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
                {/* <div className="customar-review">
                  <h6>Review On</h6>
                  <ul>
                    <li>
                      <a href="#" className="single-review">
                        <div className="icon">
                          <img
                            src="assets/img/home-5/trustpilot-1.svg"
                            alt=""
                          />
                        </div>
                        <ul className="star">
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>5.0/5.0</li>
                        </ul>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="single-review">
                        <div className="icon">
                          <img src="assets/img/home-5/google-1.svg" alt="" />
                        </div>
                        <ul className="star">
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>5.0/5.0</li>
                        </ul>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 position-relative wow animate fadeInUp"
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <Swiper {...slider} className="swiper home5-testimonial-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-wrapper">
                    <div className="testimonial-top">
                      <div className="author-img">
                        <img src="assets/img/testis1.png" alt="logo" />
                      </div>
                      <div className="review-right">
                        <img
                          src="assets/img/home-4/trastpilot-star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        “It was really nice to avail the services of Srijan and
                        his team. My expectations were not only met but the team
                        provided extra also. The group is really hard working
                        and tries to provide services with some uniqueness”
                      </p>
                    </div>
                    <div className="testimonial-btm">
                      <div className="author-content">
                        <h4>Abhinav</h4>
                        {/* <span>CEO At atlantis.com</span> */}
                      </div>
                      <div className="quote-icon">
                        <img src="assets/img/home-5/left-quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-wrapper">
                    <div className="testimonial-top">
                      <div className="author-img">
                        <img src="assets/img/testis2.jpg" alt="" />
                      </div>
                      <div className="review-right">
                        <img
                          src="assets/img/home-4/trastpilot-star.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        “I cannot express enough gratitude to WebMavic for their
                        exceptional service and dedication. Despite being
                        approached on short notice, they went above and beyond
                        to accommodate my needs promptly. Their willingness to
                        undertake revisions until I was completely satisfied
                        truly sets them apart. The professionalism and
                        commitment demonstrated by their team are commendable. I
                        highly recommend WebMavic to anyone seeking reliable and
                        outstanding service.”
                      </p>
                    </div>
                    <div className="testimonial-btm">
                      <div className="author-content">
                        <h4>Pranav Sharma</h4>
                        {/* <span>CEO At atlantis.com</span> */}
                      </div>
                      <div className="quote-icon">
                        <img src="assets/img/home-5/left-quote.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
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
    </div>
  );
}

export default Testimonial5;
