// Image.stories.js
import React from 'react';
import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image,
};

const Template = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Default Image',
  width: '150px',
  height: '150px',
  borderWidth: '1px',
  borderColor: '#ccc',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Disabled Image',
  width: '150px',
  height: '150px',
  borderWidth: '1px',
  borderColor: '#ccc',
  disabled: true,
};
