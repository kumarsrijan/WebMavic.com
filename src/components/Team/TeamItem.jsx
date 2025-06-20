import Reveal from "@/animations/Reveal";
import React from "react";

const TeamItem = (props) => {
  return (
    <li className="magnetic-item">
    <Reveal fadeInUp>
      <div className="single-team ">
        <div className="team-img">
          <img src={props.data.avatar} alt={props.data.name} />
        </div>
        <div className="team-content">
          <h4>{props.data.name}</h4>
          <span>{props.data.role}</span>
        </div>
      </div>
      </Reveal>
    </li>
  );
};

export default TeamItem;
