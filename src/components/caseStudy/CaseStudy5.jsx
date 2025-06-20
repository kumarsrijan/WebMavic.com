import Reveal from "@/animations/Reveal";
import Link from "next/link";
import React from "react";

function CaseStudy5() {
  return (
    <div className="home5-case-study mb-130">
      <div className="container">
        <Reveal fadeInUp>
        <div className="row mb-55">
          <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-4">
            <div className="section-title-5">
              <span>CASE STUDY</span>
              <h2>Success Stories</h2>
            </div>
           
          </div>
        </div>
        </Reveal>
        <div className="row">
          <div className="col-lg-12">
            <Reveal fadeInUp>
            <div
              className="single-case-study "
              
            >
              <div className="row g-4">
                <div className="col-lg-5 d-flex align-items-center">
                  <div className="case-study-content">
                    <span>Web Development</span>
                    <h3>
                      <Link legacyBehavior href="/case-study-details">
                        Building a Website for a StartUp
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="case-study-img-and-btn">
                    <div className="case-img magnetic-item">
                  <Link href="https://www.vistadrone.me" target="_blank">
                      <img
                        className="img-fluid"
                        src="assets/img/vistadrone.png"
                        alt="vistadrone"
                      />
                  </Link>
                    </div>
                      
                  </div>
                </div>
              </div>
            </div>
            </Reveal>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy5;
