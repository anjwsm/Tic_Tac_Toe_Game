//Making variabkes
let currentPlayer = "X";
let nextPlayer = "O";
let playerTurn = currentPlayer;
let playerx = document.getElementById("player1");
let playerO = document.getElementById("player2");
let resetbtn = document.getElementById("resetbutton");
let boxes = Array.from(document.querySelectorAll(".box"));
let player1Score = 0, 
    player2Score = 0;

let moves = 0;
let tieScore = 0 ;
let tiebtn = document.getElementById("tie");


//Function to change player's turn
const changePlayerTurn = () => {
  playerTurn = playerTurn === currentPlayer ? nextPlayer : currentPlayer;
};

//Function to start game

const startGame = () => {
  boxes.forEach((box) => {

    box.addEventListener("click", (e) => {
      if (!isThereAnyWinner() && !box.getAttribute('value')) {
      
        e.target.textContent = playerTurn;
        box.setAttribute('value',playerTurn);
        moves += 1;
        // check winner
        if (isThereAnyWinner()) {
          if (playerTurn == "X") {
            player1Score += 1;
            playerx.innerHTML = player1Score;
          } else {
            player2Score += 1;
            playerO.innerHTML = player2Score;
          }
        }

        //player change
         if (moves == 9 && !isThereAnyWinner()) {
            tieScore += 1 ;
            tiebtn.innerHTML = tieScore ;
           
          console.log("tie");
        }
        
            changePlayerTurn();
        
        
      }
    });
  });
};

//Function to check winner

const isThereAnyWinner = () => {
  if (
    boxes[0].getAttribute('value') === boxes[1].getAttribute('value') &&
    boxes[1].getAttribute('value') === boxes[2].getAttribute('value') &&
    boxes[0] .getAttribute('value')
  ) {
    return true;
  } else if (
    boxes[3].getAttribute('value') === boxes[4].getAttribute('value') &&
    boxes[4].getAttribute('value') === boxes[5].getAttribute('value') &&
    boxes[3].getAttribute('value')
  ) {
    return true;
  } else if (
    boxes[6].getAttribute('value') === boxes[7].getAttribute('value') &&
    boxes[7].getAttribute('value') === boxes[8].getAttribute('value') &&
    boxes[6].getAttribute('value')
  ) {
    return true;
  } else if (
    boxes[0].getAttribute('value') === boxes[3].getAttribute('value') &&
    boxes[3].getAttribute('value') === boxes[6].getAttribute('value') &&
    boxes[3].getAttribute('value')
  ) {
    return true;
  } else if (
    boxes[1].getAttribute('value') === boxes[4].getAttribute('value') &&
    boxes[4].getAttribute('value') === boxes[7].getAttribute('value') &&
    boxes[1].getAttribute('value')
  ) {
    return true;
  } else if (
    boxes[2].getAttribute('value') === boxes[5].getAttribute('value') &&
    boxes[5].getAttribute('value') === boxes[8].getAttribute('value') &&
    boxes[2].getAttribute('value')
  ) {
    return true;
  } else if (
    boxes[0].getAttribute('value') === boxes[4].getAttribute('value') &&
    boxes[4].getAttribute('value') === boxes[8].getAttribute('value') &&
    boxes[0] .getAttribute('value')
  ) {
    return true;
  } else if (
    boxes[2].getAttribute('value') === boxes[4].getAttribute('value') &&
    boxes[4].getAttribute('value') === boxes[6].getAttribute('value') &&
    boxes[2].getAttribute('value')
  ) {
    return true;
  }

  return false;
};

function reset() {


  boxes.forEach((eachBox) => {
    eachBox.innerHTML=''
    eachBox.setAttribute('value',"") ;
  });

playerTurn = 'X' ;
moves = 0 ;

}

resetbtn.addEventListener("click", reset);

startGame();
