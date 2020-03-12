import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
      doneTasks: 0
    };
  }

  addItem(todovalue) {
    if (todovalue !== "") {
      const newItem = {
        id: Date.now(),
        value: todovalue,
        isDone: false,
        strike: "none"
      };
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({
        newItem: "",
        list
      });
    }
  }

  deleteItem(id) {
    const list = this.state.list;
    const updatedList = list.filter(item => item.id !== id);
    this.setState({
      list: updatedList
    });
  }

  updateInput(input) {
    this.setState({
      newItem: input
    });
  }

  doneTask(item) {
    const list = this.state.list;

    list.forEach(listItem => {
      if (listItem.id === item.id) {
        if (listItem.isDone === false) {
          listItem.isDone = true;
          listItem.strike = "line-through";
        } else {
          listItem.isDone = false;
          listItem.strike = "none";
        }
      }
    });

    const doneList = list.filter(item => item.isDone === true).length;

    this.setState({
      list,
      doneTasks: doneList
    });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app-to-do-title">To-Do List App</h1>
        <div className="app-to-do">
          <div className="app-to-do-container">
            <div className="app-to-do-input-container">
              <button
                className="app-to-do-button-add"
                onClick={() => this.addItem(this.state.newItem)}
              >
                Add
              </button>
              <span className="app-to-do-input-span">
                <input
                  type="text"
                  className="app-to-do-input"
                  placeholder="Your To-Do"
                  value={this.state.newItem}
                  onChange={e => this.updateInput(e.target.value)}
                />
              </span>
            </div>

            <div className="app-to-do-list-container">
              <ul className="app-to-do-item-list">
                {this.state.list.map(item => {
                  const strike = {
                    textDecoration: item.strike
                  };
                  return (
                    <li className="app-to-do-item" key={item.id}>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="app-to-do-checkbox"
                        checked={item.isDone}
                        onChange={() => this.doneTask(item)}
                      />

                      <span style={strike}> {item.value}</span>

                      <button
                        className="app-to-do-button-delete"
                        onClick={() => this.deleteItem(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="app-to-do-details-container">
            <p className="app-to-do-details">
              {" "}
              Number of tasks : <b> {this.state.list.length} </b>{" "}
            </p>
            <p className="app-to-do-details">
              {" "}
              Tasks Completed : <b>{this.state.doneTasks}</b>{" "}
            </p>
          </div>
        </div>
        <div className="app-to-do-footer">
          <p>
            Designed and Developed by <b>@shridharulli</b>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
