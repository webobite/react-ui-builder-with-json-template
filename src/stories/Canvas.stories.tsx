import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { Button } from './Button';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import { componentProps, uiJson } from '../utils';
import { GET_ALL_COMPONENTS } from '../utils/componentConfigs';
import Canvas from '../uiEngine';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UIEngine/Canvas',
  component: Canvas,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof Canvas>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Canvas> = (args) => <Canvas {...args} />;

export const Variation1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Variation1.args = {
  componentProps: componentProps,
  getComponent: GET_ALL_COMPONENTS,
  layoutConfig: uiJson
};

