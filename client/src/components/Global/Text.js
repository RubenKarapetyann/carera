import React from 'react';

const Text = ({ children, textClassName }) => {
  return (
    <p className={textClassName}>{children}</p>
  )
};

export default Text;
