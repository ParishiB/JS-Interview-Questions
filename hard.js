// Write a function for debouncing

function debounce(func , delay) {
  let timer;
  return function(){
    clearTimeout()
    timer = setTimeout(func,delay)
  }
}

function callback(){
  console.log("I will be called after delay")
}

console.log(debounce(callback,5000))

// Currying

function sum(a){
  return function (b) {
    return function (c){
      return a + b + c;
    }
  }
}

console.log(sum(5)(10)(20))

// nested Object question

const obj = {
    A: {
      B: {
        C: {
          D: {
            E: 2,
          },
        },
      },
    },
  };

Object.entries(obj)

function solve(obj,str){
  const ip = str.spilt(".")
  let value = obj;
  for(let i in ip){
    console.log(value[ip[i]])
    if(!value || typeof value !== 'object'){ return undefined }
    value = value[ip[i]]
  }
  return value
}

  console.log(read(obj, "A.B.C.D.E"));

// Create a calculator using classes and objects in Javascript

class Calculator {

  constructor(){
    this.result = 0;
  }

  add(num){
    this.result += num
  }

  subtract(num) {
    this.result -= num
  }

  eval(){
    eval(this.result)
  }

}

const calc = new Calculator();
calc.add(5)
console.log(calc.result)

// Create a todos using classes and objects in Javascript

class Todos {
  constructor(){
    this.todos =[]
  }

  add(todo){
    todos.push(todo)  
  }

  remove(idx){
    todos = todos.filter((todo,index) => index !== idx)
  }

  get(idx){
    return todos[idx]
  }
  
  getAll(idx){
    return todos
  }
  
}


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="todo-container">
      <h1>My To-do List</h1>
      <form onsubmit="addTodo(event)">
        <input type="text" id="todo-input" placeholder="Add a new task" />
        <button type="submit">Add</button>
      </form>
      <ul id="todo-list" onclick="removeTodo(event)"></ul>
    </div>
    <script>
      const input = document.getElementById("todo-input");
      const todoList = document.getElementById("todo-list");

      function addTodo(event) {
        event.preventDefault();
        const newTodo = input.value.trim();
        if (newTodo) {
          const li = document.createElement("li");
          const button = document.createElement("button");
          li.textContent = newTodo;
          button.textContent = "Delete";
          todoList.appendChild(li);
          todoList.appendChild(button);
          button.addEventListener("click", () => {
            todoList.removeChild(li);
            todoList.removeChild(button);
          });
          input.value = "";
        } else {
          console.log("Please enter a task");
        }
      }
    </script>
  </body>
</html>

// 

async function foo() {
  let result = "I am waiting";
  return result;
}

async function getValue() {
  let result = await foo();
  console.log(result);
  console.log("Hi");
  console.log("9");
}

getValue();


function abc() {
  console.log("hi");
 
}

const value = new abc();
console.log(value);


// Solve Promise recursively

function promiseRecurse(funcPromises) {
  if (funcPromises.length === 0) return;
  const currPromise = funcPromises.shift();
  currPromise.then((res) => console.log(res)).catch((err) => console.log(err));
  promiseRecurse(funcPromises);
}

// Implement promise yourself , promise.all , promise.race

// Differnce between microtask and macrotask ?
Microtask Queue (Job Queue):

Microtasks are tasks that are executed at the end of the current task or after the execution of JavaScript code.
Promises' .then() and .catch() callbacks, as well as process.nextTick() in Node.js, are examples of operations that create microtasks.
Microtasks have higher priority than macrotasks and are executed before them.
Microtasks are typically used for high-priority tasks like promise resolution callbacks.
Macrotask Queue (Task Queue):

Macrotasks represent tasks that are queued to be executed in the future, usually after the current call stack has cleared.
Examples of macrotasks include setTimeout, setInterval, I/O operations, UI rendering, and events like DOM events (click, keyup, etc.).
Macrotasks are typically executed after the microtask queue has been emptied.
Macrotasks are often used for less time-sensitive operations or tasks that can be delayed.



