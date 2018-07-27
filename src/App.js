import React, { Component } from 'react';
import Users from './users/Users';
import Parent from './components/parentToChild/parent';
import Keyuser from './components/keyuser';
import  UniqueId  from 'react-html-id';

class App extends Component {
  constructor(props){
    super(props);
    UniqueId.enableUniqueIds(this);
    this.state = {
      childtitle: 'placeholder Title',
      keyusers:[
        {id : this.nextUniqueId(), name: "John", age: 20},
        {id : this.nextUniqueId(), name: "Jill", age: 30},
        {id : this.nextUniqueId(), name: "Phill", age: 40}
      ]
    }
    console.log(this.state);

  }
 

  changeTheWorld = (newTitle) => {
    this.setState({childtitle:newTitle});
  }

  deleteUser = (index, e) => {
      const keyusers = Object.assign([], this.state.keyusers);
      keyusers.splice(index, 1);
      this.setState({keyusers:keyusers});
  }

  changeUserName = (id, e) => {
      const index = this.state.keyusers.findIndex((keyuser) => {
      return keyuser.id === id 
    });
    const keyuser = Object.assign({}, this.state.keyusers[index]);

    keyuser.name = e.target.value;

    const keyusers = Object.assign([], this.state.keyusers);

    keyusers[index] = keyuser;
    
    this.setState({keyusers:keyusers})
  }

  render() {
    return (
      <div className= "App"> 
        <Users title= "Users List !"/>
        <Parent changeTheWorld = {this.changeTheWorld.bind(this,'Change World')} 
                keepTheWorldSame= { this.changeTheWorld.bind(this,'Same World')}
        childtitle= {this.state.childtitle} />
        <ul>{
            this.state.keyusers.map((keyuser, index) => {
              return <Keyuser 
              age={keyuser.age}
              key={keyuser.id}
              delEvent = {this.deleteUser.bind(this, index)}
              changeEvent={this.changeUserName.bind(this, keyuser.id)}>{keyuser.name}</Keyuser>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
