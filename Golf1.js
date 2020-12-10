// Golf Score Card

// Here is my array
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// Here I am pulling values from the text fields from the form on my html page
document.querySelector('#par').value

document.querySelector('#strokes').value

// Should I be using .getElementsById instead?
var par = document.getElementById('par');
var strokes = document.getElementById('strokes');

// Here is my function
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0]
  } else if (strokes <= par - 2) {
    return names[1]
  } else if (strokes == par - 1) {
    return names[2]
  } else if (strokes == par) {
    return names[3]
  } else if (strokes == par + 1) {
    return names[4]
  } else if (strokes == par + 2) {
    return names[5]
  } else if (strokes >= par + 3) {
    return names[6]
  }
}

// Selects form on page (might want to be more specific), adds event listener that listens for submit event,
// prevents default behavior.
var form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  console.log("I am no longer refreshing the damn page!");
});
  
// Change these values to test

function produceMessage(){
  var msg= golfScore();
  return msg;
}

window.alert(golfScore());
document.write(golfScore());
console.log(golfScore(par,strokes));