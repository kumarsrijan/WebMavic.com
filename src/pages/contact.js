import Breadcrumb from "@/components/common/Breadcrumb";
import Form from "@/components/form/Form";
import Layout from "@/components/layout/Layout";


function Contactpage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Contact"
        title="For Any Querry"
        pageName="CONTACT"
      />
      <div className="contact-page-wrap sec-mar">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-6">
              <div className="contact-content">
                <span>CONTACT WITH US</span>
                <h2>LET’S WORK TOGETHER?</h2>
                <p>
                  We are 100% committed to taking your startup from zero to step
                  hundred.
                  {/* I have worls-class, flexible support via live chat, email and
                  hone. I guarantee that you’ll be able to have any issue
                  resolved within 24 hours. */}
                </p>
                <div className="informations">
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="info">
                      <p>
                        168/170, Avenue 01, Old York <br /> Drive Rich Mirpur
                        DOHS, Bangladesh
                      </p>
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="info">
                      <a href="tel:07979772017">+91 7979-77-2017</a>
                      {/* <a href="tel:06571111576">+880 657 1111 576</a> */}
                    </div>
                  </div>
                  <div className="single-info">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="info">
                      <a href="mailto: info@example.com">hello@webmavic.com</a>
                      <a href="mailto: info@support.com">info@support.com</a>
                    </div>
                  </div>
                </div>
                {/* <div className="follow-area">
                  <h5 className="blog-widget-title">Follow Us</h5>
                  <p className="para">Follow us on Social Network</p>
                  <div className="blog-widget-body">
                    <ul className="follow-list d-flex flex-row align-items-start gap-4">
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bx bxl-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/">
                          <i className="bx bxl-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bx bxl-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pinterest.com/">
                          <i className="bx bxl-pinterest" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
            <Form/>
          </div>
        </div>
      </div >
    </Layout >
  );
}

export default Contactpage;
