import React from 'react';

let person = (props) => {
  return(
    <div>
      <p1>I'm {props.name} am {props.age} years old</p1>
      <p>{props.children}</p> 
    </div>   
  )
};

export default person;