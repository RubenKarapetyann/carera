import styles from '../View.module.css'
import React from 'react';
import { Link } from "react-router-dom"

const Card = ({ children, id }) => {
  return (
    <div className={styles['card-container']}>
      <Link style={{textDecoration : "none"}} to={"/car/"+id}>
        {children}
      </Link>
    </div>
  );
};

export default Card;