// Dropdown.stories.js
import React from 'react';
import Dropdown from './Dropdown';

const dropdownStories = { 
  title: 'Components/Dropdown',
  component: Dropdown,
};

export default dropdownStories;

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  placeholder: 'Select an option...',
  backgroundColor: 'white',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  placeholder: 'Select an option...',
  backgroundColor: 'lightgray',
  disabled: true,
};
