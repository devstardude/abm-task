import React from "react";
import { NavLink } from "react-router-dom";
import NavigationTabs from "../navigationTabs/NavigationTabs"
import Logo from "../../../../assets/images/mainLogo.svg";
import BrandName from "../../../../assets/images/brandName.svg";
import {ReactComponent as OrganisationIcon}  from "../../../../assets/images/orgIcon.svg";
import {ReactComponent as ProjectsIcon} from "../../../../assets/images/projectsIcon.svg";
import { ReactComponent as SecurityIcon } from "../../../../assets/images/securityIcon.svg";

import "./SideNavigation.css";

const NavigationTabsData = [
  {
    name: "Projects",
    icon: <ProjectsIcon className="NavigationTabs-SvgLogo" />,
    link: "/one",
  },
  {
    name: "Organisation Profile",
    icon: <OrganisationIcon className="NavigationTabs-SvgLogo" />,
    link: "/two",
  },
  {
    name: "Access Control",
    icon: <SecurityIcon className="NavigationTabs-SvgLogo" />,
    link: "/one",
  },
];

const SideNavigation = (props) => {
  return (
    <div className="SideNavigation-Main">
      <div className="SideNavigation-BrandNameDiv d-flex align-items-center ">
        <img className="SideNavigation-Logo " src={Logo} alt="..." />
        <img className="SideNavigation-BrandName " src={BrandName} alt="..." />
      </div>
      {NavigationTabsData.map((data) => (
        <NavLink key={data.name} to={data.link} className="Link">
          <NavigationTabs
            activeState={data.name=== "Access Control" && true}
            name={data.name}
          >
            {data.icon}
          </NavigationTabs>
        </NavLink>
      ))}
    </div>
  );
};


export default SideNavigation;
