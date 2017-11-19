import React, {Component} from 'react';


class Toolbar extends Component {

render(){

  let status = this.props.messages.filter(message =>{
    return message.read === false;

  });

  console.log('read status count',status);


  let currentSelected = this.props.messages.filter(msg =>{
    return msg.selected
  });
  console.log("current", currentSelected);


  let selectedIcon = (currentSelected.length > 0 &&
    currentSelected.length < this.props.messages.length) ?
      "fa-minus-square-o" :
        currentSelected.length === 0 ?
         "fa-square-o" :
         "fa-check-square-o";


  return (
    <div class="row toolbar">
      <div class="col-md-12">
        <p class="pull-right">
          <span class="badge badge">{status.length}</span>
          unread messages
        </p>

        <a class="btn btn-danger">
          <i class="fa fa-plus"></i>
        </a>

        <button class="btn btn-default" onClick={()=> this.props.selectAll(selectedIcon)}>
          <i class={`fa ${selectedIcon}`}></i>
        </button>

        <button class="btn btn-default"
          onClick={()=> this.props.markAsRead()}
          >Mark As Read</button>

        <button class="btn btn-default"
          onClick={()=> this.props.markAsUnead()}
          >Mark As Unread</button>

        <select class="form-control label-select">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select class="form-control label-select">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button class="btn btn-default">
          <i class="fa fa-trash-o"></i>
        </button>
      </div>
</div>


  );
}
}

export default Toolbar;
