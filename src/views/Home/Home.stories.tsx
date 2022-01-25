import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Home from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Views/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Home> = () => <Home />;

export const Primary = Template.bind({});
