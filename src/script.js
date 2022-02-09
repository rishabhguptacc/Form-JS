var name;
var age;
var weight;
function sub() {
    name = document.getElementById("iname").value;
    age = document.getElementById("iage").value;
    weight = document.getElementById("iweight").value;
    document.getElementById("para").innerHTML =
    "Hello " +
    "<b>" +
    name +
    "</b>!!! Your weight is " +
    weightCheck(age, weight) +
    " at an age of " +
    age;

  
}

function recWei(w) {
  if (w >= 15 && w <= 20) return "15kg - 20kg";
  else if (w >= 21 && w <= 25) return "21kg - 25kg";
  else if (w >= 26 && w <= 30) return "26kg - 30kg";
  else if (w >= 31 && w <= 40) return "31kg - 40kg";
}

function lesserMsg() {
  return "<b>Lesser than</b> the recommended value of " + recWei(weight);
}
function greaterMsg() {
  return "<b>Greater than</b> the recommended value of " + recWei(weight);
}

function weightCheck(a, w) {
  if (a >= 5 && a <= 7) {
    if (w < 15) return lesserMsg();
    else if (w > 20) return greaterMsg();
    else return "Perfect.";
  } else if (a >= 8 && a <= 10) {
    if (w < 21) return lesserMsg();
    else if (w > 25) return greaterMsg();
    else return "Perfect.";
  } else if (a >= 11 && a <= 15) {
    if (w < 26) return lesserMsg();
    else if (w > 30) return greaterMsg();
    else return "Perfect.";
  } else if (a >= 16 && a <= 20) {
    if (w < 31) return lesserMsg();
    else if (w > 40) return greaterMsg();
    else return "Perfect.";
  }
}
