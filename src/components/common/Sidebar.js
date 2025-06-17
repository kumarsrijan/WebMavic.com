"use client";
import Link from "next/link";
import React, { useReducer } from "react";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
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
    default:
      return state;
  }
}
function Sidebar({ isMenuOpen, toggleMenu }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const collapseMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };
  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };
  return (
    <div className="main-nav-wrapper">
      <div className={`main-nav2 ${isMenuOpen ? "show-menu" : ""}`}>
        <div className="menu-close-btn" onClick={toggleMenu}>
          <i className="bi bi-x-lg" />
        </div>
        <div className="mobile-logo-area d-flex justify-content-start align-items-center">
          <div className="header-logo">
            <Link  href="/">
             
                <img
                  alt="image"
                  className="img-fluid"
                  src="assets/img/webmavic-logo.png"
                  style={{ width: "30vw" }}
                />
              
            </Link>
          </div>
        </div>
        <div className="sidebar-menu-area">
          <ul className="menu-list">
            <li className="menu-item">
              <Link data-hover="Home" href="/">
                home
              </Link>
            </li>
            <li className="menu-item">
              <Link data-hover="About Us" href="/about">
               About Us
              </Link>
            </li>

            <li className="menu-item-has-children menu-item">
              <Link href={"/"} data-hover="Our Services" onClick={(e) => {
                e.preventDefault();
                collapseMenu("service");
              }}>Our Services </Link>
              <i
                className={`bi  dropdown-icon2 ${
                  state.activeMenu === "service" ? "bi-dash-lg" : "bi-plus-lg"
                }`}
                onClick={() => collapseMenu("service")}
              />
              <ul
                className={`sub-menu ${
                  state.activeMenu === "service" ? "d-block" : ""
                }`}
              >
                <li>
                  <Link  href="/web-design">
                    Web Design
                  </Link>
                </li>
                <li>
                  <Link  href="/web-development">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link  href="/app-development">
                    App Development
                  </Link>
                </li>
                <li>
                  <Link  href="/graphic-design">
                    Graphic Design
                  </Link>
                </li>
                <li>
                  <Link  href="/copywriting">
                    Copywriting
                  </Link>
                </li>
                <li>
                  <Link  href="/seo">
                    S E O
                  </Link>
                </li>
              </ul>
            </li>

            <li className="menu-item">
              <Link data-hover="The team" href="/team">The team
              </Link>
            </li>
            <li className="menu-item">
              <Link data-hover="FAQs" href="/faq">
                FAQs
              </Link>
            </li>
            <li className="menu-item">
              <Link data-hover="Work With Us" href="/contact">
                Work With Us
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
