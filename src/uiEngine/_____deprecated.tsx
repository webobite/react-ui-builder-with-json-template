import React from "react";
import Grid from "../components/styleComponents/Grid";

interface ICanvas {
  getComponent: any,
  layoutConfig : any,
  componentProps: any
}

/**
 * 1. parse the layout JSON
 * 2. Work on the algorithm to render item as per the position of the UI screen
 * 3. Map the componentProps with the layoutConfig given
 * */

const Canvas = (props: ICanvas) => {
  const {
    getComponent,
    layoutConfig,
    componentProps
  } = props

  // const init = () => {
    
  // }

  // When you want chidren to be rendered in one of your sibling
  return React.createElement(
    Grid,
    null,
    React.createElement(
      getComponent.Header,
      { title: "Header" },
      React.createElement(getComponent.Body, { title: "Body" })
    ),
    React.createElement(getComponent.Footer, { title: "Header" })
  );


  // when you want sibling react nodes
  // return React.createElement(
  //   Grid,
  //   null,
  //   React.createElement(getComponent.Header, { title: "Header" }),
  //   React.createElement(getComponent.Body, { title: "body" }),
  //   React.createElement(getComponent.Footer, { title: "Footer" })
  // );
};

export default Canvas;
