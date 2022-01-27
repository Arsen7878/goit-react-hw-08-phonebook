import React from 'react';
import PropTypes from 'prop-types';
import c from './Button.module.css';

const Button = ({ title, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={c.button}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
