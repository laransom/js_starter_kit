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
