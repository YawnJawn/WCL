// RadioButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css';

const RadioButton = ({ label, name, checked, onChange, disabled, backgroundColor }) => {
  const styles = {
    backgroundColor,
  };

  return (
    <label className="radio-button" style={styles}>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="radio-label">{label}</span>
    </label>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

RadioButton.defaultProps = {
  checked: false,
  onChange: () => {},
  disabled: false,
  backgroundColor: 'transparent',
};

export default RadioButton;
