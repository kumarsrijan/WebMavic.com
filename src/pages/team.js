import Breadcrumb from "@/components/common/Breadcrumb";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

import React from "react";

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

      <div
        className="home5-team-section sec-mar"
        style={{
          marginTop: "-1.5%",
          marginLeft: "10%",
          marginRight: "10%",
          marginBottom: "10%",
        }}
      >
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/*  */}
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="single-team magnetic-item">
                {/* <div className="social-area">
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src="assets/img/home-5/home5-team-01.png"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h4>Cassian Coleson</h4>
                  <span>Founder, CTO</span>
                </div>
              </div>
            </div>
            {/*  */}
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="single-team magnetic-item">
                {/* <div className="social-area">
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src="assets/img/home-5/rakshit.jpg"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h4>Rakshit Raj</h4>
                  <span>Developer</span>
                </div>
              </div>
            </div>
            {/*  */}
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="single-team magnetic-item">
                {/* <div className="social-area">
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src="assets/img/home-5/akib.jpg"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h4>Aquib Alam</h4>
                  <span>Developer</span>
                </div>
              </div>
            </div>
            {/*  */}
            <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInUp"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <div className="single-team magnetic-item">
                {/* <div className="social-area">
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src="assets/img/home-5/ashish.jpg"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h4>Ashish Anand</h4>
                  <span>Designer</span>
                </div>
              </div>
            </div>
            {/*  */}
            {/* <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="single-team magnetic-item">
                <div className="social-area">
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src="assets/img/home-5/home5-team-05.png"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h4>Mateo Jhon</h4>
                  <span>Software Engineer</span>
                </div>
              </div>
            </div> */}
            {/*  */}
            {/* <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
            >
              <div className="single-team magnetic-item">
                <div className="social-area">
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src="assets/img/home-5/home5-team-06.png"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h4>Ralph Oscar</h4>
                  <span>Software Engineer</span>
                </div>
              </div>
            </div> */}
            {/*  */}
            {/* <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="single-team magnetic-item">
                <div className="social-area">
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src="assets/img/home-5/home5-team-07.png"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h4>Myles Hunter</h4>
                  <span>Software Engineer</span>
                </div>
              </div>
            </div> */}
            {/*  */}
            {/* <div
              className="col-xl-3 col-lg-4 col-sm-6 wow animate fadeInUp"
              data-wow-delay="500ms"
              data-wow-duration="1500ms"
            >
              <div className="single-team magnetic-item">
                <div className="social-area">
                  <ul>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.pinterest.com/">
                        <i className="bx bxl-pinterest-alt" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src="assets/img/home-5/home5-team-08.png"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h4>Aaron Jackson</h4>
                  <span>Software Engineer</span>
                </div>
              </div>
            </div> */}
            {/*  */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default team3;
