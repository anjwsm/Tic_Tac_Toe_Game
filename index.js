let X_TEXT = "X";
let O_TEXT = "O" ; 
let currentPlayer = X_TEXT ; 

let boxes =Array.from(document.querySelectorAll(".box")) ;


let spaces = Array(9).fill(null) ;

for (let i=0 ; i< boxes.length ; i++){
    boxes[i].addEventListener("click" , (event)=>{
        const id = event.target.id ;

        if (!spaces[id]){
            spaces[id] = currentPlayer;
            event.target.innerText = currentPlayer;
            currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT ;
        }

    })
}

