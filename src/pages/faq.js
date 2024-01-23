import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import React from "react";

function Faqpage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="FAQs"
        title="Frequently Asked Questions?"
        pageName="FAQS"
      />
      <div className="faq-page sec-mar">
        <div className="container">
          <div className="row gy-5 justify-content-lg-between justify-content-center">
            <div className="col-lg-4">
              <div className="faq-items">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      General
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Payment
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Support
                    </button>
                  </li>
                </ul>
              </div>
              <div className="contact-form-wrap">
                <div className="form-tltle">
                  <h5>HAVE QUESTION?</h5>
                </div>
                <div className="contact-form">
                  <form>
                    <div className="row">
                      <div className="col-md-12 mb-20">
                        <div className="form-inner">
                          <label>name</label>
                          <input type="text" />
                        </div>
                      </div>

                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Email</label>
                          <input type="email" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Phone</label>
                          <input type="email" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Message</label>
                          <textarea defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <button className="primary-btn3" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="accordion" id="accordionExample1">
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What kind of companies and businesses do we work with?
                        </button>
                      </h5>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          We work for a wide variety of businesses ranging from
                          small start-ups to medium sized established
                          businesses. The industries and business areas we have
                          worked with include coaching, investing, real estate,
                          local businesses, brick and mortar, personal sites and
                          service based entrepreneurs.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          When the site is over, will I able to update it myself
                          ?
                        </button>
                      </h5>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Yes, indeed. In case of Web Design we like to give our
                          clients the option of updating their websites. We’ll
                          provide you with all of the necessary training and
                          resources to make changes to your website easily
                          without relying on a developer.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          How soon can we get started?
                        </button>
                      </h5>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          It totally depends on your launch deadline and our
                          availability to take on a new project that month. We
                          can discuss that on a call if you are ready to move
                          forward with us. Book a “FREE CALL” with us and find
                          out your perfect spot!
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Phasellus a placerat eros In hac habitasse.
                        </button>
                      </h5>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos himenaeos. Praesent nec neque at
                          dolor venenatis consectetur eu quis ex. placerat felis
                          non aliquam.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          Phasellus a placerat eros In hac habitasse.
                        </button>
                      </h5>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos himenaeos. Praesent nec neque at
                          dolor venenatis consectetur eu quis ex. placerat felis
                          non aliquam.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingSix">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          Phasellus a placerat eros In hac habitasse.
                        </button>
                      </h5>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos himenaeos. Praesent nec neque at
                          dolor venenatis consectetur eu quis ex. placerat felis
                          non aliquam.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="accordion" id="accordionExample2">
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingOne1">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne1"
                          aria-expanded="true"
                          aria-controls="collapseOne1"
                        >
                          What all Payment options do I have ?
                        </button>
                      </h5>
                      <div
                        id="collapseOne1"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos himenaeos. Praesent nec neque at
                          dolor venenatis consectetur eu quis ex. placerat felis
                          non aliquam.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingTwo1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo1"
                          aria-expanded="false"
                          aria-controls="collapseTwo1"
                        >
                          In hac habitasse platea dictumst Cras leo.
                        </button>
                      </h5>
                      <div
                        id="collapseTwo1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos himenaeos. Praesent nec neque at
                          dolor venenatis consectetur eu quis ex. placerat felis
                          non aliquam.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingThree1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree1"
                          aria-expanded="false"
                          aria-controls="collapseThree1"
                        >
                          ornare iaculis tellus. Phasellus venenatis.
                        </button>
                      </h5>
                      <div
                        id="collapseThree1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos himenaeos. Praesent nec neque at
                          dolor venenatis consectetur eu quis ex. placerat felis
                          non aliquam.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFour1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour1"
                          aria-expanded="false"
                          aria-controls="collapseFour1"
                        >
                          Phasellus a placerat eros In hac habitasse.
                        </button>
                      </h5>
                      <div
                        id="collapseFour1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos himenaeos. Praesent nec neque at
                          dolor venenatis consectetur eu quis ex. placerat felis
                          non aliquam.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFive1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive1"
                          aria-expanded="false"
                          aria-controls="collapseFive1"
                        >
                          Phasellus a placerat eros In hac habitasse.
                        </button>
                      </h5>
                      <div
                        id="collapseFive1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos himenaeos. Praesent nec neque at
                          dolor venenatis consectetur eu quis ex. placerat felis
                          non aliquam.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingSix1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix1"
                          aria-expanded="false"
                          aria-controls="collapseSix1"
                        >
                          Phasellus a placerat eros In hac habitasse.
                        </button>
                      </h5>
                      <div
                        id="collapseSix1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos himenaeos. Praesent nec neque at
                          dolor venenatis consectetur eu quis ex. placerat felis
                          non aliquam.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="accordion" id="accordionExample3">
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingOne2">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne2"
                          aria-expanded="true"
                          aria-controls="collapseOne2"
                        >
                          How many revisions do we offer .
                        </button>
                      </h5>
                      <div
                        id="collapseOne2"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos himenaeos. Praesent nec neque at
                          dolor venenatis consectetur eu quis ex. placerat felis
                          non aliquam.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingTwo2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo2"
                          aria-expanded="false"
                          aria-controls="collapseTwo2"
                        ></button>
                      </h5>
                      <div
                        id="collapseTwo2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos himenaeos. Praesent nec neque at
                          dolor venenatis consectetur eu quis ex. placerat felis
                          non aliquam.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingThree2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree2"
                          aria-expanded="false"
                          aria-controls="collapseThree2"
                        >
                          ornare iaculis tellus. Phasellus venenatis.
                        </button>
                      </h5>
                      <div
                        id="collapseThree2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos himenaeos. Praesent nec neque at
                          dolor venenatis consectetur eu quis ex. placerat felis
                          non aliquam.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFour2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour2"
                          aria-expanded="false"
                          aria-controls="collapseFour2"
                        >
                          Phasellus a placerat eros In hac habitasse.
                        </button>
                      </h5>
                      <div
                        id="collapseFour2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos himenaeos. Praesent nec neque at
                          dolor venenatis consectetur eu quis ex. placerat felis
                          non aliquam.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFive2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive2"
                          aria-expanded="false"
                          aria-controls="collapseFive2"
                        >
                          Phasellus a placerat eros In hac habitasse.
                        </button>
                      </h5>
                      <div
                        id="collapseFive2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos himenaeos. Praesent nec neque at
                          dolor venenatis consectetur eu quis ex. placerat felis
                          non aliquam.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h5 className="accordion-header" id="headingSix2">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix2"
                          aria-expanded="false"
                          aria-controls="collapseSix2"
                        >
                          Phasellus a placerat eros In hac habitasse.
                        </button>
                      </h5>
                      <div
                        id="collapseSix2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Aptent taciti sociosqu ad litora torquent per conubia
                          nostra, per inceptos himenaeos. Praesent nec neque at
                          dolor venenatis consectetur eu quis ex. placerat felis
                          non aliquam.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Faqpage;
