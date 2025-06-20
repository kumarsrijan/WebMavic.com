import Link from "next/link";
import React from "react";

function Footer5() {
  return (
    <footer className="three">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top-content">
                <div className="footer-logo">
                  <img
                    className="img-fluid"
                    src="assets/img/webmavic-logo.png"
                    alt="logo"
                    // style={{ width: "20vw" }}
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-wrapper">
          <div className=" d-flex">
            <div className="footer-widget">
            
              <div className="footer-contact ">
                <h4>
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.29163 14.6767V18.5417C7.29227 18.6731 7.33422 18.8009 7.41154 18.9071C7.48886 19.0133 7.59764 19.0924 7.72245 19.1334C7.84727 19.1743 7.9818 19.1749 8.10699 19.1351C8.23217 19.0954 8.34167 19.0172 8.41997 18.9117L10.6808 15.8351L7.29163 14.6767ZM19.7375 0.115895C19.6436 0.0490233 19.533 0.00942685 19.418 0.00148505C19.303 -0.00645676 19.188 0.0175656 19.0858 0.0708953L0.3358 9.86256C0.227918 9.91958 0.13903 10.0069 0.0800422 10.1137C0.0210548 10.2205 -0.00546466 10.3422 0.00373833 10.4639C0.0129413 10.5855 0.0574664 10.7019 0.131849 10.7986C0.206232 10.8953 0.307236 10.9683 0.422467 11.0084L5.63497 12.7901L16.7358 3.2984L8.1458 13.6476L16.8816 16.6334C16.9683 16.6625 17.0603 16.6723 17.1512 16.6622C17.2421 16.652 17.3296 16.6221 17.4078 16.5746C17.4859 16.527 17.5526 16.463 17.6034 16.3869C17.6542 16.3108 17.6877 16.2246 17.7016 16.1342L19.9933 0.717562C20.0103 0.603437 19.9953 0.486844 19.9502 0.380665C19.905 0.274486 19.8314 0.182855 19.7375 0.115895Z" />
                  </svg>
                  Get Connected
                </h4>
                
                <Link href="mailto:srijan@webmavic.com">srijan@webmavic.com </Link>
              </div>
             
            </div>
          </div>
         
          <div className=" d-flex justify-content-sm-center">
            <div className="footer-widget">
              <div className="widget-title">
                <h4>Company</h4>
              </div>
              <div className="menu-container">
                <ul>
                  <li>
                    <Link  href="/about">
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link  href="/team">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link  href="faq">
                      
                        Frequently Asked <br />
                        Questions
                      
                    </Link>
                  </li>
                  <li>
                    <Link  href="/contact">
                      Work With Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-sm-start justify-content-md-end ">
            <div className="footer-widget">
              <div className="widget-title">
                <h4>Our Solutions</h4>
              </div>
              <div className="menu-container">
                <ul>
                  <li>
                    <Link  href="/web-design">
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link  href="/web-development">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link  href="/app-development">
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link  href="/graphic-design">
                      Graphic Design
                    </Link>
                  </li>
                  <li>
                    <Link  href="/copywriting">
                      Copy Writting
                    </Link>
                  </li>
                  <li>
                    <Link  href="/seo">
                      S E O
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-btm">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-btn-content">
                <div className="copyright-area">
                  <p>
                    ©Copyright {new Date().getFullYear().toString()} <Link href="/">WebMavic</Link>
                  </p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer5;
