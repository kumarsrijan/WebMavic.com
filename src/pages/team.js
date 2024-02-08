import Breadcrumb from "@/components/common/Breadcrumb";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import React from "react";
import Team from "@/components/Team/Team";

function team3() {
  return (
    <Layout>
      <Breadcrumb pageList="Team" title="Meet Our Expertis" pageName="TEAM" />
      {/* <div
        style={{
          width: "100%",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 2%",
          background: "rgb(6, 216, 137)",
          background:
            "linear-gradient(180deg, rgba(6, 216, 137, 1) 0%, rgba(0,255,0,0) 90%)",
        }}
      >
        <p
          style={{
            color: "white",
          }}
        >
          A good team is fundamental to any organization. Here at WebMavic, we
          have created a team that is strong, efficient, and up-to-date with the
          latest technology. Every team member here complements each other and
          is like a part of the puzzle that completes the organization. We aim
          to deliver the best to our customers and nothing less.
        </p>
      </div> */}

      <div
        className="home3-contact-area sec-mar"
        style={{
          margin: 0,
          background: "rgb(6, 216, 137)",
          background:
            "linear-gradient(180deg, rgba(6, 216, 137, 1) 0%, rgba(0,255,0,0) 90%)",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              {/* <div className="contact-wrapper text-center">
                <Marquee className="marquee_text">
                  We take care of your IT, So You Can Focus on Your Business.
                </Marquee>
                <div
                  className="contact-btn magnetic-item  wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <Link legacyBehavior href="/#">
                    <a>
                      Contact With Us.
                      <svg
                        width={32}
                        height={32}
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div> */}
              <p
                style={{
                  color: "white",
                  margin: "10%",
                }}
              >
                A good team is fundamental to any organization. Here at
                WebMavic, we have created a team that is strong, efficient, and
                up-to-date with the latest technology. Every team member here
                complements each other and is like a part of the puzzle that
                completes the organization. We aim to deliver the best to our
                customers and nothing less.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home5-team-section"
        style={{ marginTop: "1.5%", marginBottom: "10%",  }}  >
        <div className="container">
           <Team/>
        </div>
      </div>
    </Layout>
  );
}

export default team3;
