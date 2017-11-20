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
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{status.length}</span>
          unread messages
        </p>

        <a className="btn btn-danger">
          <i className="fa fa-plus"></i>
        </a>

        <button className="btn btn-default" onClick={()=> this.props.selectAll(selectedIcon)}>
          <i className={`fa ${selectedIcon}`}></i>
        </button>

        <button className="btn btn-default"
          onClick={()=> this.props.markAsRead()}
          >Mark As Read</button>

        <button className="btn btn-default"
          onClick={()=> this.props.markAsUnead()}
          >Mark As Unread</button>

        <select className="form-control label-select" onChange={(e)=> this.props.addLabel(e.target.value)}>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" onChange={(e)=> this.props.removeLabel(e.target.value)} >
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default"
           onClick={()=>this.props.deleteMsg()}
          >
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
</div>


  );
}
}

export default Toolbar;
