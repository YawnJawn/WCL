// Label.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Label.css';

const Label = ({ text, color, size, disabled }) => {
  const styles = {
    color: disabled ? 'gray' : color,
    fontSize: size,
    cursor: disabled ? 'not-allowed' : 'default',
    pointerEvents: disabled ? 'none' : 'auto', // Prevents clicks if disabled
    opacity: disabled ? 0.5 : 1,
  };

  return <span style={styles}>{text}</span>;
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
};

Label.defaultProps = {
  color: 'black',
  size: '16px',
  disabled: false,
};

export default Label;
