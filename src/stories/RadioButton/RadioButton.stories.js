// RadioButton.stories.js
import React from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
};

const Template = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Option',
  name: 'radio-group',
  checked: false,
  backgroundColor: 'transparent',
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checked Option',
  name: 'radio-group',
  checked: true,
  backgroundColor: 'transparent',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Option',
  name: 'radio-group',
  checked: false,
  backgroundColor: 'lightgray',
  disabled: true,
};
