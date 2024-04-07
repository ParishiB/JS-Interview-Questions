console.log("start");

async function solve() {
  const prom = await new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(console.log("Promise resolved"));
    }, 1000)
  );
  console.log("Testing");
}
solve();
console.log("end");
// ********************************************************
console.log("start");

async function fetchData() {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log(data);
}

fetchData();

console.log("end");
// ********************************************************
console.log("start");

function importantAction(username) {
  setTimeout(() => {
    return `Subscribe to ${username}`;
  }, 1000);
}

const message = importantAction("Parishi", function () {
  console.log(message);
});

console.log("stop");

console.log("start");

function importantAction(username) {
  setTimeout(() => {
    return `Subscribe to ${username}`;
  }, 1000);
}
// ********************************************************
const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) {
      resolve("Subscribe to parishi");
    } else {
      reject(new Error("I am learinig aboput promise chaining 1"));
    }
  }, 1000);
});

const sub1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) {
      resolve("Subscribe to parishi pt2");
    } else {
      reject(new Error("I am learinig aboput promise chaining 2"));
    }
  }, 1000);
});

sub
  .then(() => {
    console.log("Sub promise resolved");
  })
  .then(() => {
    sub1;
    console.log("sub1 is also resolved");
  })
  .catch((err) => {
    console.error(err);
  });
console.log("stop");

//Promise combinator

Promise.race([sub, sub1]).then((res) => console.log(res));

const result = async () => {
  try {
    const message1 = await sub();
    const message2 = await sub1();
    console.log({ message1, message2 });
  } catch (error) {
    console.log("Promises failed");
  }
};

function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data for ID ${id}`);
    }, Math.random() * 2000);
  });
}

async function fetchDataWithPromiseAll() {
  const ids = [1, 2, 3];
  try {
    const promises = ids.map((id) => getData(id));
    const results = await Promise.all(promises);
  } catch (error) {
    console.error(error);
  }
}

fetchDataWithPromiseAll();

console.log("start");
const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});
promise1.then((res) => {
  console.log(res);
});

console.log("end");

// Solve Promise recursively

function promiseRecurse(funcPromises) {
  if (funcPromises.length === 0) return;
  const currPromise = funcPromises.shift();
  currPromise.then((res) => console.log(res)).catch((err) => console.log(err));
  promiseRecurse(funcPromises);
}

const examplePromise = new PromisePolyfill((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));

const a = [
  { language: "JavaScript" },
  { language: "JavaScript" },
  { language: "TypeScript" },
  { language: "C++" },
];

const b = [
  { language: "JavaScript", count: 2 },
  { language: "C++", count: 1 },
  { language: "TypeScript", count: 1 },
];

function solve(a) {
  const res = [];
  for (let i = 0; i < a.length; i++) {
    let index = res.findIndex((item) => item.index === res[i].index);

    if (index !== -1) {
      res[i].count++;
    } else {
      res.push({ language: a[i].language, count: 1 });
    }
  }
}

const a1 = { key1: 2, key2: 1, key3: 7 };
const b2 = [{ key1: 2 }, { key2: 1 }, { key3: 7 }];

function solve1(a1) {
  let res = [];
  for (let i in a1) {
    res.push({ [i.key]: [i.value] });
  }
  return res;
}

console.log(solve1(a1));

const aob = [
  { framework: "React.JS", website: "Paypal" },
  { framework: "React.JS", website: "Tesla" },
  { framework: "Angular", website: "Google" },
  { framework: "Vue.JS", website: "Vue" },
  { framework: "JavaScript", website: "inblack67" },
];

output: -[
  { victim: "React.JS", count: 2 },
  { victim: "Angular", count: 1 },
  { victim: "Vue.JS", count: 1 },
  { victim: "JavaScript", count: 1 },
];

function find(obj, res) {
  for (let i = 0; i < res.length; i++) {
    if (res[i] == obj) return true;
  }
  return false;
}
function aobo(aob) {
  const res = [];
  for (let i = 0; i < aob.length; i++) {
    if (find(aob[i], res)) {
      res[i].count++;
    } else {
      res.push({ framework: aob.framework, count: 1 });
    }
  }

  return res;
}

function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}

console.log(foo(), typeof x, typeof y);

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(20, 30);
console.log(square.area);

function User(name, age) {
  this.name = name;
  this.age = age;
  this.getProfile = function () {
    return () => {
      console.log(this.constructor.name);
      console.log("I'm " + this.name + ", " + this.age + " yrs old");
    };
  };
}

let user = new User("John", 25);
let profile = user.getProfile();

profile();

// The getProfile method returns a regular function. When you call profile(), the context of this inside the returned function is the global object (Window in the browser, global in Node.js), not the User instance. This is because regular functions create their own this context, which is determined by how they are called. Since the returned function is called directly (as profile()), its this refers to the global object.

function User(name, age) {
  this.name = name;
  this.age = age;

  this.getProfile = function () {
    // Outer function context
    console.log(this.constructor.name); // User
    return function () {
      // Inner function context
      console.log(this.constructor.name); // Window
      console.log("I'm " + this.name + ", " + this.age + " yrs old");
    };
  };
}

var user = new User("John", 25);
var profile = user.getProfile();
profile(); //I'm undefined, undefined yrs old

// The getProfile method returns an arrow function. Arrow functions do not bind their own this value but inherit this from the surrounding lexical context. In this case, the surrounding context is the User instance (user). So, when you call profile(), the this inside the arrow function still refers to the User instance, and you get the correct output.

function foo() {
  return;
  {
    message: "Hello World";
  }
}
console.log(foo());

// this is a syntax issur , it should be fixed like
function foo() {
  return { message: "Hello World" };
}

// OR

function foo() {
  return {
    message: "Hello World",
  };
}
