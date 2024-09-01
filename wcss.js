function melek() {
  var x = document.getElementById("ab");
  var y = document.getElementById("bgr");
  x.style.transition = "0.4s";
  y.style.transition = "0.4s";
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.background = "rgb(255, 255, 255, 0)";
  } else {
    x.style.display = "block";
    y.style.background = "rgb(255, 255, 255, .2)";
  }
}

var counter = 1;
var counter2 = 0;
setInterval(function geser(){
  document.getElementById('radio' + counter).checked = true;
  document.getElementById('radio' + counter2).checked = false;
  counter++;
  counter2++;
  if(counter>3){
    counter = 1;
  }
  if(counter2>3){
    counter = 1;
  }
}, 5000);

function t1(){
  counter = 1;
}
function t2(){
  counter = 2;
}
function t3(){
  counter = 3;
}
