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

  // return layoutConvertedUI;

  // return React.createElement(
  //   "div",
  //   { className: "layout-wrapper" },
  //   React.createElement(
  //     "div",
  //     { className: "header-wrap" },
  //     React.createElement(ProgressBar, {
  //       value: 20,
  //       variant: "determinate",
  //       color: "primary",
  //     })
  //   ),
  //   React.createElement(
  //     "div",
  //     { className: "body-wrap" },
  //     React.createElement(Title, { content: "The first problem title" }),
  //     React.createElement(MultipleChoice, {
  //       options: [
  //         {
  //           label: "Option A",
  //           value: "A",
  //         },
  //         {
  //           label: "Option B",
  //           value: "B",
  //         },
  //         {
  //           label: "Option C",
  //           value: "C",
  //         },
  //         {
  //           label: "Option D",
  //           value: "D",
  //         },
  //       ],
  //       type: "checkbox",
  //     })
  //   ),
  //   React.createElement(
  //     "div",
  //     { className: "footer-wrap" },
  //     React.createElement(
  //       Button,
  //       { className: "layout-btn skip-btn", color: "secondary" },
  //       "Skip"
  //     ),
  //     React.createElement(
  //       Button,
  //       { className: "layout-btn next-btn", color: "primary" },
  //       "Next"
  //     )
  //   )
  // );

  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement(Header, { title: "Header" }),
  //   React.createElement(
  //     Body,
  //     { title: "Body" },
  //     React.createElement(Header, { title: "Header" }),
  //   ),
  //   React.createElement(Footer, { title: "footer" })
  // );
};

export default Canvas;
