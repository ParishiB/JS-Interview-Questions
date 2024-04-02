

function getLength(str){
  console.log("String length", str.length)
}

function findIndexOf(str,target){
  consoe.log("Index:", str.indexOf(target))
}


function LastIndexOf(str,target){
  consoe.log("Index:", str.lastindexOf(target))
}


function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}

function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}

function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}


function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}


function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}

function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}

