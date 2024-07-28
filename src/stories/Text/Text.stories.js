// Text.stories.js
import React from 'react';
import Text from './Text';

const textStories = { 
  title: 'Components/Text',
  component: Text,
};

export default textStories;

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Default Text',
  color: 'black',
  size: '16px',
};

export const Large = Template.bind({});
Large.args = {
  content: 'Large Text',
  color: 'black',
  size: '32px',
};

export const Colored = Template.bind({});
Colored.args = {
  content: 'Colored Text',
  color: 'blue',
  size: '16px',
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: 'Disabled Text',
  color: 'black',
  size: '16px',
  disabled: true,
};
