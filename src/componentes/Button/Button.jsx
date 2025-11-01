import React from 'react';
import './Buttom.css';

//criei o botão
const Button = ({children, onClick}) => {
  return ( 
    <button onClick= {onClick}className='button'>
      {children}
    </button>
   );
}

export default Button;