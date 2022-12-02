//Functions definations
function mouseHover() {
  document.getElementById("intro").style.color = "green";
  document.getElementById("intro").innerHTML = "Hello I'm Green";
}

function mouseMove() {
  document.getElementById("intro").style.color = "black";
  document.getElementById("intro").innerHTML = "Hello World";
}
function calculate() {
  var number = document.getElementById("num1").value;
  var range = document.getElementById("num2").value;

  for (let x = 1; x <= range; x++) {
    const res = number * x;
    var h = document.createElement("H1");
    var t = document.createTextNode(number + " x " + x + " = " + number * x);
    h.appendChild(t);
    document.body.appendChild(h);
  }
  document.getElementById("intro").style.color = "green";
  document.getElementById("intro").innerHTML =
    number + " x " + range + " is = " + number * range;
  event.preventDefault();
  document.getElementById("cal").disabled = false;
}
