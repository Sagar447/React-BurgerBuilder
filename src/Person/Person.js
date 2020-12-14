import React from 'react';

let person = (props) => {
  return(
    <div>
      <p>I'm {props.name} am {props.age} years old</p>
      <p>{props.children}</p> 
    </div>   
  )
};

export default person;