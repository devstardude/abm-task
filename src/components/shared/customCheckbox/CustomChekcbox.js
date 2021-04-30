import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
const PurpleCheckbox = withStyles({
  root: {
    color: "#757575",
    "&$checked": {
      color: "#673AB7",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);
const CustomCheckbox = (props) => {
  return (
    <PurpleCheckbox
      checked={props.checked}
    />
  );
};

export default CustomCheckbox;
