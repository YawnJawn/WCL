// Label.stories.js
import React from 'react';
import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default Label',
  color: 'black',
  size: '16px',
};

export const Large = Template.bind({});
Large.args = {
  text: 'Large Label',
  color: 'black',
  size: '32px',
};

export const Colored = Template.bind({});
Colored.args = {
  text: 'Colored Label',
  color: 'blue',
  size: '16px',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Label',
  color: 'black',
  size: '16px',
  disabled: true,
};
