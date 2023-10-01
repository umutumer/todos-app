import React, { useState } from "react";
import "../styles/Todos.scss"
import {BsFillTrashFill} from "react-icons/bs"

const Todos = () => {
  const [todos, setTodos] = useState([
    {
        id:1,
        text: "kod yaz",
        completed: false
    },
    {
        id:2,
        text: "fazla kod yaz",
        completed: false
    },
    {
        id:3,
        text: "daha fazla kod yaz",
        completed: false,
        isDeleted: false
    },
    {
        id:4,
        text: "ömür boyu kod yaz",
        completed: false,
        isDeleted: true
    }
  ]);
 const [todoInput,setTodoInput] = useState("");
 const addTodo =(e)=>{
    e.preventDefault()
    setTodos([...todos,{id:Date.now() ,text:todoInput,completed:false}])
    setTodoInput("")
 }
 const deleteTodo = (todo)=>{
  setTodos(todos.filter(tod => tod!== todo))
 }
 const todoCheck = (id) =>{
  setTodos(todos.map((todo) => todo.id === id ?{...todo,completed:!todo.completed}:todo))
 }
  return (
    <div className="todo-container">
      <h1>To Do List</h1>

      <form onSubmit={addTodo} >
      <input value={todoInput} onChange={(e)=>setTodoInput(e.target.value)}   type="text" required />
      <input type="submit"  value="Add" />
      </form>


      <hr />

      <ul style={{display:"flex",flexDirection:"column-reverse"}}>
        {todos.map((todo) => 
          todo.completed===false &&
            <li key={todo.id}>
            <input onChange={() => todoCheck(todo.id)} checked={todo.completed} type="checkbox" />
            {todo.text} <BsFillTrashFill className="btn" onClick={()=> deleteTodo(todo)} /> </li>
        
        )
        }
      </ul>
      <h1>Completed</h1>
      <ul style={{display:"flex",flexDirection:"column-reverse"}}>
        {todos.map((todo) => 
          todo.completed===true &&
            <li key={todo.id}>
            <input onChange={() => todoCheck(todo.id)} checked={todo.completed} type="checkbox" />
            {todo.text} <BsFillTrashFill className="btn" onClick={()=> deleteTodo(todo)} /> </li>
        
        )
        }
      </ul>
    </div>
  );
};

export default Todos;
