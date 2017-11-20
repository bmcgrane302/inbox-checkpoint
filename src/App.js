import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList';
import Toolbar from './Toolbar';



class App extends Component {

  state = {
    messages : [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "labels": ["dev", "personal"]
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"]
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": []
  }
]
  }

  toggleSelected = (message) => {
    console.log('toggleselected',message);
    this.setState((prevState)=>{
      let index = prevState.messages.indexOf(message)
      prevState.messages[index].selected = !prevState.messages[index].selected;
      return {...message}
    })
    console.log("toggle selected____",this.state.messages);
  }

  toggleStar = (message) => {
    console.log('toggle star',message);
    this.setState((prevState)=>{
      let index = prevState.messages.indexOf(message)
      prevState.messages[index].starred = !prevState.messages[index].starred;
      return {...message}
    })
    console.log("I love react ____",this.state.messages);
  }

  unselectAll(){
    let newState =this.state.messages.map(message => {
      message.selected = false;
      return {...message}
    });
    this.setState({messages: newState});
  }

  selectAllMsg(){
    let newState =this.state.messages.map(message => {
      message.selected = true;
      return {...message}
    });
    this.setState({messages: newState});
  }

  selectStatus = (icon) => {
    if(icon === 'fa-check-square-o'){
      this.unselectAll();
    }else{
      this.selectAllMsg()
    }
     console.log('select all----',icon);
  }

  markAsRead = () =>{
    console.log('mark as read button:');
    let unreadMsg = this.state.messages.map(message =>{
      if(message.selected === true){
        message.read = true
      }
      return message
    })
    this.setState({messages: unreadMsg})
  }

  markAsUnead = () =>{
    console.log('mark as read button:');
    let unreadMsg = this.state.messages.map(message =>{
      if(message.selected === true){
        message.read = false
      }
      return message
    })
    this.setState({messages: unreadMsg})
  }

  deleteMsg = () =>{
    console.log('delete messages on toolbar');
    let newState =this.state.messages.filter((message) => !message.selected)

    this.setState({messages: newState});
  }
  //   let selectedArr = [];
  //   let selDel = this.state.messages.map(message =>{
  //     if(message.selected === true){
  //       selectedArr.push(message)
  //     }
  //
  //   })
  //   console.log('selected for deletion',selectedArr);
  // }




  render() {

    return (
    <div className="container">
      <div className="App" >
        <Toolbar
          messages = {this.state.messages}
          selectAll = {this.selectStatus}
          markAsRead = {this.markAsRead}
          markAsUnead = {this.markAsUnead}
          deleteMsg = {this.deleteMsg}
          />
        <MessageList
          messages = {this.state.messages}
          toggleSelected = {this.toggleSelected}
          toggleStar = {this.toggleStar}
          />
      </div>
    </div>
    );
  }
}

export default App;
