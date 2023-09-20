import React from "react";

export const buttonTypes = {
  DELETE_BUTTON: {
    backgroundColor:'red'
  },
};

const Button = ({ title, onClick,color }) => {
  return (
    <button style={{
      
      padding:16,
      margin:5,
   
      border:'none',
    borderRadius:'15px',
      backgroundColor: color}} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
