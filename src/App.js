import React, {useState, useEffect} from 'react';
import "./App.css";
import Form from "./components/Form.js";
import TodoList from "./components/TodoList.js";

const App = () => {
    // States
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);
    
    // Run only once when the app starts
    useEffect(() => {
        getLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    //USE EFFECT
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todos, status]);
    
    // Functions and Events
    
    // To filter the todos
    const filterHandler = () => {
        switch(status){
            case 'checked':
                setFilteredTodos(todos.filter(todo => todo.checked === true ));
                break;
            case 'unchecked':
                setFilteredTodos(todos.filter(todo => todo.checked === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }
    
    // Save Todos to Local Storage
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    
    const getLocalTodos = () => {
        if(localStorage.getItem("todos" === null)){
            localStorage.setItem("todos", JSON.stringify([]));
        }else{
            let localTodo = JSON.parse(localStorage.getItem("todos"));
            setTodos(localTodo);
        }
    }
    
    return(
        <div className="App">
            <header>
                <h1>Puja's Todo List</h1>
            </header>
            <Form 
                setInputText={setInputText} todos={todos} inputText={inputText} 
                setTodos={setTodos} setStatus={setStatus}
                
            />
            <TodoList todos={todos} setTodos={setTodos}
            filteredTodos={filteredTodos} />
        </div>
    );
}

export default App;