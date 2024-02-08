import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

function ServiceDetailsPage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Services Details"
        title="Web Design"
        pageName="satrts   at   7500/-"
      />
      <div className="service-details ">
        <div className="about-services sec-mar">
          <div className="container">
            <div className="row gy-5">
              <div
                className="col-lg-6 d-flex align-items-center wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="about-content">
                  <div className="section-title-5">
                    <h2>Web Design</h2>
                  </div>
                  <p style={{textAlign:"justify"}}>
                    We specialize in delivering contemporary and refined designs
                    that seamlessly incorporate scalability. Overlooking
                    scalability in web development may impose future
                    constraints, limiting your potential for growth. With our
                    expertise, your website not only boasts a cutting-edge
                    aesthetic but also seamlessly adjusts to your evolving
                    requirements, guaranteeing that your online presence stays
                    ahead in innovation. Our agency is dedicated to providing
                    modern, sophisticated solutions that prioritize both design
                    excellence and future-proof scalability for sustained
                    success.
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
                      Premium Elements
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
                      Responsive Design
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
                      Fast Loading Speed
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
                      Intuitive Navigation
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
                      Secure Connection (SSL)
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
                      Analytics Integration
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
                      High-Quality Content
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
                      Interactive Elements
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-6 wow animate fadeInRight"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="service-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/img/inner-pages/about-service-img.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="how-we-work-section sec-mar">
          <div className="container">
            <div
              className="row mb-60 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>How we work</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="work-item">
            <div className="container-fluid">
              <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 gy-5 justify-content-center">
                <div
                  className="col magnetic-item wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="assets/img/inner-pages/work-icon-01.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>Requirements Gathering.</h3>
                      {/* <p>
                        Interdum et malesuada fames acchiv Etiam europeat
                        nibhona elementum, accumsan ona.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col magnetic-item wow animate fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="assets/img/inner-pages/work-icon-02.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>Analysis and Planning.</h3>
                      {/* <p>
                        Interdum et malesuada fames acchiv Etiam europeat
                        nibhona elementum, accumsan ona.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col magnetic-item wow animate fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="assets/img/inner-pages/work-icon-03.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>Design &amp; Development.</h3>
                      {/* <p>
                        Interdum et malesuada fames acchiv Etiam europeat
                        nibhona elementum, accumsan ona.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col magnetic-item wow animate fadeInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="assets/img/inner-pages/work-icon-04.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>Testing Device &amp; Release.</h3>
                      {/* <p>
                        Interdum et malesuada fames acchiv Etiam europeat
                        nibhona elementum, accumsan ona.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div
                  className="col magnetic-item wow animate fadeInUp"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="single-work">
                    <div className="work-icon">
                      <img
                        src="assets/img/inner-pages/work-icon-05.svg"
                        alt=""
                      />
                    </div>
                    <div className="work-content">
                      <h3>Maintenance and Support.</h3>
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
        </div>
        <div className="service-sort-driscription-area sec-mar">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-12 wow animate fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="driscription-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/img/inner-pages/service-driscription-img-1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="driscription-content">
                <div className="row">
                  <div
                    className="col-md-6 wow animate fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <p>
                      <h5>Premium Elements:</h5>
                      Custom design allows for a personalized approach, ensuring
                      that the design resonates with the specific preferences
                      and values of the client or target audience.
                      <h5>Responsive Design:</h5>
                      Guarantees that the website operates smoothly on devices
                      and screen sizes delivering an experience, for users.
                      <h5>Fast Loading Speed:</h5>
                      Improving the loading speed of web pages can enhance user
                      satisfaction. Positively impact search engine rankings.
                      <h5>Intuitive Navigation:</h5>
                      The website provides a navigation structure that's simple
                      to use and easy to understand allowing visitors to quickly
                      locate the information they are looking for.
                    </p>
                  </div>
                  <div
                    className="col-md-6 wow animate fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <p>
                      <h5>Secure Connection (SSL):</h5>
                      Using SSL certificates is crucial, for data encryption.
                      Establishing a connection, which helps build trust with
                      users and also has a positive impact, on SEO.
                      <h5>Analytics Integration:</h5>
                      We utilize tools such, as Google Analytics to monitor and
                      assess the performance of websites analyze user behavior
                      and track metrics.
                      <h5>High Quality Content:</h5>
                      We provide captivating, timely and contemporary content
                      that specifically caters to our intended audience ensuring
                      they stay well informed and engaged.
                      <h5>Interactive Elements:</h5>
                      The website utilizes elements such, as sliders, carousels
                      and animations to improve user engagement and create a
                      dynamic browsing experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-faq-area sec-mar">
          <div className="container">
            <div className="row gy-5">
              <div
                className="col-lg-6 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="faq-img magnetic-item">
                  <img
                    className="img-fluid"
                    src="assets/img/inner-pages/service-faq-img-01.png"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="col-lg-6 d-flex align-items-center wow animate fadeInRight"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
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
                          What does the web design process involve?
                        </button>
                      </h6>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          The web design process starts with discovery, where I
                          understand your goals and requirements, followed by
                          design, development, testing, and deployment. Each
                          phase is meticulously executed to create a visually
                          appealing and functional website.
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
                          Do I need to have a clear vision for my website before
                          we start?
                        </button>
                      </h6>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Not necessarily. I'm here to help you shape your
                          vision. We'll begin with a discussion to understand
                          your goals, and from there, we'll collaborate to
                          refine and bring your ideas to life.
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
                          What happens after the website is launched?
                        </button>
                      </h6>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          After the launch, I offer ongoing support,
                          maintenance, and optimization services. I will ensure
                          your website remains up-to-date, secure, and performs
                          at its best, so you can focus on your core business.
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
                          What factors do you consider when designing a website?
                        </button>
                      </h6>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          When designing a website, we focus on your brand
                          identity, target audience, user experience, and
                          current design trends to create a visually appealing
                          and effective site.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingFive">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          What is responsive design, and why is it important?
                        </button>
                      </h6>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Responsive design ensures your website looks and
                          functions well on all devices (desktop, tablet,
                          mobile). It's crucial for reaching a broader audience
                          and improving user experience.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingSix">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          How long does the design phase typically take?
                        </button>
                      </h6>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          The design phase duration depends on the project's
                          complexity, but it usually takes a few weeks to
                          develop initial concepts and refine them based on your
                          feedback.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h6 className="accordion-header" id="headingSeven">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSeven"
                          aria-expanded="false"
                          aria-controls="collapseSeven"
                        >
                          What does website maintenance include?
                        </button>
                      </h6>
                      <div
                        id="collapseSeven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Maintenance covers tasks like updating software,
                          monitoring security, fixing bugs, optimizing
                          performance, adding new content, and ensuring
                          compatibility with evolving web standards.
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
      <div className="home4-contact-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-wrapper text-center magnetic-item">
                <h2 className="title">Work With Us</h2>
                <h2 className="content">Let’s Talk</h2>
                <div className="contact-btn">
                  <Link legacyBehavior href="/contact">
                    <a className="magnetic-item">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ServiceDetailsPage;
