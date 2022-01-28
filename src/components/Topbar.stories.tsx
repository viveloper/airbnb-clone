import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Topbar from './Topbar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Views/Topbar',
  component: Topbar,
} as ComponentMeta<typeof Topbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Topbar> = () => <Topbar />;

export const Primary = Template.bind({});
