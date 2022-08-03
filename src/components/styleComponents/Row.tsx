import React, { CSSProperties, ReactNode } from "react";
import "./styleComponent.css";

interface IRow {
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
  children?: ReactNode;
}
const Row = (props: IRow) => {
  const { height, width, children } = props;
  const customStyle: CSSProperties = {
    height: height,
    width: width,
  };
  return (
    <div className="row-wrap" style={customStyle}>
      {children}
    </div>
  );
};

export default Row;
