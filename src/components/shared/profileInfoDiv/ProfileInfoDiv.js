import React from "react";
import HelpIcon from "../../../assets/images/help.svg";
import NotificationIcon from "../../../assets/images/notification.svg";
import DpIcon from "../../../assets/images/dp.svg";
import "./ProfileInfoDiv.css";

const ProfileInfoDiv = (props) => {
  return (
    <div className="ProfileInfoDiv-MainDiv d-flex flex-row-reverse align-items-center">
      <img className="ProfileInfoDiv-HelpIcon" src={HelpIcon} alt="..." />
      <img
        className="ProfileInfoDiv-NotificationIcon"
        src={NotificationIcon}
        alt="..."
      />
      <h4 className="ProfileInfoDiv-Name ">Kishore</h4>

      <img className="ProfileInfoDiv-DpIcon" src={DpIcon} alt="..." />
    </div>
  );
};

export default ProfileInfoDiv;
