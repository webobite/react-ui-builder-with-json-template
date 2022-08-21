import React, { CSSProperties, ReactNode } from "react";
import "./styleComponent.css";

interface IColumn {
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
  children?: ReactNode;
}
const Column = (props: IColumn) => {
  const { height, width, children } = props;
  const customStyle: CSSProperties = {
    height: height,
    width: width,
  };
  return (
    <div className="column-wrap" style={customStyle}>
      {children}
    </div>
  );
};

export default Column;
