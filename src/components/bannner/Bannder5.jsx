import React, { memo} from "react";
import { ReactTyped } from "react-typed";
import Link from "next/link";
import Marquee from "react-fast-marquee";

function Bannder5() {
 
  return (
    <div className="banner-area-wrapper">
      <div className="company-name">
        <h2>Webmavic</h2>
      </div>
      <div className="banner-area">
   
        <div className="banner-title">
          <h1>
            HAVING A ROUGH TIME BUILDING YOUR{" "}
            <ReactTyped
              style={{ color: "var(--theme-color)" }}
              strings={[
                "Credibility in the market",
                "Website for the business",
                "Graphics for banding",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            ></ReactTyped>
          </h1>
        </div>
        <div className="banner-content">
          <div className="row">
            <div className="col-lg-5">
              <p>
                Take a deeep breath. You've got everything. From Launching a
                website to SEO and everything in between all here.
              </p>
              <div className="view-btn">
                <Link  className="primary-btn7"  href="/contact" >
                    <span className="circle2">
                      <svg
                        width={13}
                        height={13}
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </span>
                    <span className="text">Book a call</span>
                </Link>
              </div>
              <div className="scroll-and-social-area">
                <div className="scroll-down-area">
                  <Link href="#home5-about-area">
                    <span />
                    Scroll Down to explore
                  </Link>
                </div>
                <div className="swiper-pagination1 two " />
              </div>
            </div>
         
          </div>
        </div>
        <div className="banner-text-slider">
          <Marquee>
            {" "}
            <h2 className="marquee_text">
              <img src="assets/img/home-5/star.svg" alt="" />
              We deliver Results
              <img src="assets/img/home-5/star.svg" alt="" />
              Creative &amp; Clean Design
              <img src="assets/img/home-5/star.svg" alt="" />
              We Help To Achieve <img src="assets/img/home-5/star.svg" alt="" />
              Latest Tech Assurance
              <img src="assets/img/home-5/star.svg" alt="" />
              Creative &amp; Clean Design
              <img src="assets/img/home-5/star.svg" alt="" />
              We Help To Achieve
              <img src="assets/img/home-5/star.svg" alt="" />
              We are Design Agency
              <img src="assets/img/home-5/star.svg" alt="" />
              Creative &amp; Clean Design
              <img src="assets/img/home-5/star.svg" alt="" />
              We Help To Achieve <img src="assets/img/home-5/star.svg" alt="" />
              Latest Tech Assurance
              <img src="assets/img/home-5/star.svg" alt="" />
              Creative &amp; Clean Design
              <img src="assets/img/home-5/star.svg" alt="" />
              We Help To Achieve
            </h2>
          </Marquee>
        </div>
       
      </div>
    </div>
  );
}

export default memo(Bannder5);
