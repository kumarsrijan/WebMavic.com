import React from "react";
import data from "./cardData";
import Card from "@/components/services/Card";

function Service5() {
  return (
    <div className="home5-services-section mb-130">
      <div className="container">
        <div
          className="row mb-55 wow animate fadeInUp"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="col-lg-12">
            <div className="section-title-5 text-center">
              <span>Solutions We Offer</span>
              <h2>Services &amp; Solutions</h2>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {data.map((item) => (
            <Card items={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service5;
