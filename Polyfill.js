
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


