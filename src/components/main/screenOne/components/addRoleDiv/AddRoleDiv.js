import React from 'react';
import {Button} from "@material-ui/core"
import EditIcon from "../../../../../assets/images/edit.svg"
import DeleteIcon from "../../../../../assets/images/delete.svg"
import AddIcon from "@material-ui/icons/Add";
import'./AddRoleDiv.css';

const AddRoleDiv = (props)=>{
    return (
      <div className="AddRoleDiv-MainDiv">
        <Button className="AddRoleDiv-Button" startIcon={<AddIcon />}>
          Add Role
        </Button>
        <img className="ml-5" src={EditIcon} alt="..." />
        <img className="ml-4" src={DeleteIcon} alt="..." />
      </div>
    );
};

export default AddRoleDiv ;