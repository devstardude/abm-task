import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import EyeIcon from "../../../../../assets/images/eye.svg";
import "./ScreenOneTable.css";
import AccessTag from "../../../../shared/AccessTag/AccessTag";

const useStyles = makeStyles({
  table: {
    minWidth: 1000,
    overflowX:"auto"
  }
});

function createData(role, access, members, updated) {
  return { role, access, members, updated };
}

const rows = [
  createData("Management Team", "All Access", 4, "1 min ago"),
  createData("Procurement Team", "Restricted Access", 8, "1 min ago"),
  createData("Project Team", "Restricted Access", 16, "1 min ago"),
  createData("IT Team", "Restricted Access", 4, "1 min ago"),
  createData("Super Admin", "All Access", 1, "1 min ago"),
];

const ScreenOneTable = () => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState(false);

  const handleChange = (event) => {
    setSelectedValue((prev)=>!prev);
  };

  return (
    <div className="ScreenOneTable-MainDiv">
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="simple table">
          <TableHead className="ScreenOneTable-TableHead">
            <TableRow>
              <TableCell className="py-4" align="center"></TableCell>
              <TableCell align="left">Department/Role Name</TableCell>
              <TableCell align="center">Access Level</TableCell>
              <TableCell align="center">No of Members</TableCell>
              <TableCell align="center">Last Updatd</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="ScreenOneTable-RadioButonRow">
                  <Radio
                    checked={selectedValue}
                    onChange={handleChange}
                    color="default"
                  />
                </TableCell>
                <TableCell className="ScreenOneTable-RoleRow" align="left">
                  <p className="ScreenOneTable-Text"> {row.role}</p>
                </TableCell>
                <TableCell align="center">
                  <AccessTag access={row.access} />
                </TableCell>
                <TableCell align="center">
                  <p className="ScreenOneTable-Text"> {row.members}</p>
                </TableCell>
                <TableCell align="center">
                  <p className="ScreenOneTable-Text"> {row.updated}</p>
                </TableCell>
                <TableCell align="center">
                  <img src={EyeIcon} alt="..." />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ScreenOneTable;
