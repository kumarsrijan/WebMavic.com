import React from "react";

const TeamItem = (props) => {
  return (
    <li className="wow animate fadeInUp"
      data-wow-delay="200ms"
      data-wow-duration="1500ms">
      <div className="single-team magnetic-item">
        <div className="team-img">
          <img src={props.data.avatar} alt="ico" />
        </div>
        <div className="team-content">
          <h4>{props.data.name}</h4>
          <span>{props.data.role}</span>
        </div>
      </div>
    </li>
  );
};

export default TeamItem;
