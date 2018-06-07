import React, { Component } from "react";
import TodoItems from "./TodoItems.js";
import "./TodoList.css";

class TodoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.deleteAllItems = this.deleteAllItems.bind(this);
    }

    addItem(e) {
        if(this._inputElement.value !== "" && this._inputElement.value.length < 20){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
        }

        this._inputElement.value="";
        e.preventDefault();
    }

    deleteAllItems() {
        this.setState({
            items: []
        });
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter(function(item){
            return (item.key !== key)
        });

        this.setState({
            items: filteredItems
        });
    }

    render() {
        return(
        <div id="allofit">
            <div className="todoListMain">
                <h1>TODO by NB</h1>
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="      Enter task">
                        </input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} delete={this.deleteItem}/>
                <button onClick={() => this.deleteAllItems()} id="delete" type="submit">Remove all</button>
            </div>
        </div>
        );
    }
}

export default TodoList;