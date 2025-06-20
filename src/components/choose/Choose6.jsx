"use client";
import Reveal from "@/animations/Reveal";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";

function Choose6() {
  return (
    <div className="home6-choose-section sec-mar">
      <div className="container">
        <div className="row">
          <div className="choose-top">
            <div className="row">
              <div className="col-lg-6 " >
                <div className="choose-title">
                  <span>Why Choose Us</span>
                  <h2>Unlock the potential of your business.</h2>
                </div>
              </div>
              <div className="col-lg-6">
                  <Reveal fadeInUp>
                <div className="choose-right-img magnetic-item">
                    <img
                      className="img-fluid"
                      src="assets/img/inner-pages/about-3.jpg"
                      alt=""
                    />
                </div>
                  </Reveal>
              </div>
            </div>
          </div>
          <div className="choose-btm">
            <div className="row  g-lg-4 gy-5">
              <div className="col-lg-7">
                <div className="choose-left-content">
                  <div className="vectors">
                    <img
                      className="choose-vec-top-r"
                      src="assets/img/home-6/choose-vec-top-r.svg"
                      alt=""
                    />
                    <img
                      className="choose-vec-btm-l"
                      src="assets/img/home-6/choose-vec-btm-l.svg"
                      alt=""
                    />
                  </div>
                  <div className="icon">
                    <img
                      src="assets/img/webmavic-logo.png"
                      alt=""
                      style={{
                        width: "400px", // Adjust the width as needed
                        height: "auto", // Automatically adjusts height to maintain aspect ratio
                        maxWidth: "100%", // Ensures the image does not exceed its container
                        display: "block", // Prevents any unwanted whitespace around the image
                      }}
                    />
                  </div>
                  <h4>
                    How it all started <br />
                    <span>Our Story.</span>
                  </h4>
                  <p>
                    A team of engineers noticed a problem: other developers were
                    using outdated tech without caring about SEO or
                    user-friendly design. To fix this, they joined forces and
                    started their own agency to bring fresh and modern solutions
                    to the tech world.
                  </p>
                  <div className="sl">
                    <h2>#1</h2>
                  </div>
                  <div className="about-btn">
                    <Link  href="/about">
                      
                        <svg
                          width={7}
                          height={7}
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 1H12M12 1V13M12 1L0.5 12" />
                        </svg>
                        Let's Get
                        <br />
                        Started
                      
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="choose-feature">
                  <ul>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">
                              <CountUp
                                end={30}
                                duration={3}
                                delay={3}
                                enableScrollSpy={true}
                              />
                            </span>
                            %
                          </h3>
                        </div>
                        <div className="content">
                          <h4>Strategy</h4>
                          <p>
                            A well-defined strategy in any project provides a
                            clear roadmap, ensuring efficient resource
                            utilization, risk mitigation, and measurable
                            progress, ultimately enhancing decision-making and
                            stakeholder alignment.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">
                              <CountUp
                                end={40}
                                duration={3}
                                delay={3}
                                enableScrollSpy={true}
                              />
                            </span>
                            %
                          </h3>
                        </div>
                        <div className="content">
                          <h4>Design/Development</h4>
                          <p>
                            Design and development form the core of every
                            project, and that's why we prioritize them with
                            utmost attention and focus.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="single-feature">
                        <div className="progress">
                          <h3>
                            <span className="counter">
                              <CountUp
                                end={30}
                                duration={3}
                                delay={3}
                                enableScrollSpy={true}
                              />
                            </span>
                            %
                          </h3>
                        </div>
                        <div className="content">
                          <h4>UI/UX</h4>
                          <p>
                            UI/UX breathes life into the project, setting it
                            apart and enhancing its market presence.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose6;
