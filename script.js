var result;

function sum(){
	var n1 = parseInt(document.getElementById("Num1").value);
	var n2 = parseInt(document.getElementById("Num2").value);
	result = n1 + n2;
	document.getElementById("ans").innerHTML = "The sum of " + n1 + " and " + n2 + " is " + result + ".";
}
function diff(){
  var n1 = parseInt(document.getElementById("Num1").value);
  var n2 = parseInt(document.getElementById("Num2").value);
	result = n1 - n2;
	document.getElementById("ans").innerHTML = "The difference of " + n1 + " and " + n2 + " is " + result + ".";
}
function prod(){
  var n1 = parseInt(document.getElementById("Num1").value);
  var n2 = parseInt(document.getElementById("Num2").value);
	result = n1 * n2;
	document.getElementById("ans").innerHTML = "The product of " + n1 + " and " + n2 + " is " + result + ".";
}
function div(){
  var n1 = parseInt(document.getElementById("Num1").value);
  var n2 = parseInt(document.getElementById("Num2").value);
	result = n1 / n2;
	document.getElementById("ans").innerHTML = "The quotient of " + n1 + " and " + n2 + " is " + result + ".";
}
function mod(){
  var n1 = parseInt(document.getElementById("Num1").value);
  var n2 = parseInt(document.getElementById("Num2").value);
	result = n1 % n2;
	document.getElementById("ans").innerHTML = "The remainder of " + n1 + " and " + n2 + " is " + result + ".";
}