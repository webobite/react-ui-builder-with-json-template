import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { Button } from './Button';
// import ProgressBar from '../components/ProgressBar/ProgressBar';
import Title from '../components/TitleComponent/Title';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/Title',
  component: Title,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Title>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium placeat iste? Ipsam vel, eos aperiam cum placeat ducimus suscipit harum, accusantium eius ullam voluptatum explicabo ut blanditiis alias. Excepturi!"
};

