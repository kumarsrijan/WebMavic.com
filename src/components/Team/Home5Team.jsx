import Link from "next/link";
import React from "react";
import Team from "./Team";
import Reveal from "@/animations/Reveal";

function Home5Team() {
  return (
    <>
      <div className="collaborate-section mb-130">
        <div className="container">
          <Reveal fadeInUp>
          <div className="row">
            <div
              className="col-lg-12"
              
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {/* Left */}
              <div className="collaborate-wrapper">
                <div
                  className="section-title-5"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <span>LET’S COLLABORATE</span>
                  <h2>
                    Ready to <br />
                    <span>work with us?</span>
                  </h2>
                  <div className="get-btn">
                    <Link className="primary-btn3" href="/contact">
                      Get a quote
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="collaborate-wrapper">
                <div
                  className="section-title-5"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <span>LET’S CLARIFY</span>
                  <h2>
                    Still havee <br />
                    <span>doubts?</span>
                  </h2>
                  <div className="get-btn">
                    <Link className="primary-btn3" href="/faq">
                      Read FAQs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
      <div className="home5-team-section mb-130">
        <div className="container">
          <Reveal fadeInUp>
          <div className="row mb-55">
            <div className="col-lg-12 ">
              <div className="section-title-5 text-center">
                <span>Meet Our Team</span>
                <h2>Our Experts</h2>
              </div>
            </div>
          </div>
          </Reveal>
        <Team/>
        </div>
      </div>
    </>
  );
}

export default Home5Team;
