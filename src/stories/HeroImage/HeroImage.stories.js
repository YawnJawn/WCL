// HeroImage.stories.js
import React from 'react';
import HeroImage from './HeroImage';

const heroimageStories = { 
  title: 'Components/HeroImage',
  component: HeroImage,
};

export default heroimageStories;

const Template = (args) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageSrc: 'https://via.placeholder.com/1600x400',
  title: 'Welcome to Our Site',
  subtitle: 'Discover Amazing Things',
  buttonText: 'Learn More',
  backgroundColor: 'transparent',
  disabled: false,
  onButtonClick: () => alert('Button clicked!'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  imageSrc: 'https://via.placeholder.com/1600x400',
  title: 'Disabled Hero',
  subtitle: 'This hero image is disabled',
  buttonText: 'Cannot Click',
  backgroundColor: 'transparent',
  disabled: true,
  onButtonClick: () => alert('Button clicked!'),
};
