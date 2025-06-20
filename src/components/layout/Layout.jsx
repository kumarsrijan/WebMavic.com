"use client";
import Footer5 from "../footer/Footer5";
import useBodyClass from "@/hooks/useBodyClass";
import Link from "next/link";
import Sidebar from "../common/Sidebar";
import Back from "./Back";
import { Analytics } from "@vercel/analytics/react"
import useDisclosure from "@/hooks/useDisclosure";
import useMagneticHover from "@/hooks/useMagneticHover";
function Layout({ children }) {
  useBodyClass("home-dark2");
  useMagneticHover()
  const {open,toggleHandler:toggleMenu} = useDisclosure()

  return (
    <>
      <Sidebar isMenuOpen={open} toggleMenu={toggleMenu} />
      <div
        className="main-container"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="sidebar-wrapper">
          <div className="header-logo">
            <Link href="/">
             
                <img
                  src="assets/img/webmavic-icon.png"
                  alt="webmavic icon"
                  style={{ width: "60px" }}
                />
             
            </Link>
          </div>
          <div className="sidebar-button mobile-menu-btn" onClick={toggleMenu}>
            <span />
          </div>
          <div className="header-btn">
            <Link className="primary-btn6" href="/contact">
              Get A Quote
            </Link>
          </div>
        </div>
        <div className="main-content">
          <header className="header5 d-lg-none d-flex">
            <div className="header-logo">
              <Link href="/">
               <img src="assets/img/webmavic-logo.png" alt="logo" style={{height:"40px"}}/>
                
              </Link>
            </div>
            <div
              className="sidebar-button mobile-menu-btn2"
              onClick={toggleMenu}
            >
              <span />
            </div>
          </header>
          {children}
          <Footer5 />
          <Back />
        </div>
      </div>
      <Analytics />
    </>
  );
}

export default Layout;
