"use client";
import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { send } from "@emailjs/browser";
function Faqpage() {
  const [data, setData] = useState({
    name: null,
    email: null,
    phone: null,
    message: null,
  });
  const [disable, setDisable] = useState(false);
  const router = useRouter();

  const faqHandler = async (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.phone)
      return setDisable(false), alert("Name or Email or Phone Missing");
    setDisable(true);

    send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID2,
        data,
        {
          publicKey : process.env.NEXT_PUBLIC_PUBLIC_KEY
        }
      )
      .then(
        (result) => {
          alert("Message sent successfully");
          if (result.status === 200) router.refresh();
          setDisable(false);
        },
        (error) => {
          alert("Something went wrong, please try again later");
          console.log(error);
          setDisable(false);
        },
      );
  };

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
                      Timeframe
                    </button>
                  </li>
                </ul>
              </div>
              <div className="contact-form-wrap">
                <div className="form-tltle">
                  <h5>HAVE QUESTION?</h5>
                </div>
                <div className="contact-form">
                  {/* <Form /> */}
                  <form onSubmit={faqHandler}>
                    <div className="row">
                      <div className="col-md-12 mb-20">
                        <div className="form-inner">
                          <label>name</label>
                          <input
                            value={data.name}
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            type="text" />
                        </div>
                      </div>

                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Email</label>
                          <input
                            value={data.email}
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            type="email" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Phone</label>
                          <input
                            value={data.phone}
                            onChange={(e) => setData({ ...data, phone: e.target.value })}
                            type="number" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Message</label>
                          <textarea
                            value={data.message}
                            onChange={(e) => setData({ ...data, message: e.target.value })} />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <button
                            disabled={disable}
                            className="primary-btn3"
                            type="submit"
                          >
                            {disable ? "Loading..." : "Submit"}
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
                          We collaborate with visionary businesses and
                          entrepreneurs seeking to transition their operations
                          into the digital realm. Our clientele spans diverse
                          enterprises, from small startups to established
                          medium-sized businesses. We have experience across
                          various sectors.
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
                          Who owns the product?
                        </button>
                      </h5>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Upon handing over your finaly product to you, we
                          transfer full ownership, granting you complete rights
                          to the intellectual property. You have absolute
                          ownership of everything.
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
                          Can you provide examples of your previous work?
                        </button>
                      </h5>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Certainly! To view examples of our previous work
                          tailored to the specific service you are interested
                          in, kindly complete the contact form. Our team will
                          promptly get in touch with you to share relevant
                          samples and discuss your requirements in detail.
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
                          How many revisions are included in your design and
                          development process?
                        </button>
                      </h5>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          The number of revisions for each service is detailed
                          on their respective pages. You can find specific
                          information about the revision policy applicable to
                          the design and development services you are interested
                          in by visiting the relevant pages on our website.
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
                          Is there an additional cost for extra revisions beyond
                          the mentioned number?
                        </button>
                      </h5>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Yes, there is an additional cost for extra revisions
                          beyond the included number. However, we strive to
                          ensure that our clients are satisfied with the initial
                          revisions provided, and many find that the included
                          number is sufficient. Our goal is to collaborate
                          closely with you to meet your expectations without the
                          need for excessive revisions.
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
                         We provide multiple payment alternatives, including Wise and bank transfer.
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
                          What are your payment terms?
                        </button>
                      </h5>
                      <div
                        id="collapseTwo1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Our payment terms are 30% before starting the work, 40% upon mid-project milestone, and the remaining 30% upon project completion.


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
                          What is your cancellation policy?
                        </button>
                      </h5>
                      <div
                        id="collapseThree1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Our cancellation policy stipulates that the advance
                          payment is eligible for a refund only if the
                          development process has not commenced. Once the
                          development work has started, the advance becomes
                          non-refundable.
                        </div>
                      </div>
                    </div>
                    {/* <div className="accordion-item">
                      <h5 className="accordion-header" id="headingFour1">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour1"
                          aria-expanded="false"
                          aria-controls="collapseFour1"
                        >
                          Do you provide a GST invoice?
                        </button>
                      </h5>
                      <div
                        id="collapseFour1"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour1"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Certainly! If you're inquiring whether we provide a
                          GST (Goods and Services Tax) bill, the answer is yes.
                          We ensure that all transactions are accompanied by a
                          proper GST invoice for your records and compliance.
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="accordion-item">
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
                    </div> */}
                    {/* <div className="accordion-item">
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
                    </div> */}
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
                          Can you provide a detailed timeline with milestones
                          for my specific project?
                        </button>
                      </h5>
                      <div
                        id="collapseOne2"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Yes, we can provide a detailed timeline with
                          milestones for your specific project. Please refer to
                          the respective service page on our website, where you
                          will find a brief timeframe outlined for each service.
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
                        >
                          How does the complexity of the project affect the
                          timeline?
                        </button>
                      </h5>
                      <div
                        id="collapseTwo2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          The complexity of a project can impact the timeline
                          based on various factors such as the intricacy of
                          design elements, the scope of development, and
                          specific customization requirements. More intricate
                          projects may require additional time for planning,
                          development, and testing.
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
                          What is your process for working with clients?
                        </button>
                      </h5>
                      <div
                        id="collapseThree2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Our client collaboration process involves the
                          following key steps:
                          <br />
                          1. Initial Consultation
                          <br />
                          2. Project Assessment
                          <br />
                          3. Proposal and Agreement
                          <br />
                          4.Design/Development Phase
                          <br />
                          5.Revisions and Refinement
                          <br />
                          6.Finalization and Delivery
                          <br />
                          7.Post-Launch Support
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
                          Are there any dependencies on external factors that
                          could influence the timeline?
                        </button>
                      </h5>
                      <div
                        id="collapseFour2"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour2"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Yes, the timeline may be influenced by certain
                          external factors. External dependencies such as
                          third-party integrations, approvals from external
                          entities, or the dalay in information required from
                          you can impact the overall project schedule.
                        </div>
                      </div>
                    </div>
                    {/* <div className="accordion-item">
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
                    </div> */}
                    {/* <div className="accordion-item">
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
                    </div> */}
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
