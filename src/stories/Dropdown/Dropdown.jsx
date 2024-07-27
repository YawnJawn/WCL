// Dropdown.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

const Dropdown = ({
  options,
  onChange,
  disabled,
  placeholder,
  backgroundColor,
}) => {
  const styles = {
    backgroundColor,
  };

  return (
    <select
      onChange={onChange}
      disabled={disabled}
      className="dropdown"
      defaultValue=""
      style={styles}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  backgroundColor: PropTypes.string,
};

Dropdown.defaultProps = {
  onChange: () => {},
  disabled: false,
  placeholder: 'Select an option...',
  backgroundColor: 'white',
};

export default Dropdown;
