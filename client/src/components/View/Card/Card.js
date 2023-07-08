import React from 'react';
import { Link } from "react-router-dom"

const Card = ({ children, id }) => {
  return (
    <Link style={{textDecoration : "none"}} to={"/car/"+id}>
      {children}
    </Link>
  );
};

export default Card;