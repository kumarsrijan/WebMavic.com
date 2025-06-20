import Breadcrumb from "@/components/common/Breadcrumb";
import Form from "@/components/form/Form";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export const metadata = {
  title: "Contact | WebMavic",
  description: "Get in touch with WebMavic for any queries or support.",
  keywords: "WebMavic, contact us, support, queries, business inquiries",
};

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
                        We have the flexibility to operate from anywhere
                        globally; we welcome opportunities to work worldwide.
                      </p>
                    </div>
                  </div>
               
                  <div className="single-info">
                    <div className="icon">
                      <i className="far fa-envelope" />
                    </div>
                    <div className="info">
                      <Link href="mailto:srijan@webmavic.com" target="_blank">
                        srijan@webmavic.com
                      </Link>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contactpage;
