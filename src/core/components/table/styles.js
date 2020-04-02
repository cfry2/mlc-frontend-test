import { createUseStyles } from "react-jss";

const styles = createUseStyles(theme => ({
  tableRow: {
    display: "flex",
    flexDirection: "row",
    border: "solid 2px black",
    borderBottom: "none",
    width: "250px",
    margin: "0 auto",
    "&:last-child": {
      borderBottom: `solid 2px ${theme.colours.black}`,
      borderBottomLeftRadius: "3px",
      borderBottomRightRadius: "3px",
      marginBottom: "20px"
    },
    "&:first-child": {
      borderTopLeftRadius: "3px",
      borderTopRightRadius: "3px"
    }
  },
  tableCell: {
    width: "50px",
    height: "50px",
    borderRight: `solid 2px ${theme.colours.black}`,
    "&:last-child": {
      borderRight: "none"
    }
  }
}));

export default styles;
