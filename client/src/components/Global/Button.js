import React from 'react';

const Button = ({ buttonName, buttonClassName }) => {
  return (
    <button className={buttonClassName}>
      {buttonName}
    </button>
  ) 
};

export default Button;