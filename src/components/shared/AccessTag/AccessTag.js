import React from "react";

import "./AccessTag.css";

const AccessClass = (access) => {
  const accessClass = "Access-Allowed border-success";
  const restrctedAccessClass = "Access-Denied border-danger";
  const noAccessClass = "No-Access border-secondary";
  if (access === "All Access") {
    return accessClass;
  } else if (access === "Restricted Access") {
    return restrctedAccessClass;
  } else {
    return noAccessClass;
  }
};

const AccessTag = (props) => {
  return (
    <div className="AccessRow d-flex justify-content-center">
      <div
        className={`Access d-flex align-items-center justify-content-center rounded-pill border  ${AccessClass(props.access)}`}
      >
        {props.access}
      </div>
    </div>
  );
};

export default AccessTag;
