import React, { Component } from 'react';
import './App.css';
import './Person/Person.js';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons : [
      {name : 'Rob' ,age : 26},
      {name : 'Manu',age : 27},
      {name : 'Stephanie', age: 25}
    ],    
    otherstate : 'this is other state',
    showPerson : false
  }

  switchNameHandler = (newName) =>{
    // console.log("watch this!");
    this.setState({
      persons: [
        {name : newName ,age : 26},
        {name : 'Manu',age : 27},
        {name : 'StephanKing', age: 35}
      ]
    });
  }

  nameChangeHandler= (event) =>{
    this.setState({
      persons:[
        {name : 'Rob' ,age : 26},
        {name : event.target.value , age : 27},
        {name : 'StephanKing', age: 25}
      ]
    }); 
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
      persons =
      (
        <div>
            <Person 
              name ={this.state.persons[0].name} 
              age ={this.state.persons[0].age}/>
            <Person
              name ={this.state.persons[1].name} 
              age ={this.state.persons[1].age}
              click = {this.switchNameHandler.bind(this, 'romi')}
              changed = {this.nameChangeHandler}
              > his Hobbies: Racing</Person>           
            <Person 
              name ={this.state.persons[2].name} 
              age ={this.state.persons[2].age}/>
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
