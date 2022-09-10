import React from "react";
import "./progressBar.css";
import LinearProgress, { LinearProgressProps } from "@mui/material/LinearProgress";
// import LinearProgress, {
//   LinearProgressProps,
// } from "@material-ui/core/LinearProgress";
interface IProgressBar {
  /**
   * value of the progress bar
   */
  value: number;
  variant: LinearProgressProps["variant"];
  color: LinearProgressProps["color"];
}

const ProgressBar = (props: IProgressBar) => {
  const { value, variant, color } = props;
  return (
    <div className="progress-bar-wrapper">
      <LinearProgress variant={variant} value={value} color={color} />
    </div>
  );
};

export default ProgressBar;
