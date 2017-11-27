import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList';
import Toolbar from './Toolbar';
import ComposeMsg from './ComposeMsg'
import axios from 'axios';



class App extends Component {

  state = {
    messages : [],
    show: false
  }

  async componentDidMount() {
    let messages = await axios.get(`http://localhost:8000/messages`)
    this.setState({ messages: messages.data })
  }


  showComposeBox = () => {
    console.log('show compose box', this.show);
    let show = this.state.show;
    this.setState({show: !show})
  }

  addMessage = async (message) => {
    let newMessage = {
    ...message,
    labels: JSON.stringify([]),
    read: false,
    selected: false,
    starred: false
  }
  let newMessages = await axios.post(`http://localhost:8000/messages`, newMessage)
  this.setState({ messages: newMessages.data })
  }


  toggleSelected = (message) => {
    console.log('message is', message);
    this.setState((prevState)=>{
      let index = prevState.messages.indexOf(message)
      prevState.messages[index].selected = !prevState.messages[index].selected;
      return {...message}
    })
  }

  toggleStar = (message) => {
    this.setState((prevState)=>{
      let index = prevState.messages.indexOf(message)
      prevState.messages[index].starred = !prevState.messages[index].starred;
      return {...message}
    })
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
     //console.log('select all----',icon);
  }

  markAsRead = () =>{
    let unreadMsg = this.state.messages.map(message =>{
      if(message.selected === true){
        message.read = true
      }
      return message
    })
    this.setState({messages: unreadMsg})
  }

  markAsUnead = () =>{
    let unreadMsg = this.state.messages.map(message =>{
      if(message.selected === true){
        message.read = false
      }
      return message
    })
    this.setState({messages: unreadMsg})
  }

  deleteMsg = () =>{
    let newState =this.state.messages.filter((message) => !message.selected)

    this.setState({messages: newState});
  }

  addLabel = (label) =>{
    let newState = this.state.messages.map(msg =>{
      if(msg.selected && !msg.labels.includes(label)) msg.labels.push(label)
      return msg
    })
    this.setState({messages: newState})
  }

  removeLabel = (label) =>{
    let newState = this.state.messages.map(msg =>{
      if(msg.selected) msg.labels = msg.labels.filter(l => l !== label)
      return msg
    })
    this.setState({messages: newState})
  }



  render() {
   console.log('current state',this);
    return (
    <div className="container">
      <div className="App" >
        <Toolbar
          messages = {this.state.messages}
          selectAll = {this.selectStatus}
          markAsRead = {this.markAsRead}
          markAsUnead = {this.markAsUnead}
          deleteMsg = {this.deleteMsg}
          addLabel= {this.addLabel}
          removeLabel= {this.removeLabel}
          showComposeBox= {this.showComposeBox}
          />
        { this.state.show ? <ComposeMsg addMessage={this.addMessage}/>: null}
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
