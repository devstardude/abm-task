import React from "react";

import "./AccessControlDiv.css";

const AccessControlDiv = (props) => {
  return (
    <div className="AccessControlDiv-MainDiv">
      <div className="d-flex">
        <div className="AccessControlDiv-SecondDiv d-flex align-items-center justify-content-center mr-2 pr-4">
          <p>Access Control</p>
          <div className="AccessControlDiv-BorderBottom"></div>
        </div>
        <div className="AccessControlDiv-Divider d-flex align-items-center"></div>
        <div className="AccessControlDiv-ThirdDiv d-flex align-items-center justify-content-center mr-2 pr-2">
          <p>Assigned Members</p>
        </div>
      </div>
      <hr className="p-0 m-0" />
    </div>
  );
};

export default AccessControlDiv;
