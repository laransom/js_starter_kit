
var randomnumber=Math.floor(Math.random()*11);

var $textarea = $('#user_guess placeholder');
$textarea.attr('placeholder', 'hello world');

document.getElementById('user_guess').focus();

$(document).ready(function() {
  $( "#submit" ).click(function() {
    guess = $('#user_guess').val();
    compare(guess, randomnumber);
  });
});

$(document).keypress(function(e) {
  if(e.which == 13 ) {
    guess = $('#user_guess').val();
    compare(guess, randomnumber);
    $('#user_guess').focus();
  }
});

var compare = function (guess, number) {
  if ( guess < randomnumber ) {
      $( ".alert-box" ).text("Too low. Guess a higher number");
  } else if (guess > randomnumber) {
      $( ".alert-box" ).text("Too high. Guess a lower number");
  } else {
      $( ".alert-box" ).text("You win!");
  }
};
/*
  while ( guess != randomnumber ) {
    if ( guess < randomnumber ) {
      $( ".alert_box" ).text("Too low. Guess a higher number");
    } else if (guess > randomnumber) {
      $( ".alert_box" ).text("Too high. Guess a lower number");
    }
  };




  $( ".alert-box" ).text($(this).val());





<input type="text" placeholder="Put guess here">

var randomnumber=Math.floor(Math.random()*11);

username = prompt("What is your name?");



  guess = prompt("Please guess a number between 1 and 10");
while ( guess != randomnumber ) {
  if( guess < randomnumber ) {
    guess = prompt("Too low " + username + ". Guess a higher number");
  } else if (guess > randomnumber) {
    guess = prompt("Too high " + username + ". Guess a lower number");
  }
}

alert(username + ", you sir are a winner!!");
*/
