
import Reveal from "@/animations/Reveal";
import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Graphic Design | WebMavic",
  description: "Explore our graphic design services that enhance your brand's visual identity.",
  keywords: "WebMavic, graphic design, branding, logo design, print design, social media graphics, packaging design",
};

function ServiceDetailsPage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Servives Details"
        title="Graphic design"
      />
      <div className="service-details ">
        <div className="about-services sec-mar">
          <div className="container">
            <div className="row gy-5">
              <div
                className="col-lg-6 d-flex align-items-center "
               
              >
                <Reveal direction="left">
                <div className="about-content">
                  <div className="section-title-5">
                    <h2>Graphic Design</h2>
                  </div>
                  <p style={{ textAlign: "justify" }}>
                    Our graphic design service specializes in crafting visually
                    captivating designs that elevate brands and captivate
                    audiences across various mediums. We understand that
                    neglecting crucial design elements can hinder brand growth,
                    but with our expertise, your visual identity not only exudes
                    sophistication but also evolves seamlessly with your brand's
                    journey. We prioritize user-centric design principles and
                    future-proof strategies, ensuring your brand stands out in a
                    competitive landscape while remaining adaptable to future
                    trends. Count on us to deliver modern, innovative designs
                    that not only meet your current needs but also set the stage
                    for long-term success. From compelling logos and brand
                    collateral to engaging social media graphics and immersive
                    web designs, we provide comprehensive solutions that enhance
                    your brand's identity and ensure sustained relevance in the
                    ever-changing digital landscape.
                  </p>
                  <ul className="about-featue">
                    <li>
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      </svg>
                      Logo Design
                    </li>
                    <li>
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      </svg>
                      Print Design
                    </li>
                    <li>
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      </svg>
                      Social Media Graphics
                    </li>
                    <li>
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      </svg>
                      Packaging Design
                    </li>
                    <li>
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      </svg>
                      YouTube Thumbnail
                    </li>
                    <li>
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                      </svg>
                      Photo Editing and Retouching
                    </li>
                  </ul>
                </div>
                </Reveal>
              </div>

              <div
                className="col-lg-6"
                
                
              >
                <div className="service-img magnetic-item">
                <Reveal direction="right">
                  <img
                    className="img-fluid"
                    src="assets/img/inner-pages/graphic-design-1.jpg"
                    alt=""
                  />
                </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-sort-driscription-area sec-mar">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 "
                
              >
                <div className="driscription-img magnetic-item">
                <Reveal fadeInUp>
                  <img
                    className="img-fluid"
                    src="assets/img/inner-pages/graphic-design-22.jpg"
                    alt=""
                  />
                </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="how-we-work-section sec-mar">
          <div className="container">
            <div
              className="row mb-60"
              
            >
              <Reveal fadeInUp>
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>How we work</h2>
                </div>
              </div>
              </Reveal>
            </div>
          </div>
          <Reveal fadeInUp>
          <div className="work-item">
            <div className="container-fluid">
              <div className="row gy-5 justify-content-center">
                <div
                  className="col magnetic-item "
                  
                  
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="assets/img/inner-pages/work-icon-01.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>Developing Strategy .</h3>
                      {/* <p>
                        Interdum et malesuada fames acchiv Etiam europeat
                        nibhona elementum, accumsan ona.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col magnetic-item "
                  
                  
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="assets/img/inner-pages/work-icon-02.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>Initial Design .</h3>
                      {/* <p>
                        Interdum et malesuada fames acchiv Etiam europeat
                        nibhona elementum, accumsan ona.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col magnetic-item "
              
                  
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="assets/img/inner-pages/work-icon-03.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>Concepts Presentation .</h3>
                      {/* <p>
                        Interdum et malesuada fames acchiv Etiam europeat
                        nibhona elementum, accumsan ona.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col magnetic-item "
                 
                  
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="assets/img/inner-pages/work-icon-04.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>Feedback & Revisions.</h3>
                      {/* <p>
                        Interdum et malesuada fames acchiv Etiam europeat
                        nibhona elementum, accumsan ona.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col magnetic-item "
                  
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="assets/img/inner-pages/work-icon-05.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>Delivery.</h3>
                      {/* <p>
                        Interdum et malesuada fames acchiv Etiam europeat
                        nibhona elementum, accumsan ona.
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
       
        <div className="service-faq-area sec-mar">
          <div className="container">
            <div className="row gy-5">
              <div
                className="col-lg-6 "
                
              >
                <Reveal direction="left">
                <div className="faq-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/img/inner-pages/graphic-design-3.jpg"
                    alt=""
                  />
                </div>
                </Reveal>
              </div>
              <div
                className="col-lg-6 d-flex align-items-center "
              >
                <Reveal direction="right">
                <div className="faq-content-area">
                  <h2>We Are Working With Creative User.</h2>
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What file formats will I receive my designs in?
                        </button>
                      </h6>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          We provide designs in various formats depending on
                          your needs, including high-resolution files suitable
                          for print (such as PDF, EPS, or TIFF) and web-friendly
                          formats (such as JPEG or PNG). We can also provide
                          source files (such as AI or PSD) upon request.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Do you offer rush or expedited services?
                        </button>
                      </h6>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Yes, we understand that some projects may have tight
                          deadlines. We offer rush services for an additional
                          fee, depending on our availability and the complexity
                          of the project. Please let us know your timeframe, and
                          we'll do our best to accommodate your needs.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What if I'm not satisfied with the initial designs?
                        </button>
                      </h6>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Your satisfaction is our priority. If you're not
                          satisfied with the initial designs, we'll work closely
                          with you to understand your feedback and make
                          revisions until we achieve the desired outcome. Our
                          goal is to ensure you're completely happy with the
                          final result.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingFour">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          How do you handle feedback and revisions?
                        </button>
                      </h6>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          We value open communication and collaboration with our
                          clients. Once we present initial design concepts, we
                          welcome your feedback and suggestions. We provide 2
                          free revisions as part of our design process, and
                          we'll work closely with you to incorporate your
                          feedback and refine the designs until they meet your
                          expectations.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home4-contact-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-wrapper text-center magnetic-item">
                <h2 className="title">Work With Us</h2>
                <h2 className="content">Let’s Talk</h2>
                <div className="contact-btn">
                  <Link className="magnetic-item"   href="/contact">
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ServiceDetailsPage;
