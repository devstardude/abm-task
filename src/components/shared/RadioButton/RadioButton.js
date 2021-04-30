import React from 'react';
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";
const PurpleRadio = withStyles({
  root: {
    color: "#BDBDBD",
    "&$checked": {
      color: "#673AB7",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);
const RadioButton = (props)=>{
    return <PurpleRadio checked={props.checked} />;
};

export default RadioButton ;