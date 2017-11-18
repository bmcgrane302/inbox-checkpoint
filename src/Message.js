import React, {Component} from 'react';


class Message  extends Component {

render(){

  console.log('Messages props:',this.props);

 let readUnread = this.props.msgStatus ? "read" : "unread";
 let selectedMsg = this.props.msgSelected ? "selected" :  '';

  return (
    <div className={`row message ${readUnread} ${selectedMsg}`}>
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox"
          checked={this.props.msgSelected}
          onChange={()=> this.props.toggleSelected(this.props.message)}
             />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <a href="">
       {this.props.msgSubject}
    </a>
  </div>
</div>


  );
}
}

export default Message;
