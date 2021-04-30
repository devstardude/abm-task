import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import IosSwitch from "../../../../shared/iosSwitch/IosSwitch";
import AccessTag from "../../../../shared/AccessTag/AccessTag";
import CollapsedDiv from "../collapsedDiv/CollapsedDiv";
import "./ScreenTwoTable.css"
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(role, access, summery, updated) {
  return {
    role,
    access,
    summery,
    updated,
    history: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <p className="ScreenTwoTable-Text"> {row.role}</p>
        </TableCell>
        <TableCell align="center">
          <AccessTag access={row.access} />
        </TableCell>
        <TableCell align="center">
          <p className="ScreenTwoTable-Text"> {row.summery}</p>
        </TableCell>
        <TableCell align="center">
          <p className="ScreenTwoTable-Text"> {row.updated}</p>
        </TableCell>
        <TableCell align="center">
          <IosSwitch />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <CollapsedDiv />
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "Budget",
    "All Access",
    "View | Create | Edit | Delete",
    "1 min ago"
  ),
  createData("Bidding", "Restricted Access", "View | Create ", "1 min ago"),

  createData(
    "Vendor Portal",
    "Restricted Access",
    "View | Create ",
    "1 min ago"
  ),
  createData(
    "Purchase Order/Work Order",
    "Restricted Access",
    "View | Create ",
    "1 min ago"
  ),
  createData(
    "Organisational Profile",
    "All Access",
    "View | Create | Edit | Delete ",
    "1 min ago"
  ),
  createData("Permissions & Access Control", "No Access", "", "1 min ago"),
];

export default function ScreenTwoTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" size="small">
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
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
