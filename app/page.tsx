"use client";

import { useState } from "react";
//import PageCopy from "./page-copy";
//import StrLength from "./strlength";
//import CounterApp from "./Counter";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todolist, setVal] = useState([
    { todotext: "task1", completed: false },
    { todotext: "task2", completed: true },
  ]);

  const onClickHandler = (myelement: any) => {
    //  console.log(myelement, "monelement");
    const newtdlist = todolist.map((todo) => {
      if (todo.todotext == myelement.todotext) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setVal(newtdlist);
  };
  const addTodo = () => {
    const newTodo = { todotext: todo, completed: false };
    const newtdlist = [...todolist, newTodo];
    setVal(newtdlist);
    setTodo(' ');
  };
  const deleteTodo = (myelement: any) => {
    const newtdlist = todolist.filter(todo=>{
      if (todo.todotext == myelement.todotext) {
      return false;
      }
      return true;
    });
    setVal(newtdlist);   


  }
  return (
    <>
      <div>ToDo</div>
      <input
        placeholder="add task"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todolist.map((elm) => {
          return (
            <li
              style={{
                color: elm.completed ? "green" : "red",
                fontStyle: "oblique",
              }}
              key={elm.todotext}
            >
              <input
                type="checkbox"
                checked={elm.completed}
                onChange={() => {
                  onClickHandler(elm);
                }}
              />
              {elm.todotext}
              <button
                onClick={() =>{deleteTodo(elm)}}
              >
                Delete
              </button>
            </li>
          );
        })}
        ;
      </ul>
    </>
  );
}
