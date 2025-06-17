"use client";
import React from "react";
import CountUp from "react-countup";
function Review6() {
  return (
    <div className="review-and-counter-area">
      
      <div className="counter-area">
        <ul>
          <li>
            <div className="single-counter">
              <div className="content">
                <div className="number">
                  <h3 className="counter">
                    <CountUp
                      end={48}
                      duration={3}
                      style={{ fontSize: "40px" }}
                      enableScrollSpy={true}
                    />
                  </h3>
                  <span>Hours</span>
                </div>
                <p style={{ textAlign: "center" }}>
                  We can deliver projects within 48 hours if needed.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="single-counter">
              <div className="content">
                <div className="number">
                  <h3 className="counter">
                    <CountUp
                      start={0}
                      end={100}
                      duration={3}
                      suffix="%"
                      style={{ fontSize: "40px" }}
                      enableScrollSpy={true}
                    />
                  </h3>
                  <span>contented clients</span>
                </div>
                <p style={{ textAlign: "center" }}>
                  Prioritizing client satisfaction.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="single-counter">
              <div className="content">
                <div className="number">
                  <h3 className="counter">
                    <CountUp
                      end={1000}
                      duration={3}
                      style={{ fontSize: "40px" }}
                      enableScrollSpy={true}
                    />
                  </h3>
                  <span>+</span>
                </div>
                <p style={{ textAlign: "center" }}>Work Hours</p>
              </div>
            </div>
          </li>
          <li>
            <div className="single-counter">
              <div className="content">
                <div className="number">
                  <h3 className="counter">
                    <CountUp
                      end={10}
                      duration={3}
                      style={{ fontSize: "40px" }}
                      enableScrollSpy={true}
                    />
                  </h3>
                  <span>+ Members</span>
                </div>
                <p style={{ textAlign: "center" }}>
                  We possess team members who are experts in their respective
                  fields.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Review6;
