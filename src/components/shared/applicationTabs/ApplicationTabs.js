import React from 'react';
import FeedIcon from "../../../assets/images/feed.svg"
import TableIcon from "../../../assets/images/table.svg"
import SyncIcon from "../../../assets/images/sync.svg"
import'./ApplicationTabs.css';

const ApplicationTabs = (props)=>{
    return (
      <div>
        <div className="ApplicationTabs-MainDiv d-flex">
          <div className="ApplicationTabs-SecondDiv d-flex align-items-center mr-2 pr-2">
            <img className="mr-2" src={FeedIcon} alt="..." />
            <p>Permission</p>
            <div className="ApplicationTabs-BorderBottom"></div>
          </div>
          <div className="ApplicationTabs-Divider d-flex align-items-center"></div>
          <div className="ApplicationTabs-SecondDiv d-flex align-items-center mr-2 pr-2">
            <img className="mr-2" src={TableIcon} alt="..." />
            <p>Approval Matrix</p>
          </div>
          <div className="ApplicationTabs-SyncInfo ml-auto">
            <div className="d-flex align-items-center mr-3">
              <img className="mr-2" src={SyncIcon} alt="..." />
              <p>Last synched 15 minutes ago</p>
            </div>
          </div>
        </div>
          <hr className="p-0 m-0" />
      </div>
    );
};

export default ApplicationTabs ;