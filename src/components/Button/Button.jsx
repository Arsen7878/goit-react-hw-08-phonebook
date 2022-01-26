import React from 'react';
import c from './Button.module.css';

const Button = ({ title, type, onClick }) => {
  return (
    <button type={type} onClick={onClick} className={c.button}>
      {title}
    </button>
  );
};

export default Button;
