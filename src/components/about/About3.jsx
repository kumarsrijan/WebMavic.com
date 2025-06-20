"use client";
import Reveal from "@/animations/Reveal";
import { usePathname } from "next/navigation";
import React from "react";

function About3() {
  const pathname = usePathname()
  
  return (
    <div
      className={`home3-about-section ${
        pathname === "/about" ? "sec-mar" : ""
      }`}
    >
   
      <div className="container-fluid">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-9">
            <Reveal fadeInUp>
            <div
              className="section-title-3"
              
            >
              <h2>Distinguish Approach</h2>
              <p>
                Unlike others in the market, we prioritize understanding your
                business and goals before starting a project. We genuinely care
                about your business and the results we deliver, ensuring that
                the work speaks to your customers in an authentic voice and
                effectively drives sales.
              </p>
            </div>
            </Reveal>
            <div className="about-left">
              <div
                className="about-img magnetic-item"
              >
              <Reveal fadeInUp>
                <img
                  className="img-fluid "
                  src="assets/img/inner-pages/about-4.jpg"
                  alt=""
                />
              </Reveal>
              </div>
              <div
                className="about-content "
              
              >
              <Reveal fadeInUp>
                <h2>Unlock the potential of your business.</h2>
                <p>
                  We believe in delivering tailored solutions that are designed
                  to address your unique requirements. We take the time to
                  understand your business and provide personalized services
                  that align with your goals.
                </p>
                <div className="devider" />
                <ul className="about-feature">
                  <li>
                    <h5>Customized Solutions</h5>
                    
                  </li>
                  <li>
                    <h5>Attention to detail</h5>
                   
                  </li>
                </ul>
              </Reveal>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="about-right">
              <Reveal fadeInUp>
              <div
                className="about-img magnetic-item" 
                
              >
                <img
                  className="img-fluid "
                  src="assets/img/inner-pages/about-1.jpg"
                  alt=""
                />
              </div>
          </Reveal>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About3;
