import React from "react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Grid from "../components/styleComponents/Grid";

interface ICanvas {
  getComponent: any;
  layoutConfig: any;
  componentProps: any;
}

const Canvas = (props: ICanvas) => {
  const { getComponent, layoutConfig, componentProps } = props;
  return React.createElement(
    "div",
    null,
    React.createElement(Header, { title: "Header" }),
    React.createElement(
      Body,
      { title: "Body" },
      React.createElement(Header, { title: "Header" }),
    ),
    React.createElement(Footer, { title: "footer" })
  );
};

export default Canvas;
