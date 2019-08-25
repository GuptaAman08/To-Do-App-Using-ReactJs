import React from 'react'

const Todos = ({ todos, deleteItem }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id} onClick={() => {deleteItem(todo.id)}}>
                    <span>{ todo.content }</span>
                </div>
            )
        })
    ) : (
        <p className="center">No more Todos left ......</p>
    )

    return(
        <div className="todos collection">
            { todoList }
        </div>
    )
}
export default Todos