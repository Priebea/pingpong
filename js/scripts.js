$(document).ready(function() {

  var number = parseInt(prompt("Enter a number"));


  if (number % 5 && number % 3) {
  $('#pingpong').show();
} else if (number % 5) {
  $('#pong').show("pong");
}  else if (number % 3) {
  $('#ping').show("ping");
}
  event.preventDefault();

});
