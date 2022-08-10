import React from "react";
import "./progressBar.css";
import LinearProgress, {
  LinearProgressProps,
} from "@material-ui/core/LinearProgress";
interface IProgressBar {
  /**
   * value of the progress bar
   */
  value: number;
  variant: LinearProgressProps["variant"];
}

const ProgressBar = (props: IProgressBar) => {
  const { value, variant } = props;
  return (
    <div className="progress-bar-wrapper">
      <LinearProgress variant={variant} value={value} />
    </div>
  );
};

export default ProgressBar;
