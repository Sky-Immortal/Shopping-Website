import React from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};

export default Button;
