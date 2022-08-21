import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { Button } from './Button';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import MultipleChoice from '../components/MultipleChoiceComponent/MultipleChoice';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/MultipleChoice',
  component: MultipleChoice,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof MultipleChoice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MultipleChoice> = (args) => <MultipleChoice {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  options: [
    { label: "Option A", value: "A" },
    { label: "Option B", value: "B" },
    { label: "Option C", value: "C" },
    { label: "Option D", value: "D" },
  ],
  type: 'radio'
};

