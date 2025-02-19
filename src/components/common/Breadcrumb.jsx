import Link from "next/link";
import React from "react";

function Breadcrumb({ title, pageName, pageList }) {
  return (
    <section className="breadcrumbs">
      <div className="breadcrumb-sm-images">
        <div className="inner-banner-1 magnetic-item">
          <img src="assets/img/inner-pages/about1.jpg" alt="" />
        </div>
        <div className="inner-banner-2 magnetic-item">
          <img src="assets/img/inner-pages/about2.jpg" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrapper">
              <div className="breadcrumb-cnt">
                {pageName && <span>{pageName}</span>}
                <h1>"{title}"</h1>
                <div className="breadcrumb-list">
                  <Link legacyBehavior href="/">
                    <a>Home</a>
                  </Link>
                  <img
                    src="assets/img/inner-pages/breadcrumb-arrow.svg"
                    alt=""
                  />
                  {pageList}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Breadcrumb;
