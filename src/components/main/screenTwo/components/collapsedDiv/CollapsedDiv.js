import React from 'react';
import Radio from "@material-ui/core/Radio";
import'./CollapsedDiv.css';
import RadioButton from '../../../../shared/RadioButton/RadioButton';
import CustomCheckbox from '../../../../shared/customCheckbox/CustomChekcbox';

const CollapsedDiv = (props)=>{
    return (
      <div className="CollapsedDiv-MainDiv">
        <p className="py-0 my-0">All aspects in the bidding module</p>
        <div className="CollapsedDiv-SecondaryDiv d-flex">
          <div className="CollapsedDiv-AccessControls ">
            <p className="CollapsedDiv-AccessControls-Heading">
              Access Controlls
            </p>
            <div className="CollapsedDiv-AccessControls-Options">
              <div className="d-flex">
                <Radio checked={false} color="default" />
                <div>
                  <p>All Access</p>
                  <p className="text-muted">Can access all items</p>
                </div>
              </div>
              <div className="d-flex my-4">
                <RadioButton checked={true} />
                <div>
                  <p>Restricted Access</p>
                  <p className="text-muted">
                    Can access only assigned or created items
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="CollapsedDiv-Permissions">
            <p className="CollapsedDiv-AccessControls-Heading">Permissions</p>
            <div className="CollapsedDiv-AccessControls-Options">
              <div className="d-flex align-items-center">
                <CustomCheckbox />
                <div>
                  <p>View items in access</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <CustomCheckbox checked={true} />
                <div>
                  <p>Edit items in access</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <CustomCheckbox />
                <div>
                  <p>Create items in access</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <CustomCheckbox />
                <div>
                  <p>Delete items in access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CollapsedDiv ;