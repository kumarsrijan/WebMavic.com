import Link from "next/link";
import React from "react";
import Team from "./Team";

function Home5Team() {
  return (
    <>
      <div className="collaborate-section mb-130">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
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
                    <Link legacyBehavior href="/contact">
                      <a className="primary-btn3">Get a quote</a>
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
                    <Link legacyBehavior href="/faq">
                      <a className="primary-btn3">Read FAQs</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home5-team-section mb-130">
        <div className="container">
          <div
            className="row mb-55 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="col-lg-12 ">
              <div className="section-title-5 text-center">
                <span>Meet Our Team</span>
                <h2>Our Experts</h2>
              </div>
            </div>
          </div>
        <Team/>
        </div>
      </div>
    </>
  );
}

export default Home5Team;
