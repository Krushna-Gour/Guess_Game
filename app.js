let what = prompt("Enter what you want to guess : ");
let whichGame = prompt(`Enter you favoret ${what} : `);
let guess = prompt("Enter your Guess : ");

//Cheat ( right click on mouse > inspect > console )
console.log(whichGame);

while(guess != whichGame){
    if((guess == "quit") || (whichGame == "quit")){
        document.write("you quit");
        break;
    } 
    guess = prompt("Wrong guess , please  Try again"); 
}

if(guess == whichGame){
    document.write("Congrats");
}