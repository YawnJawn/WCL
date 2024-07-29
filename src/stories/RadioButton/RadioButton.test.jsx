// RadioButton.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

describe('RadioButton Component Tests', () => {
  test('RadioButton is visible and displays the correct label', () => {
    render(
      <RadioButton
        label="Primary Radio Button"
        disabled={false}
      />
    );

    // Check that the RadioButton is visible and displays the correct label text
    const radioButtonElement = screen.getByText(/Primary Radio Button/i);
    expect(radioButtonElement).toBeInTheDocument();
    expect(radioButtonElement).toBeVisible();
  });

  test('Disabled RadioButton background color is gray', () => {
    render(
      <RadioButton
        label="Disabled Radio Button"
        disabled={true}
      />
    );

    // Check that the Disabled RadioButton is visible and displays the correct label text
    const radioButtonElement = screen.getByText(/Disabled Radio Button/i);
    expect(radioButtonElement).toBeInTheDocument();
    expect(radioButtonElement).toBeVisible();

    // Check the background color of the RadioButton
    const styles = getComputedStyle(radioButtonElement);
    expect(styles.backgroundColor).toBe('gray');
  });
});
