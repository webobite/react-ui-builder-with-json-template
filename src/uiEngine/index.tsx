import React from "react";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Grid from "../components/styleComponents/Grid";
import { GET_ALL_COMPONENTS } from "../utils/componentConfigs";

interface ICanvas {
  getComponent: any,
  layoutConfig : any
}

/**
 * 1. parse the layout JSON
 * 2. Work on the algorithm to render item as per the position of the UI screen
 *
 * TODO: Fix the css className bug in the UI
 */

const Canvas = (props: ICanvas) => {
  const {
    getComponent,
    layoutConfig
  } = props

  // When you want chidren to be rendered in one of your sibling
  // return React.createElement(
  //   Grid,
  //   null,
  //   React.createElement(
  //     getComponent.Header,
  //     { title: "Header" },
  //     React.createElement(getComponent.Body, { title: "Body" })
  //   ),
  //   React.createElement(getComponent.Footer, { title: "Header" })
  // );


  // when you want sibling react nodes
  return React.createElement(
    Grid,
    null,
    React.createElement(getComponent.Header, { title: "Header" }),
    React.createElement(getComponent.Body, { title: "body" }),
    React.createElement(getComponent.Footer, { title: "Footer" })
  );
};

export default Canvas;
