import React from "react";
import { GET_ALL_COMPONENTS } from "../../utils/componentConfigs";
import { IComponent, IComponentProps, ILayout } from "../../utils/Models";

/**
 * Check length of object return its keys of content in array
 * @param data
 * @returns string[] | []
 */
export const check_length_of_object_return_its_keys_of_content_in_array = (
  data: any
) => {
  if (data) {
    let contentOfObject = Object.keys(data);
    return contentOfObject;
  } else {
    return [];
  }
};

/**
 * Render ui element
 * @param componentProps
 * @param component
 * @returns
 */
export const render_ui_element = (
  componentProps: IComponentProps,
  component: IComponent
) => {
  if (component && componentProps && GET_ALL_COMPONENTS) {
    let uiElement;
    // find component to be rendered
    // @ts-ignore
    let componentToRender = GET_ALL_COMPONENTS[`${component.name}`];
    uiElement = React.createElement(componentToRender, {
      ...componentProps.properties,
    });
    return uiElement;

    // switch (component.type) {
    //   case "custom":

    //   // break;

    //   default:
    //     return null;
    //   // break;
    // }
  }
};

/**
 * Initialize the UI render engine
 * @param componentProps
 * @param layoutConfig
 * @param data
 * @returns
 */
export const init = (componentLists: any, layoutConfig: any, data: any) => {
  // check component in the json is present or not
  const componentIndexName: string[] =
    check_length_of_object_return_its_keys_of_content_in_array(componentLists);
  const sectionNames: string[] =
    check_length_of_object_return_its_keys_of_content_in_array(layoutConfig);

  if (componentIndexName && sectionNames) {
    // if component is present --> render UI
    let sectionWiseUIArray = sectionNames.map((sectionName: string) => {
      let layoutJson = layoutConfig[`${sectionName}`].layout;
      return render_with_layout_json(layoutJson, data, `${sectionName}-wrap`);
    });
    return sectionWiseUIArray;
  } else {
    // If the component is not present return null --> throw error
    return null;
  }
};

/**
 * Render header with layout json
 * @param headerLayoutJson
 * @param propsData
 * @returns
 */
export const render_header_with_layout_json = (
  headerLayoutJson: ILayout,
  propsData: any[]
) => {
  let componentUIArray = layout_to_ui_element_array(
    headerLayoutJson,
    propsData
  );
  return React.createElement(
    "div",
    { className: "header-wrap" },
    ...componentUIArray
  );
};

/**
 * Render with layout json
 * @param bodyLayoutJson
 * @param propsData
 * @param parentClassName
 * @returns
 */
export const render_with_layout_json = (
  bodyLayoutJson: ILayout,
  propsData: any[],
  parentClassName: string | ""
) => {
  let componentUIArray = layout_to_ui_element_array(bodyLayoutJson, propsData);
  return React.createElement(
    "div",
    { className: `${parentClassName}` },
    ...componentUIArray
  );
};

/**
 * Convert layout to ui element array
 * @param sectionLayoutJson
 * @param propsData
 * @returns
 */
const layout_to_ui_element_array = (
  sectionLayoutJson: any,
  propsData: any[]
) => {
  return sectionLayoutJson.components.map((component: IComponent) => {
    let props = propsData.find((data) => data.name === component.name);
    if (props) {
      return render_ui_element(props, component);
    }
  });
};
