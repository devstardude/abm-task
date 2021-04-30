import React from 'react';
import BackIcon from "../../../../../assets/images/back.svg";
import EditIcon from "../../../../../assets/images/edit.svg";
import'./ManageTeamDiv.css';

const ManageTeamDiv = (props)=>{
    return (
      <div className="ManageTeamDiv-MainDiv">
        <div className="d-flex">
          <img src={BackIcon} alt="..." />
          <p className="ManageTeam-Text p-0">Management Team</p>
            <img src={EditIcon} alt="..." />
        </div>
      </div>
    );
};

export default ManageTeamDiv ;