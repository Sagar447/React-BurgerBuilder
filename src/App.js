import React, { Component } from 'react';
import './App.css';
import './Person/Person.js';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons : [
      {id :'df',name : 'Rob' ,age : 26},
      {id :'dk' ,name : 'Manu',age : 27},
      {id :'dgdf',name : 'Stephanie', age: 25}
    ],    
    otherstate : 'this is other state',
    showPerson : false
  }

  deletePersonHandler = (personIndex) =>{     
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});  }

  nameChangeHandler= (event, id) =>{
    const personIndex = this.state.persons.findIndex((p) =>{
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons]  ; 
    persons[personIndex] = person;

    this.setState({persons:persons}); 
  } 

  togglePersonHandler=() => {
    const doesShow = this.state.showPerson;
     this.setState({showPerson: !doesShow});
  }
  render() {
      const style={
      border:'1px solid red',  
      backgroundColor:'Red',
      padding:'16px',
      font:'inherit'
    }
  
    let persons =null;

    if(this.state.showPerson){
      persons = (
        <div>
        {
          this.state.persons.map((person, index) =>{
           return <Person 
           click = {() => this.deletePersonHandler(index)}
           name = {person.name} 
           age ={person.age}
           key ={person.id}
           changed ={(event) => {this.nameChangeHandler(event, person.id)}}/>
          })
        }
        </div>
      )
    }
    return (
      <div className= "App">
        <h1>Welcome to React</h1>
        <button
          style = {style} 
          onClick = {this.togglePersonHandler}>Toggle Button</button>
          {persons}
      </div>
    );
  }
}

export default App;
