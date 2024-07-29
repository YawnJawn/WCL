// RadioButton.stories.js
import React from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
};

const Template = (args) => <RadioButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Radio Button',
  backgroundColor: 'lightblue',
  primary: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Radio Button',
  backgroundColor: 'gray',
  primary: false,
  disabled: true,
};
