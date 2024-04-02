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






















