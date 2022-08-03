import React, { CSSProperties, ReactNode } from "react";
import "./styleComponent.css";

interface IGrid {
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
  children?: ReactNode;
}
const Grid = (props: IGrid) => {
  const { height, width, children } = props;
  const customStyle = {
    height: height,
    width: width,
  };
  return (
    <div className="grid-wrap" style={customStyle}>
      {children}
    </div>
  );
};

export default Grid;
