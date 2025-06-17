import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import React from "react";
import Team from "@/components/Team/Team";

export const metadata = {
  title: "Team | WebMavic",
  description: "Meet the team behind WebMavic, dedicated to delivering excellence in web development and design.",
  keywords: "WebMavic, team, web development, design, professionals, experts",
};

function TeamPage() {
  return (
    <Layout>
      <Breadcrumb pageList="Team" title="Meet Our Expertis" pageName="TEAM" />
     

      <div
        className="home3-contact-area sec-mar"
        style={{
          margin: 0,
          background: "rgb(6, 216, 137)",
          background:
            "linear-gradient(180deg, rgba(6, 216, 137, 1) 0%, rgba(0,255,0,0) 90%)",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
             
              <p
                style={{
                  color: "white",
                  margin: "10%",
                }}
              >
                A good team is fundamental to any organization. Here at
                WebMavic, we have created a team that is strong, efficient, and
                up-to-date with the latest technology. Every team member here
                complements each other and is like a part of the puzzle that
                completes the organization. We aim to deliver the best to our
                customers and nothing less.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home5-team-section"
        style={{ marginTop: "1.5%", marginBottom: "10%",  }}  >
        <div className="container">
           <Team/>
        </div>
      </div>
    </Layout>
  );
}

export default TeamPage;
