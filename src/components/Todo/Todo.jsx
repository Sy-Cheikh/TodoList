import React from 'react';
import {AiFillCloseSquare} from 'react-icons/ai';
import { useState } from 'react';
import {TiEdit} from 'react-icons/ti';
import TodoForm from '../TodoForm/TodoForm';



function Todo( {todos, complete, removeTodo,updateTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id:null,
      value:''
    });
  }

  if(edit.id){
    return <TodoForm edit ={edit} onSubmit={submitUpdate}/>;
  }

  return todos.map((todo,index) => (
    <div 
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
    >  
            <div key={todo.id} onClick={() =>complete(todo.id)}>
              {todo.text}
            </div>
            <div className="icons">
              <AiFillCloseSquare 
                    className='delete-todo'
                    onClick={() =>removeTodo(todo.id)}
              />
              <TiEdit
                  className='edit-icon'
                  onClick={()=> 
                      setEdit({
                        id: todo.id, 
                        value: todo.text
                  })} 
              />
            </div>

    </div>
  ));
};

export default Todo;