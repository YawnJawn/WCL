// Button.stories.jsx
import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  primary: false,
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  primary: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  primary: false,
  disabled: true,
};
