import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImagePlaceholder from '../components/ImagePlaceholder/ImagePlaceholder';

// import { Button } from '../components/ButtonComponent/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component/ImagePlaceholder',
  component: ImagePlaceholder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ImagePlaceholder>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImagePlaceholder> = (args) => <ImagePlaceholder {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  source: 'https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0',
  alt: 'dog',
  label: 'Pet Dog',
  labelPosition: "center"
};


