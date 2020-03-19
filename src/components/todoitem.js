import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

class TodoItem extends React.Component{
render(){
    console.log(this.props);
    return(
        <li className="app-to-do-item" key={this.props.item.id}>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="app-to-do-checkbox"
                        checked={this.props.item.isDone}
                        onChange={() => this.props.doneTask(this.props.item)}
                      />

                      <span style={this.props.strike}> {this.props.item.value}</span>

                      <button
                        className="app-to-do-button-delete"
                        onClick={() => this.props.deleteItem(this.props.item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </li>
    );
}
}

export default  TodoItem;
