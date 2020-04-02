import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  container: {
    maxWidth: "800px",
    width: "100%",
    margin: "0 auto",
    marginTop: "40px",
    justifyContent: "center",
    "@media (min-width: 1024px)": {
      display: "flex",
      marginTop: "150px",
      "& > div:first-child": {
        marginRight: "50px"
      }
    }
  },
  "@global": {
    "body *": {
      boxSizing: "border-box"
    },
    body: {
      fontFamily: "'Open Sans', sans-serif",
      background: "#C8ADC0"
    }
  }
});

export default styles;
