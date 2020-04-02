import React from "react";
import Table from "../../components/table";
import Controls from "../../components/controls";
import styles from "./styles";
import { ThemeProvider } from "react-jss";
import { JssProvider } from "react-jss";
import { create as createJss } from "jss";
import jssGlobals from "jss-plugin-global";
import camelCase from "jss-plugin-camel-case";
import jssNested from "jss-plugin-nested";

const jss = createJss();
jss.use(jssGlobals(), camelCase(), jssNested());

const theme = {
  fontFamily: "'Open Sans', sans-serif",
  colours: {
    black: "#1E1A1E",
    slateBlue: "#978AE2",
    lilac: "#C8ADC0",
    dustStorm: "#EDD3C4"
  },
  breakpoints: {
    largeUp: "@media (min-width: 1024px)"
  }
};

const Main = () => {
  const classes = styles();
  return (
    <JssProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <div className={classes.container}>
          <Table />
          <Controls />
        </div>
      </ThemeProvider>
    </JssProvider>
  );
};

export default Main;
