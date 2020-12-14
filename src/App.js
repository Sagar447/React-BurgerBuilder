import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const app = (props) =>{
  const[personsState, setPersonsState] = useState({
      persons : [
        {name : 'Rob' ,age : 26},
        {name : 'Manu',age : 27},
        {name : 'Stephanie', age: 25}
      ]
  });

  const switchNameHandler = () =>{
    // console.log("watch this!");
    setPersonsState({
      persons: [
        {name : 'Robimus' ,age : 26},
        {name : 'Manu',age : 27},
        {name : 'Stephanie', age: 27}
      ]
    });
  }

    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <button onClick = {switchNameHandler}>Switch Button</button>
        <Person name ={personsState.persons[0].name} age ={personsState.persons[0].age}/>
        <Person name ={personsState.persons[1].name} age ={personsState.persons[1].age}> his Hobbies: Racing</Person> 
        <Person name ={personsState.persons[2].name} age ={personsState.persons[2].age}/>
      </div>
    );
  }

export default app;




