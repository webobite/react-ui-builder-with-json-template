import Box from "@mui/material/Box";
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
    let componentToRender = GET_ALL_COMPONENTS[`${component.renderer}`];
    uiElement = React.createElement(componentToRender, {
      ...componentProps.properties,
    });
    return uiElement;
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
    check_length_of_object_return_its_keys_of_content_in_array(layoutConfig.layout);    

  if (componentIndexName && sectionNames) {
    // if component is present --> render UI
    let sectionWiseUIArray = sectionNames.map((sectionName: string) => {
      let layoutJson = layoutConfig.layout[`${sectionName}`].layout;
      return render_with_layout_json(layoutJson, data, `${sectionName}-wrap`);
    });
    return sectionWiseUIArray;
  } else {
    // If the component is not present return null --> throw error
    return null;
  }
};

/**
 * Render with layout json
 * @param bodyLayoutJson
 * @param propsData
 * @param parentClassName
 * @returns
 */
export const render_with_layout_json = (
  layoutJson: ILayout,
  propsData: any[],
  parentClassName?: string | ""
) => {
  let direction = "";
  if (layoutJson) {
    switch (layoutJson.renderer) {
      case 'horizontal_v1':
        direction = `row`;
        break;
      case 'vertical_v1':
        direction = `column`;
        break;
      default:
        direction = `row`;
    }
  }
  let componentUIArray = layout_to_ui_element_array(layoutJson, propsData);
  // TODO: When tried using Box from Material UI, it is was not rendering properly on the UI
  return React.createElement(
    Box,
    {
      sx: {
        display: 'flex',
        flexDirection: direction,
        p: 1,
        m: 1,
      }
    },
    ...componentUIArray
  )
  // return React.createElement(
  //   "div",
  //   {
  //     style: {display: "flex", flexDirection: direction},
  //     className: parentClassName
  //   },
  //   ...componentUIArray
  // )
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
    let props = propsData.find((data) => data.renderer === component.renderer);
    if (props) {
      return render_ui_element(props, component);
    }
  });
};

export const layoutFinderByTemplateIdentifier = (layoutConfigs: any[], templateIdentifier: string) => {
  return layoutConfigs.filter(layout => layout.templateIdentifier === templateIdentifier)[0]
}
