import Reveal from "@/animations/Reveal";
import React from "react";

function Partner5() {
  return (
    <div
      className="home5-partner-area mb-130"
      style={{ backgroundColor: "#1a1a1a", color: "#ffffff" }}
    >
      <div className="container">
        <div
          className="row mb-55 "
        >
          <Reveal fadeInUp>
          <div className="col-lg-12 d-flex align-items-center justify-content-between flex-wrap gap-2">
            <div className="section-title-5">
              <span>Technologies</span>
              <h2>What tech stack do we use ?</h2>
            </div>
            <div className="section-content">
              <p>
                We are concerned about the security of our customers. That's why
                we always keep updating and using the best technologies in our
                products.
              </p>
            </div>
          </div>
          </Reveal>
        </div>
        <Reveal fadeInUp>
        <div
          className="d-flex gap-5 flex-wrap justify-content-between"
        >
          {/* Grid 1 */}
          <div
            style={{
              // flex: "1",
              minWidth: "350px",
              margin : "0 auto",
              textAlign: "center",
              backgroundColor: "#2e2e2e",
              padding: "10px",
            }}
          >
            <h3 style={{ margin: "10px 0px" }}>Frontend</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                // gap: "10px",
                rowGap : "25px",
                justifyItems: "center",
                padding: "10px",
              }}
            >
              <div className="tech-stack-card">
                <img
                  style={{ objectFit: "contain" }}
                  height={84.3}
                  width={84.3}
                  src="new-assets/html-logo.png"
                  alt="HTML"
                />
              </div>
              <div className="tech-stack-card">
                <img
                  style={{ objectFit: "contain" }}
                  height={84.3}
                  width={84.3}
                  src="new-assets/css-logo.png"
                  alt="CSS"
                />
              </div>
              <div className="tech-stack-card">
                <img
                  style={{ objectFit: "contain" }}
                  height={84.3}
                  width={84.3}
                  src="new-assets/js-logo.png"
                  alt="JavaScript"
                />
              </div>
              <div className="tech-stack-card">
                <img
                  style={{ objectFit: "contain" }}
                  height={84.3}
                  width={84.3}
                  src="new-assets/react-logo.png"
                  alt="React"
                />
              </div>
            </div>
          </div>

          {/* Grid 2 */}
          <div
            style={{
              // flex: "1",
              minWidth: "350px",
              margin : "0 auto",
              textAlign: "center",
              backgroundColor: "#2e2e2e",
              padding: "10px",
            }}
          >
            <h3 style={{ margin: "10px 0px" }}>Backend</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                // gap: "10px",
                rowGap : "25px",
                justifyItems: "center",
                padding: "10px",
              }}
            >
              <div className="tech-stack-card">
                <img
                  style={{ objectFit: "contain" }}
                  height={84.3}
                  width={84.3}
                  src="new-assets/node-logo.png"
                  alt="Node.js"
                />
              </div>
              <div className="tech-stack-card">
                <img
                  style={{ objectFit: "contain" }}
                  height={84.3}
                  width={84.3}
                  src="new-assets/mongo-logo.png"
                  alt="MongoDB"
                />
              </div>
              <div className="tech-stack-card">
                <img
                  style={{ objectFit: "contain" }}
                  height={84.3}
                  width={84.3}
                  src="new-assets/firebase-logo.png"
                  alt="Firebase"
                />
              </div>
              <div className="tech-stack-card">
                <img
                  style={{ objectFit: "contain" }}
                  height={84.3}
                  width={84.3}
                  src="new-assets/wp-logo.png"
                  alt="WordPress"
                />
              </div>
            </div>
          </div>

          {/* Grid 3 */}
          <div
            style={{
              // flex: "1",
              minWidth: "350px",
              margin : "0 auto",
              textAlign: "center",
              backgroundColor: "#2e2e2e",
              padding: "10px",
            }}
          >
            <h3 style={{ margin: "10px 0px" }}>Design Tools</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                rowGap : "25px",
                justifyItems: "center",
                padding: "10px",
              }}
            >
              <div className="tech-stack-card">
                <img
                  style={{ objectFit: "contain" }}
                  height={84.3}
                  width={84.3}
                  src="new-assets/figma-logo.png"
                  alt="Figma"
                />
              </div>
              <div className="tech-stack-card">
                <img
                  style={{ objectFit: "contain" }}
                  height={84.3}
                  width={84.3}
                  src="new-assets/photoshop-logo.png"
                  alt="Photoshop"
                />
              </div>
              <div className="tech-stack-card">
                <img
                  style={{ objectFit: "contain" }}
                  height={84.3}
                  width={84.3}
                  src="new-assets/illustartor-logo.png"
                  alt="Illustrator"
                />
              </div>
              <div className="tech-stack-card">
                <img
                  style={{ objectFit: "contain" }}
                  height={84.3}
                  width={84.3}
                  src="assets/img/home-5/webflow-logo.png"
                  alt="Webflow"
                />
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Partner5;
