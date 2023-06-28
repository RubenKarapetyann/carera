import React from 'react';

const WelcomeImage = ({ imageClassName, src, alt }) => {
  return <img className={imageClassName} src={src} alt={alt} />;
};

export default WelcomeImage;
