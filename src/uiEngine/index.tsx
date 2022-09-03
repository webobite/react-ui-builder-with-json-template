import React from "react";
import {
  init,
} from "./helper";

interface ICanvas {
  getComponent: any;
  layoutConfig: any;
  componentProps: any;
}

/**
 * 1. parse template json
 *      - check component in the json is present or not
 *          - If the component is not present return null --> throw error
 *          - else
 *                check position value :
 *                      "row" : // render the component in a row
 *                      "column": // render the component in a column
 * #########################################################################################
 *  "text_v1": // render text component
 *                check type : "p" add a paragraph tag in the component with respective name of the component from in the UI
 *                check type : "h1" ... as per the type provided with respective name of the component in the UI
 *                check type : "h2" ... as per the type provided with respective name of the component in the UI
 *                check type : "hn" ... as per the type provided  with respective name of the component in the UI
 *  "image_v1": // render img component
 *         else for any other renderer value
 *            check type : custom
 *                  check name property value
 *                      search for the same 'name' property value in getComponent Object
 *                       if found
 *                            createElement of React with passing props in component with
 *                             respective name of the component in the UI
 */

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
