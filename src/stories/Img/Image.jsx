// Image.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Image.css';

const Image = ({
  src,
  alt,
  width,
  height,
  disabled,
  borderWidth,
  borderColor,
}) => {
  const placeholder = 'https://via.placeholder.com/150'; // Placeholder image URL

  const containerStyle = {
    width,
    height,
    borderWidth,
    borderColor,
    borderStyle: 'solid',
  };

  return (
    <div
      className={`image-container ${disabled ? 'disabled' : ''}`}
      style={containerStyle}
    >
      <img
        src={disabled ? placeholder : src}
        alt={alt}
        className="image"
        style={{ width, height }}
        aria-disabled={disabled}
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  disabled: PropTypes.bool,
  borderWidth: PropTypes.string,
  borderColor: PropTypes.string,
};

Image.defaultProps = {
  width: '150px',
  height: '150px',
  disabled: false,
  borderWidth: '1px',
  borderColor: '#ccc',
};

export default Image;
