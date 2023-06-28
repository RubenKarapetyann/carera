import React from 'react';
import styles from '../Welcome.module.css';

const PageLogo = () => {
  return <h1 className={styles["welcome-container-logo"]}>Car<span className={styles["welcome-container-logo-span"]}>era</span></h1>;
};

export default PageLogo;