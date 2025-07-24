"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Home5Team = dynamic(()=>import("@/components/Team/Home5Team"))
const About5 = dynamic(() => import("@/components/about/About5"));
const Review6 = dynamic(() => import("@/components/review/Review6"));
const Bannder5 = dynamic(() => import("@/components/bannner/Bannder5"));
const CaseStudy5 = dynamic(() => import("@/components/caseStudy/CaseStudy5"));
const WhatWeDo5 = dynamic(() => import("@/components/choose/WhatWeDo5"));
const Sidebar = dynamic(() => import("@/components/common/Sidebar"));
const Footer5 = dynamic(() => import("@/components/footer/Footer5"));
const Partner5 = dynamic(() => import("@/components/partner/Partner5"));
const Service5 = dynamic(() => import("@/components/services/Service5"));
const Testimonial3 = dynamic(()=> import("@/components/testimonial/Testimonial3"));
const Back = dynamic(() => import("@/components/layout/Back"));
const RequestDemoPopup = dynamic(() => import("@/components/popups/RequestDemoPopup"));

import useMagneticHover from "@/hooks/useMagneticHover";
import useBodyClass from "@/hooks/useBodyClass";
import useDisclosure from "@/hooks/useDisclosure";

import webmavicicon from "@/public/assets/img/webmavic-icon.png";
import webmaviclogo from "@/public/assets/img/webmavic-logo.png";

export default function HomePage() {
  const { open, toggleHandler } = useDisclosure();
  useMagneticHover();
  useBodyClass("bg-dark-5");
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <RequestDemoPopup delay={10000} cooldownPeriod={1} />
      <Sidebar isMenuOpen={open} toggleMenu={toggleHandler} />
      <div className="main-container">
        <div className="sidebar-wrapper">
          <div className="header-logo">
            <Link href="/">
              <Image src={webmavicicon} width={70} alt="webmavic-logo" />
            </Link>
          </div>
          <div className="sidebar-button" onClick={toggleHandler}>
            <span />
          </div>
          <div className="header-btn">
            <Link className="primary-btn6" href="/contact">
              Get A Quote
            </Link>
          </div>
        </div>
        <div className="main-content">
          <header className="header5 d-lg-none">
            <div className="header-logo">
              <Link href="/">
                <Image
                  src={webmaviclogo}
                  alt="webmavic"
                  width={200}
                  style={{ float: "left" }}
                />
              </Link>
            </div>
            <div className="sidebar-button" onClick={toggleHandler}>
              <span />
            </div>
          </header>
          <Bannder5 />
          <About5 />
          <Review6 />
          <Service5 />
         <Testimonial3 /> 
          <WhatWeDo5 />
          <Partner5 />
          <CaseStudy5 />
          <Home5Team />
          <Footer5 />
          <Back />
        </div>
      </div>
    </>
  );
}
