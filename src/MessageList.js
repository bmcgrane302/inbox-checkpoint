import React, {Component} from 'react';
import MessageListSubject from './MessageListSubject';


class MessageList extends Component {



render(){
    console.log('MessageList component', this);

let messageList = this.props.messages.map((msg) =>
    <MessageListSubject key={msg.id} msgSubject={msg.subject}/>)

  return (

    <div>
         {messageList}
    </div>


  );
}
}

export default MessageList;
