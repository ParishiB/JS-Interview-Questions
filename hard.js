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











