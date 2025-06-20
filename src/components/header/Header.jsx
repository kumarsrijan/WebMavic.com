import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
  isLeftSidebarOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    case "TOGGLE_LEFT_SIDEBAR":
      return {
        ...state,
        isLeftSidebarOpen: !state.isLeftSidebarOpen,
      };
    default:
      return state;
  }
}

function Header() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const headerRef = useRef(null);
  const handleScroll = () => {
    const { scrollY } = window;
    dispatch({ type: "setScrollY", payload: scrollY });
  };
  const currentRoute = useRouter().pathname;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };

  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };
  const toggleLeftSidebar = () => {
    dispatch({ type: "TOGGLE_LEFT_SIDEBAR" });
  };
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_MENU", menu: "" });
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <>
      <div
        className={`header-sidebar ${state.isLeftSidebarOpen ? "slide" : ""}`}
      >
        <div className="siderbar-top">
          <div className="sidebar-log">
            <Link  href="/">
             
                <img src="assets/img/webmavic-logo.png" alt="" />
             
            </Link>
          </div>
          <div className="close-btn" onClick={toggleLeftSidebar}>
            <i className="bi bi-x-lg" />
          </div>
        </div>
        <div className="sidebar-content">
          <p>
            Duis Link orci nunc. Suspendisse ac convallis sapien, quis commodo
            libero. Donec nec duomoi luctus, pellentesque lacus sed, mollis
            going leo.
          </p>
        </div>
        <div className="address-card">
          <div className="content">
            <div className="informations">
              <div className="single-info">
                <div className="icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div className="info">
                  <p>
                    168/170, Avenue 01, Old York Drive Rich Mirpur DOHS,
                    Bangladesh
                  </p>
                </div>
              </div>
              <div className="single-info">
                <div className="icon">
                  <i className="fas fa-phone-alt" />
                </div>
                <div className="info">
                  <Link href="tel:05661111985">+880 566 1111 985</Link>
                  <Link href="tel:06571111576">+880 657 1111 576</Link>
                </div>
              </div>
              <div className="single-info">
                <div className="icon">
                  <i className="far fa-envelope" />
                </div>
                <div className="info">
                  <Link href="mailto: info@example.com">info@example.com</Link>
                  <Link href="mailto: info@support.com">info@support.com</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <header
        ref={headerRef}
        className={state.scrollY > 10 ? "header-area2 sticky" : "header-area2"}
      >
        <div className="header-logo">
          <Link  href="/">
           
              <img
                alt="image"
                className="img-fluid"
                src="assets/img/logo.svg"
              />
           
          </Link>
        </div>
       
        <div className="nav-right d-flex jsutify-content-end align-items-center">
          <div className="sidebar-btn2" onClick={toggleLeftSidebar}>
            <img src="assets/img/home-3/sidebar-btn.svg" alt="" />
          </div>
          <div className="header-btn d-xl-flex d-none">
            <Link  href="/contact">
              <Link className="primary-btn3">Get A Quote</Link>
            </Link>
          </div>
          <div
            className={`sidebar-button mobile-menu-btn ${
              state.isSidebarOpen ? "active" : ""
            }`}
            onClick={toggleSidebar}
          >
            <span />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
