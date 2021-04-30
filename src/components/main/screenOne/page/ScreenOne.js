import React from "react";
import ApplicationTabs from "../../../shared/applicationTabs/ApplicationTabs";
import ProfileInfoDiv from "../../../shared/profileInfoDiv/ProfileInfoDiv";
import AddRoleDiv from "../components/addRoleDiv/AddRoleDiv";
import ScreenOneTable from "../components/ScreenOneTable/ScreenOneTable";

import'./ScreenOne.css';

const ScreenOne = (props) => {
  return (
    <div className="ScreenOne">
      <ProfileInfoDiv/>
      <ApplicationTabs/>
      <AddRoleDiv/>
      <ScreenOneTable/>
    </div>
  );
};

export default ScreenOne;
