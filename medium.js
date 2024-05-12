/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const res = [];
  
  transactions.forEach(transaction => {
    const foundIndex = res.findIndex(item => item.category === transaction.category);
    
    if (foundIndex !== -1) {
      res[foundIndex].totalSpent += transaction.price;
    } else {
      res.push({
        category: transaction.category,
        totalSpent: transaction.price
      });
    }
  });

  return res;
}


module.exports = calculateTotalSpentByCategory;


// const arr = [
//   {name:'a',values:[1,2]},
//   {name:'b',values:[3]},
//   {name:'a',values:[4,5]}
// ]

// const arr2 = [
//   {name:'a',values:[1,2,4,5]},
//   {name:'b',values:[3]}
// ]

function solve(arr){
   const res = []
   for(let i = 0 ; i <  arr.length; i++){
   const present = res.findIndex(item => item.name === arr[i].name);
    if (present !== -1) {
      res[present].values = [...res[present].values, ...arr[i].values];
    } else {
      res.push({
        name: arr[i].name,
        values: [...arr[i].values]
      });
    }
   }
	return res;	
}


// var originalArray = [{
//   id: 1,
//   elements: [1, 2]
// },
// {
//   id: 1,
//   elements: [3, 4]
// },
// {
//   id: 5,
//   elements: ['a', 'b']
// },
// {
//   id: 5,
//   elements: ['c', 'd']
// }, {
//   id: 27,
//   elements: []
// }]
// // I'd like to modify it to look like this (merge by id and join elements):
// newArray = [{
//   id: 1,
//   elements: [1, 2, 3, 4]
// }, {
//   id: 5,
//   elements: ['a', 'b', 'c', 'd']
// }, {
//   id: 27,
//   elements: []
// }]

function solve(arr) {
  const res = [] 
  for(let i = 0 ; i < arr.length ; i++){
    let find = res.findIndex((item) => item.id === arr[i].id)
    if(find != -1){
	 res[find].elements = [...res[find].elements , ...arr[i].elements];
    }else{
	res.push({
		id : arr[i].id,
		elements : arr[i].elements
	})
    }	  
  }
  return res;
	
}

// the original data array is:

// let data = [
// { "x": 1, "y": 2, "color": "red" },
// { "x": 1, "y": 2, "stroke": "violet" },
// { "x": 3, "y": 4, "color": "green" },
// { "x": 3, "y": 4, "stroke": "blue" }
// ];
// the expected result is:

// let data = [
// { "x": 1, "y": 2, "color": "red", "stroke": "violet" },
// { "x": 3, "y": 4, "color": "green", "stroke": "blue" }
// ];

function solve(obj){
	
let resultMap = {};

data.forEach(item => {
  const key = `${item.x}-${item.y}`;
  if (!resultMap[key]) {
    resultMap[key] = { x: item.x, y: item.y };
  }
  Object.assign(resultMap[key], item);
});

let result = Object.values(resultMap);

console.log(result);
	
}

const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for(let i in myObj.cars){
   x += "<h1>" + myObj.cars[i].name + "</h1>"
   for(let j in c){
   x += myObj.cars[i].models[j]
}

// IP - "x.y.z", "convert"
// OP - {x: {y: {z: "convert"}}}

function solve(ip) {
  const str = ip.split('.');
  let res = {};
  let temp = res;
  for (let i = 0; i < str.length - 1; i++) {
    let new_temp = {};
    temp[str[i]] = new_temp;
    temp = new_temp;
  }
  temp[str.length - 1] = "convert";

  return res;
}


console.log(solve("x.y.z"));

// Identify the mistake in it

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
      <form onsubmit="(event) => addTodo(event)">
        <input type="text" id="todo-input" placeholder="Add a new task" />
        <button type="submit">Add</button>
      </form>
      <ul id="todo-list"></ul>
    </div>
    <script>
      const input = document.getElementById("todo-input");
      const todoList = document.getElementById("todo-list");

      function addTodo(event) {
        event.preventDefault();
        const newTodo = input.value.trim();

        if (newTodo) {
          const li = document.createElement("li");
          li.textContent = newTodo;
          todoList.addEventListener("click", (e) => {
            this.removeChild(e.target);
          });
          todoList.appendChild(li);
          input.value = "";
        } else {
          console.log("Please eneter a task");
        }
      }
    </script>
  </body>
</html>




// Explain event bubbling
	
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>
      <form>
        <button>BUTTON</button>
      </form>
    </div>
    <script>
      const button = document.querySelector("button");
      const form = document.querySelector("form");
      const div = document.querySelector("div");

      div.addEventListener("click", func);
      form.addEventListener("click", func);
      button.addEventListener("click", func);

      function func(e) {
        alert(e.currentTarget.tagName);
      }
    </script>
  </body>
</html>

// Q) What is event capturing?

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>
      <form>
        <button>BUTTON</button>
      </form>
    </div>
    <script>
      const button = document.querySelector("button");
      const form = document.querySelector("form");
      const div = document.querySelector("div");

      div.addEventListener("click", func, true);
      form.addEventListener("click", func, true);
      button.addEventListener("click", func, true);

      function func(e) {
        alert(e.currentTarget.tagName);
      }
    </script>
  </body>
</html>


// Q) How do you stop propgation?
Wherever you want to stop propogation, add
e.stopPropogation()


// Q) What is event delegation ?

Event delegation is a pattern in JavaScript where instead of attaching an event listener to each individual element,
you attach a single event listener to a parent element. This parent element then 
listens for events that bubble up from its descendants. When an event occurs, the parent element's event listener handles it based on the target element that triggered the event.
	
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div class="products">
      <span class="mobile">mobile</span>
      <span class="Headphome">Headphone</span>
      <span class="laptop">Laptop</span>
      <span class="speaker">Speaker</span>
      <span class="USB Dock">USB Dock</span>
      <span class="Tripod">Tripod</span>
    </div>
    <script>
      document.querySelector(".products").addEventListener("click", (e) => {
        if (e.target.tagName === "SPAN") {
          window.location.href += "/" + event.target.className;
        }
      });
    </script>
  </body>
</html>

// Flatten the array

const arr = [1, 2, [2, [4, 8, 9], 3], [5, 6]];

function flattenArr(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res.push(...flattenArr(arr[i])); // Recursively flatten nested arrays
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

const flattenedArray = flattenArr(arr);
console.log(flattenedArray);

// Flatten the object
const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
  g: 5,
};

function flattenObject(obj) {
  let res = {};
  for (let i = 0; i < obj.length; i++) {
    if (typeof obj[i] != Object) {
      res[i] = obj[i];
    } else {
      const flattened = flattenObject(obj[i]);
      for (let j in flattened) {
        res[i + "." + j] = flattened[j];
      }
    }
  }
  return res;
}

//Create a memoise function
	
function memoise(fn){
 const res= {}
 return function(...args) {
  var argsCache = JSON.stringify(args)
  if(!res[argsCache]){
      res[argsCache] = fn.call(this,...args)
  }else{
   return res[argsCache]
  }  	 
}

// Implement 
// const result = calc.add(10).multiply(10).subtract(0);
// console.log(result);

const calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(b) {
    this.total += b;
    return this;
  },
  subtract(c) {
    this.total -= c;
    return this;
  },
};

// 
	
function outer() {
  function inner() {
    console.log(x);
  }
  const x = 5;
  return inner;
}

const inner = outer();
inner();
	
// 



Q) What can be the props used to help user work with a reusable library ?
The component like onClick , onChange , onSelect


Q) What is localstorage and session storage ?
Q) What are the container structures used?
Q) What are react.Fragment ?
Q) Differentiate between state and props ? (explain in terms of stateless and props , reusable componenet)
Q) Differentiate useMemo and useCallback ? 
Q) What are custom hooks ?
Q) What is redux and how is it used?
Q) What is dffiierence between type and interfaces(Typescript question)?
Q) Give example of where arrow function makes more sense than normal function and vice-versa?

Q) implement
console.log(calculator.lakhs(14).thousand(10).ten(20).result
Q) Implement 3 states of promise
Q) async function print() {
    console.log("The promise is pending");
    await new Promise(() => {});
}

print();

