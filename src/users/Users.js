import React, { Component } from 'react';
import User from './User';

class Users extends Component{
  state={
    users:[
      {name: "John", age: 20},
      {name: "Jill", age: 30},
      {name: "Phill", age: 40},
      {name: "Sweta", age: 25},
      {name: "Vish", age: 50}
    ],
    title:"Users List",
    myName:"Sweta !"
  }

  makeMeYounger = () => {
    const newState = this.state.users.map((user) => {
      const tempUser = user;
      tempUser.age -= 5;
      if(tempUser.age<5){
        return 'invalid';
      } else {
        return tempUser.age;
      }
    });
    this.setState({
      newState
    })
  }

  changeName = (newName) => {
    this.setState({
      myName: newName
    })
  }

  changeNameFromInput = (event) => {
    this.setState({
      myName: event.target.value
    })
  }

  render(){
    return (
    <div>
      <button onClick={this.makeMeYounger}>10 Years Younger</button>
      <br />
      <h1>{this.state.title}</h1>

      {
        this.state.users.map((user) => {
          return <User age= {user.age} >{user.name}</User>
        })
      }

      <br />
      <br />
      <button onClick= {() => {this.changeName('Patell')}}> Change State- Using Anonymous Function</button>
      <button onClick= {this.changeName.bind(this,'Desai')}> Change State- Using BindFunction</button>
      <br /> <br />
     <input type="text" onChange={this.changeNameFromInput} value={this.state.myName} />
      <div> {this.state.myName}</div>
    </div>
    )
  }

}
export default Users;