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
setInterval(function geser(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter>3){
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
