import React from "react";
import {
  init,
} from "./helper";
import './canvas.css';

interface ICanvas {
  getComponent: any;
  layoutConfig: any;
  componentProps: any;
}

const Canvas = (props: ICanvas) => {
  const { getComponent, layoutConfig, componentProps } = props;

  let layoutRendererArray = init(getComponent, layoutConfig, componentProps);

  return layoutRendererArray
    ? React.createElement(
        "div",
        { className: "layout-wrapper" },
        // headerLayout
        ...layoutRendererArray
      )
    : null;
};

export default Canvas;
