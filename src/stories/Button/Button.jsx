// Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'; // Optional CSS for styling

const Button = ({ label, onClick, primary, disabled }) => {
  const className = primary ? 'button button--primary' : 'button';

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: () => {},
  primary: false,
  disabled: false,
};

export default Button;
