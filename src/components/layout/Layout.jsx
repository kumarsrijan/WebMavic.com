import { useState } from "react";
import Footer5 from "../footer/Footer5";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";
import Link from "next/link";
import Sidebar from "../common/Sidebar";
function Layout({ children }) {
  useBodyClass("home-dark2");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>
          Softconic- Software Agency and creative IT solution NEXTJS Template
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/img/sm-logo.svg" />
      </Head>
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div
        className="main-container"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="sidebar-wrapper">
          <div className="header-logo">
            <Link legacyBehavior href="/">
              <a>
                <img src="assets/img/sm-logo.svg" alt="" />
              </a>
            </Link>
          </div>
          <div className="sidebar-button mobile-menu-btn" onClick={toggleMenu}>
            <span />
          </div>
          <div className="header-btn">
            <Link legacyBehavior href="/contact">
              <a className="primary-btn6">Get A Quote</a>
            </Link>
          </div>
        </div>
        {children}
        <Footer5 />
      </div>
    </>
  );
}

export default Layout;
