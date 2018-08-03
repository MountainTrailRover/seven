import React, { Component } from "react";
import TodoItems from "./TodoItems";
<<<<<<< HEAD
import "./TodoList.css";
=======
>>>>>>> d48918894a6fc94563e3d9c0e5ccc2d9d528ee5c

class TodoList extends Component {
  constructor(props) {
     super(props);

     this.state = {
       items: []
     };

     this.addItem = this.addItem.bind(this);
   }

   addItem(e) {
     if (this._inputElement.value !== "") {
         var newItem = {
           text: this._inputElement.value,
           key: Date.now()
         };

         this.setState((prevState) => {
           return {
             items: prevState.items.concat(newItem)
           };
         });

         this._inputElement.value = "";
       }

       console.log(this.state.items);

       e.preventDefault();
     }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
            placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}/>
      </div>
    );
  }
}


export default TodoList;
