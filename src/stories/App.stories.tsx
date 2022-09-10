import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import App from '../App';

export default {
  title: 'UIEngine/App',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App />;

export const Variation1 = Template.bind({});


