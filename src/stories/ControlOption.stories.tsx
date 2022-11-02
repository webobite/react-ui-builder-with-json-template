import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ControlOption from '../components/ControlOption/ControlOption';

// import { Button } from '../components/ButtonComponent/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/ControlOption',
  component: ControlOption,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ControlOption>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ControlOption> = (args) => <ControlOption {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  buttonDetails: [
    {
      label: "Skip",
      onClick: () => console.log("value of Skip "),
      color: "secondary",
      variant: "contained",
      size: "small",
    },
    {
      label: "Next",
      onClick: () => console.log("value of Next "),
      color: "primary",
      variant: "outlined",
      size: "small"
    }
  ]
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
