import React from 'react';

const Form = ({todos, inputText, setTodos, setInputText, setStatus}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(inputText === ""){
            alert("You have to type something!!");
        }else{
        setTodos([
            ...todos, {text: inputText, checked: false, id: Math.random()*1000},
        ]);
        setInputText("");
        }
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    
    return(
        <form>
            <input type="text" value={inputText} className="todo-input" onChange={inputTextHandler} />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={statusHandler}>
                    <option value="all">All</option>
                    <option value="checked">Checked</option>
                    <option value="unchecked">Unchecked</option>
                </select>
            </div>
        </form>
    );
}

export default Form;