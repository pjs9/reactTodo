import React from 'react';

const Todo = ({text, todos, setTodos, todo}) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }
    const checkHandler = () => {
        setTodos(todos.map(item => {
           if(item.id === todo.id){
               return {
                   ...item, checked: !item.checked
               }
           }
           return item;
        }))
    }
    
    return(
        <div className="todo">
            <li className={`todo-item ${todo.checked ? "checked" : ""}`}>{text}</li>
            <button onClick={checkHandler} className="check-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
            
        </div>
    );
}

export default Todo;