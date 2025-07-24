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
             <div className="testimonial-btm">
                     <div className="author-area">
                       <div className="author-content">
                         
                        <span>View Letter Of Appreciation</span>

                       </div>
                     </div>
                     </div>
  

 
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
                
               {testimolial_Data.map((item,index)=>(
                 <SwiperSlide key={index} className="swiper-slide">
                 <div className="testimonial-card3">
                   <div className="quate-icon">
                     <img src="assets/img/home-4/left-quote.svg" alt="ratings-icon" />
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
                     <p>“{item.review}”</p>
                   </div>
                   <div className="testimonial-btm">
                     <div className="author-area">
                       <div className="author-content">
                         <h4>{item.author}</h4>
                        <span>{item.position}</span>

                       </div>
                     </div>
                     {/* <div className="review-date-and-time">
                       <p>May 9, 2023</p>
                       <span>10.30 PM</span>
                     </div> */}
                   </div>
                 </div>
                 <div className="author-img">
                   <img src={item.authorImg} alt={item.author} />
                 </div>
               </SwiperSlide>
               ))}
              
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial3;
