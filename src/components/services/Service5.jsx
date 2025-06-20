import React from "react";
import data from "./cardData";
import Card from "@/components/services/Card";
import Reveal from "@/animations/Reveal";

function Service5() {
  return (
    <div className="home5-services-section mb-130">
      <div className="container">
        <div className="row mb-55">
          <div className="col-lg-12">
            <Reveal fadeInUp>
              <div className="section-title-5 text-center">
                <span>Solutions We Offer</span>
                <h2>Services &amp; Solutions</h2>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal fadeInUp>
          <div>
            <div className="services-wrapper">
              {data.map((item) => (
                <Card items={item} key={item.id} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Service5;
