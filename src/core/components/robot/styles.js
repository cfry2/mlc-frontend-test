import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  robot: {
    width: "100%",
    height: "100%",
    background: "url(./robot.svg)",
    backgroundSize: "36px 36px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  },
  "@keyframes dance": {
    "0%": { transform: "translateX(0px)" },
    "30%": { transform: "translateX(8px)" },
    "50%": { transform: "translateX(0px)" },
    "80%": { transform: "translateX(-8px)" },
    "100%": { transform: "translateX(0px)" }
  },
  dancing: {
    animationName: "$dance",
    animationTimingFunction: "ease",
    animationDuration: "2s",
    animationIterationCount: "2"
  }
});

export default styles;
