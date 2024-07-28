// Button.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component Visibility and Styles Tests', () => {
  test('renders Default Button and is visible', () => {
    render(<Button label="Default Button" />);
    const buttonElement = screen.getByText(/Default Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();
  });

  test('renders Primary Button and is visible', () => {
    render(<Button label="Primary Button" />);
    const buttonElement = screen.getByText(/Primary Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();
  });

  test('renders Disabled Button and is visible', () => {
    render(<Button label="Disabled Button" disabled />);
    const buttonElement = screen.getByText(/Disabled Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();
  });

  test('Disabled Button has correct background color when disabled', () => {
    render(<Button label="Disabled Button" disabled />);
    const buttonElement = screen.getByText(/Disabled Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();

    // Check the background color
    const styles = getComputedStyle(buttonElement);
    expect(styles.backgroundColor).toBe('gray'); // Expected disabled color
  });
});
