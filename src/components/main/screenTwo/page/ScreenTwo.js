import React from 'react';
import ApplicationTabs from '../../../shared/applicationTabs/ApplicationTabs';
import ProfileInfoDiv from '../../../shared/profileInfoDiv/ProfileInfoDiv';
import AccessControlDiv from '../components/accessControlDiv/AccessControlDiv';
import ManageTeamDiv from '../components/manageTeamDiv/ManageTeamDiv';
import ScreenTwoTable from "../components/screenTwoTable/ScreenTwoTable";
import'./ScreenTwo.css';

const ScreenTwo = (props)=>{
    return (
      <div className="ScreenTwo">
        <ProfileInfoDiv />
        <ApplicationTabs />
        <ManageTeamDiv />
        <AccessControlDiv />
        <div className="ScreenTwoTable">
          <ScreenTwoTable />
        </div>
      </div>
    );
};

export default ScreenTwo ;