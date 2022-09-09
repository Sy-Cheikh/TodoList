import React from 'react';
import { useState } from 'react';
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm';


function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodo = [todo, ...todos]

        setTodos(newTodo);
        console.log(...todos);

    };

    const removeTodo = (id) =>{
        const removedValues = [...todos].filter(td => td.id !==id);
        setTodos(removedValues);
    };


    const updateTodo = (identifiant, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
        setTodos(check => check.map(item => (item.id === identifiant ? newValue : item)));
    };



    const complete = (id) =>{
        let updateTodos = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updateTodos);
    };


    
    return (
        <div className='todolist-container'>
            <h1>What's the plan ?</h1>
            <TodoForm onSubmit ={addTodo}/>
            <Todo 
                    todos={todos}
                    complete={complete}
                    removeTodo ={ removeTodo}
                    updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList;