import * as React from "react";
import axios from "axios";
import "./styles.css";
import { useEffect, useState } from "react";
import { getTodoList } from "./api.js";
import Todo from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodoList()
      .then((ans) => setTodos(ans))
      .catch((error) => {
        console.log(error);
      });
    console.log("The value of todos", todos);
  }, []);

  const editFunc = (id) => {
    console.log("Check 1");
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
    console.log("Check 2");
  };

  return (
    <div className="App">
      {todos.map((item, index) => (
        <Todo
          id={item.id}
          name={item.name}
          title={item.title}
          completed={item.completed}
          key={index}
          clickFunc={(id) => editFunc(id)}
        />
      ))}
    </div>
  );
}

// ***********************************************************************************************

import axios from "axios";
const API = "https://jsonplaceholder.typicode.com/todos";

// write a function to fetch the all todo list
export const getTodoList = async () => {
  let todos = [];
  const response = await axios("https://jsonplaceholder.typicode.com/todos");
  console.log("The respone is:", response);
  console.log("The response data value is", response.data);
  return response.data;
};



// ***********************************************************************************************

import React from "react";
import styles from "./todo.module.css";
const Todo = ({ title, completed, clickFunc, id }) => {
  return (
    <div className={styles.box}>
      <h1> {title} </h1>
      <p>Completed: </p>
      <input
        type="checkbox"
        name=""
        id=""
        checked={completed}
        onChange={() => clickFunc(id)}
      />
    </div>
  );
};

export default Todo;

// ***********************************************************************************************
