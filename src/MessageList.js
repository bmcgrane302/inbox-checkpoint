import React, {Component} from 'react';
import Message from './Message';


class MessageList extends Component {



render(){
    console.log('MessageList component', this);

let messageList = this.props.messages.map((msg) =>
    <Message key={msg.id} msgSubject={msg.subject}

    msgStatus = {msg.read}
    msgSelected ={msg.selected}
    toggleSelected = {this.props.toggleSelected}
    message={msg}
    />)

  return (

    <div>
         {messageList}
    </div>


  );
}
}

export default MessageList;
