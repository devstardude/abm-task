import React from "react";

import "./NavigationTabs.css";

const NavigationTabs = (props) => {
  return (
    <div className={`NavigationTabs-Active ${props.activeState && `NavigationTabs-ActiveState`}`}>
      <div className="NavigationTabs-TabsNameDiv d-flex align-items-center ">
        <div className="NavigationTabs-TabsLogo">{props.children}</div>
        <p className="NavigationTabs-TabsName ">{props.name}</p>
      </div>
    </div>
  );
};

export default NavigationTabs;
