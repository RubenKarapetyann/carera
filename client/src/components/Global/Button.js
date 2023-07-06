import React from 'react';

const Button = ({ buttonName, buttonClassName, handle, styles}) => {
  return (
    <button className={buttonClassName} onClick={handle} style={styles}>
      {buttonName}
    </button>
  ) 
};

export default Button;