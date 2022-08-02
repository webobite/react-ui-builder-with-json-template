import React from "react";
import Grid from "../components/styleComponents/Grid";
import { GET_ALL_COMPONENTS } from "../utils/componentConfigs";

interface ICanvas {}

/**
 * 1. parse the layout JSON
 * 2. Work on the algorithm to render item as per the position of the UI screen
 * 
 * TODO: Fix the css className bug in the UI
 */

const Canvas = (props: ICanvas) => {
  let children = [<h1>SUBHAM</h1>, <h3>Singh</h3>];
  return React.createElement(Grid, { children: children });
};

export default Canvas;
