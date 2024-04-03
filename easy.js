
//*******************************************************************************************************

function abc() {
  console.log(a)
  var a = 10
}

// Sol - undefined

//*******************************************************************************************************

// Polyfill for map

Array.prototype.MyMap = function(cb){
  const res = []
  for(let i = 0; i < this.length ; i++){
    res.push(cb(this[i]))
  }
  return res
}

// Ployfill for filter

Array.prototype.MyFilter = function(cb) {
  const res = []
  for(let i = 0; i < this.length ; i++) {
    if(cb(this[i])){
      res.push(this[i])
    }
  }

  return res
}



// Polyfill for reduce

Arrar.prototype.MyReduce = function(cb) {
  
}


//*******************************************************************************************************
Q) What is difference between forEach or Map ?
Map returns array whereas forEach doesnt


Q) let students= [
  { name : "Piyush" , roll : 31 , marks : 80},
  { name : "Rahul" , roll : 32 , marks : 80},
  { name : "Jane" , roll : 33, marks : 80},
  { name : "John " , roll : 34 , marks : 80}, 
];

function solve(students) {
  let ans = []
  for(let i = 0 ;i < students.length ; i++) {
     let new_name = students[i].name.toUpperCase()
      ans.push(new_name)
  }
  return res
}
 -OR-

const names = students.map((stu) => stu.name.toUpperCase())


const stud = students.filter((stu) => stu.marks > 60 )


// Chaining in it
// Map filter and reduce can be chained
const names = students.filter((stu) => stu.marks > 60 ).map((stu) => stu.name)

//*******************************************************************************************************


// Hoisting , scope , callback , arrow functions
Q) What is function declaration ?
  
  function (num) {
  return num * num
  }

Q) What is function expression ? 
  
  const sqaure = function (num) {
  return num * num
  }

Q) what are First class functions?
A programming language is said to have First-class functions if functions in that language are treated like other variables

Q) What is IIFE ? 
(() => console.log("This is an IIFE"))()

Q) (function(x){
  return (function (y) {
    console.log(x) //1
  }(2)
}(1)

//*******************************************************************************************************
    
console.log("a");
setTimeout(() => console.log("b"), 0);
Promise.resolve("c").then((value) => console.log(value));
console.log("d");

//*******************************************************************************************************
function fn() {
  for (var count = 0; count < 3; count++) {
    setTimeout(function () {
      console.log(count);
    }, 1000);
  }
}


















