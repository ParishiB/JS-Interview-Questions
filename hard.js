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
