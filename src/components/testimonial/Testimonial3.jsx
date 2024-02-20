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

function Testimonial3() {
  const slider = useMemo(() => {
    return {
      loop: true,
      spaceBetween: 30,
      speed: 2000,
      centeredSlides: true,
      navigation: {
        nextEl: ".nextbtn2",
        prevEl: ".prevbtn2",
      },
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.5,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 2,
        },
      },
    };
  }, []);
  return (
    <div className="home3-testimonil-area sec-mar">
      <div className="container">
        <div
          className="row mb-55 wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-12 d-flex align-items-center justify-content-between gap-4 flex-wrap">
            <div className="section-title-3">
              <h2>Happy Customers</h2>
              <p>
                Services are professional offerings provided by businesses to
                meet specific needs or solve problems for their customers.
                Services can range from your budject.
              </p>
            </div>
            <div className="swiper-btn-group">
              <div className="swiper-btn prevbtn2">
                <i className="bi bi-arrow-left" />
              </div>
              <div className="swiper-btn nextbtn2">
                <i className="bi bi-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...slider} className="swiper home3-testimonial-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card3">
                    <div className="quate-icon">
                      <img src="assets/img/home-4/left-quote.svg" alt="" />
                    </div>
                    <div className="testimonial-top">
                      {/* <div className="review-left">
                        <img src="assets/img/home-4/trustpilot.svg" alt="" />
                      </div> */}
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
                        and tries to provide services with some uniqueness.”
                      </p>
                    </div>
                    <div className="testimonial-btm">
                      <div className="author-area">
                        <div className="author-content">
                          <h4>Abhinav</h4>
                          {/* <span>CEO At atlantis.com</span> */}
                        </div>
                      </div>
                      {/* <div className="review-date-and-time">
                        <p>May 9, 2023</p>
                        <span>10.30 PM</span>
                      </div> */}
                    </div>
                  </div>
                  <div className="author-img">
                    <img src="assets/img/testis1.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card3">
                    <div className="quate-icon">
                      <img src="assets/img/home-4/left-quote.svg" alt="" />
                    </div>
                    <div className="testimonial-top">
                      {/* <div className="review-left">
                        <img src="assets/img/home-4/google.svg" alt="" />
                      </div> */}
                      <div className="review-right">
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
                        </ul>
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
                      <div className="author-area">
                        <div className="author-content">
                          <h4>Pranav Sharma</h4>
                          {/* <span>CEO At atlantis.com</span> */}
                        </div>
                      </div>
                      {/* <div className="review-date-and-time">
                        <p>May 9, 2023</p>
                        <span>10.30 PM</span>
                      </div> */}
                    </div>
                  </div>
                  <div className="author-img">
                    <img src="assets/img/testis2.jpg" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card3">
                    <div className="quate-icon">
                      <img src="assets/img/home-4/left-quote.svg" alt="" />
                    </div>
                    <div className="testimonial-top">
                      {/* <div className="review-left">
                        <img src="assets/img/home-4/trustpilot.svg" alt="" />
                      </div> */}
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
                        and tries to provide services with some uniqueness.”
                      </p>
                    </div>
                    <div className="testimonial-btm">
                      <div className="author-area">
                        <div className="author-content">
                          <h4>Abhinav</h4>
                          {/* <span>CEO At atlantis.com</span> */}
                        </div>
                      </div>
                      {/* <div className="review-date-and-time">
                        <p>May 9, 2023</p>
                        <span>10.30 PM</span>
                      </div> */}
                    </div>
                  </div>
                  <div className="author-img">
                    <img src="assets/img/testis1.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card3">
                    <div className="quate-icon">
                      <img src="assets/img/home-4/left-quote.svg" alt="" />
                    </div>
                    <div className="testimonial-top">
                      {/* <div className="review-left">
                        <img src="assets/img/home-4/google.svg" alt="" />
                      </div> */}
                      <div className="review-right">
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
                        </ul>
                      </div>
                    </div>
                    <div className="testimonial-content">
                      <p>
                        “I cannot express enough gratitude to [Agency's Name]
                        for their exceptional service and dedication. Despite
                        being approached on short notice, they went above and
                        beyond to accommodate my needs promptly. Their
                        willingness to undertake revisions until I was
                        completely satisfied truly sets them apart. The
                        professionalism and commitment demonstrated by their
                        team are commendable. I highly recommend [Agency's Name]
                        to anyone seeking reliable and outstanding service..”
                      </p>
                    </div>
                    <div className="testimonial-btm">
                      <div className="author-area">
                        <div className="author-content">
                          <h4>Pranav Sharma</h4>
                          {/* <span>CEO At atlantis.com</span> */}
                        </div>
                      </div>
                      {/* <div className="review-date-and-time">
                        <p>May 9, 2023</p>
                        <span>10.30 PM</span>
                      </div> */}
                    </div>
                  </div>
                  <div className="author-img">
                    <img src="assets/img/testis2.jpg" alt="" />
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial3;
