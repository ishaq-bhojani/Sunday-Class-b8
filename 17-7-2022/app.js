// function test(val) {
//   console.log(val);
// }

// test(5)

// function checkVal () {
//   var textInput = document.getElementById("text1");
//   console.log(textInput.value);
// }

// function setVal () {
//   var textInput = document.getElementById("text1");
//   textInput.value = "Hello!";
// }

function app (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}

var func = app(5);

console.log(func(5)(5));