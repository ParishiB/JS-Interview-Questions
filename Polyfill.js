
// Array forEach

Array.prototype.myForEach = function(cb) {
  for(let i = 0; i < this.length ; i++){
    cb(this[i])
  }
}
