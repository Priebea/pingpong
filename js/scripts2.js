$(function() {

  var number = parseInt(prompt("Enter a number"));
  var one = (1);

  if (number % 5 && number % 3) {
  $('#pingpong').show();
} else if (number % 5) {
  $('#pong').show();
}  else if (number % 3) {
  $('#ping').show(); 
}  else (integerShow = (number-1)) {
  $('#integerShow').show();
}
  event.preventDefault();
});
});
