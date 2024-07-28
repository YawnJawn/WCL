// Table.stories.js
import React from 'react';
import Table from './Table';

const tableStories = { 
  title: 'Components/Table',
  component: Table,
};

export default tableStories;

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: ['Name', 'Age', 'City'],
  rows: [
    ['John Doe', '30', 'New York'],
    ['Jane Smith', '25', 'San Francisco'],
    ['Mike Johnson', '40', 'Chicago'],
  ],
  footer: 'Footer Information',
};

export const Disabled = Template.bind({});
Disabled.args = {
  headers: ['Name', 'Age', 'City'],
  rows: [
    ['John Doe', '30', 'New York'],
    ['Jane Smith', '25', 'San Francisco'],
    ['Mike Johnson', '40', 'Chicago'],
  ],
  footer: 'Disabled Footer',
  disabled: true,
};
