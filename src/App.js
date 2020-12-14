import React, { Component } from 'react';
import './App.css';
import './Person/Person.js';
import person from './Person/Person.js';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons : [
      {name : 'Rob' ,age : 26},
      {name : 'Manu',age : 27},
      {name : 'Stephanie', age: 25}
    ]
  }

  switchNameHandler = () =>{
    // console.log("watch this!");
    this.setState({
      persons: [
        {name : 'Robimus' ,age : 26},
        {name : 'Manu',age : 27},
        {name : 'Stephanie', age: 27}
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <button onClick = {this.switchNameHandler}>Switch Button</button>
        <Person name ={this.state.persons[0].name} age ={this.state.persons[0].age}/>
        <Person name ={this.state.persons[1].name} age ={this.state.persons[1].age}> his Hobbies: Racing</Person> 
        <Person name ={this.state.persons[2].name} age ={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
