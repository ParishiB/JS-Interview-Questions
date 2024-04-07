
// Array forEach

Array.prototype.myForEach = function(cb) {
  for(let i = 0; i < this.length ; i++){
    cb(this[i])
  }
}


// Array Map

Array.prototype.myMap = function (cb) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i]));
  }
  return res;
};


// Array Filter

Array.prototype.myFilter = function(cb) {
  const res = []
  for (let i = 0; i < this.length; i++) {
     if(cb(this[i])){
      res.push(this[i])
     }
  }
  return res;
}

// Polyfil for Promise

Promise.prototype.myPromiseRace = function (args) {
  if (!Array.isArray(args)) return Promise.reject(new TypeError('Arguments must be an array'));

  return new Promise((resolve, reject) => {
    args.forEach((promise) => {
      Promise.resolve(promise).then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
};

// Polyfill for Promise.all

Promise.prototype.myPromiseAll = function (args) {
  if (!Array.isArray(args)) return Promise.reject(new TypeError('Arguments must be an array'));

  return new Promise((resolve, reject) => {
    const results = [];
    let count = 0;

    args.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (value) => {
          results[index] = value;
          count++;
          if (count === args.length) {
            resolve(results);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
};

// Call , Apply , Bind method

Function.prototype.myCall = function(obj,...args){
  obj.fn = this
  obj.fn(...args)
}


// Apply
Function.prototype.myApply = function(obj, args) {
  obj.fn = this;
  obj.fn(...args); 
  
};


