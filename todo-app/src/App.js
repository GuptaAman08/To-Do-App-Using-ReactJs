import React, { Component } from 'react';
import Todos from './Todos.js'
import AddItem from './AddForm'

class App extends Component{
    state = {
        todos: [
            {id: 1, content: 'buy carrot'},
            {id: 2, content: 'buy milk'}
        ]
    }

    deleteItem = (id) => {
        let todos = this.state.todos.filter(item => {
            return item.id !== id
        })

        this.setState({
            todos: todos
        })
    }

    addItem = (content) => {
        content.id = Math.random()
        let todos = [...this.state.todos, content]
        this.setState({
            todos: todos
        })
    }

    render(){
        return(
            <div className="ToDoApp container">
                <h1 className="center blue-text">Todo's</h1>
                <AddItem addItem={this.addItem}/>
                <Todos todos={this.state.todos} deleteItem={this.deleteItem}/>
            </div>
        )
    }
}


export default App;
