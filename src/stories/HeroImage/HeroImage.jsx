// HeroImage.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './HeroImage.css';

const HeroImage = ({
  imageSrc,
  title,
  subtitle,
  buttonText,
  backgroundColor,
  disabled,
  onButtonClick,
}) => {
  return (
    <div
      className={`hero-image-container ${disabled ? 'disabled' : ''}`}
      style={{ backgroundImage: `url(${imageSrc})`, backgroundColor }}
    >
      <div className="hero-content">
        {title && <h1 className="hero-title">{title}</h1>}
        {subtitle && <h2 className="hero-subtitle">{subtitle}</h2>}
        {buttonText && !disabled && (
          <button className="hero-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

HeroImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonText: PropTypes.string,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  onButtonClick: PropTypes.func,
};

HeroImage.defaultProps = {
  title: '',
  subtitle: '',
  buttonText: '',
  backgroundColor: 'transparent',
  disabled: false,
  onButtonClick: () => {},
};

export default HeroImage;
