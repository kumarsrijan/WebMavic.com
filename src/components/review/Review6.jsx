import React from "react";
import CountUp from "react-countup";
function Review6() {
  return (
    <div className="review-and-counter-area">
      {/* <div className="customar-review">
        <h6>Review On</h6>
        <ul>
          <li className="single-review">
            <a href="#">
              <div className="icon">
                <img src="assets/img/home-5/trustpilot-1.svg" alt="" />
              </div>
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
                <li>5.0/5.0</li>
              </ul>
            </a>
          </li>
          <li className="single-review">
            <a href="#">
              <div className="icon">
                <img src="assets/img/home-5/google-1.svg" alt="" />
              </div>
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
                <li>5.0/5.0</li>
              </ul>
            </a>
          </li>
        </ul>
      </div> */}
      <div className="counter-area">
        <ul>
          <li>
            <div className="single-counter">
              <div className="content">
                <div className="number">
                  <h3 className="counter">
                    <CountUp
                      end={48}
                      duration={5}
                      style={{ fontSize: "40px" }}
                    />
                  </h3>
                  <span>Hours</span>
                </div>
                <p style={{ textAlign: "center" }}>
                  If required even deliver projects with 48.
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
                      duration={5}
                      suffix=" %"
                      style={{ fontSize: "40px" }}
                    />
                  </h3>
                  <span>Customer Satisfaction</span>
                </div>
                <p style={{ textAlign: "center" }}>
                  Our primary objective is to ensure the satisfaction of our
                  clients.
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
                      end={800}
                      duration={5}
                      style={{ fontSize: "40px" }}
                    />
                  </h3>
                  <span>Project</span>
                </div>
                <p>We Have Completed</p>
              </div>
            </div>
          </li>
          <li>
            <div className="single-counter">
              <div className="content">
                <div className="number">
                  <h3 className="counter">
                    <CountUp
                      end={15}
                      duration={5}
                      style={{ fontSize: "40px" }}
                    />
                  </h3>
                  <span>Awards</span>
                </div>
                <p>Achievement For Service</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Review6;
