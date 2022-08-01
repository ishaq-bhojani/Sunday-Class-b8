// function expandLoris () {
//   var slowLoris = document.getElementById("slowLoris");
//   // slowLoris.innerHTML = "<h1>This is new Text</h1>";
//   slowLoris.className += " hidden";
//   slowLoris.style.color = "green";
//   slowLoris.style.backgroundColor = "#000";
// }

// function run () {
//   var p = document.getElementsByTagName("p");
//   p[1].innerHTML = "<h1>This is new Text</h1>";
//   console.log(p);
// }

function run () {
  var p = document.children[0].children[1].children[1];
  p.innerHTML = "<h1>This is new Text</h1>";
  console.log(p);
}