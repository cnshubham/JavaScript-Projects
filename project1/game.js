// 
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userSc = document.querySelector('#user-score');
const compSc = document.querySelector('#comp-score');

const genCompChoice = () => {
    // rock, paper, scicssors
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
     msg.innerText = "Game was draw. Play again.";
     msg.style.backgroundColor = "#081631";
};

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        userScore++;
        userSc.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compSc.innerText = compScore;
         msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    // console.log("userchoice is : ", userChoice);
    // generate computer choice
    const compChoice = genCompChoice();
    // console.log("Computer choice is : ", compChoice);

    if(userChoice === compChoice) {
        // Draw game
        drawGame();
    }
    else{
        let userwin = true;
        if(userChoice === "rock"){
            // scissors-t, paper-f
            userwin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper"){
            // rock-t, scissor-f
            userwin = compChoice === "scissors" ? false : true ;
        }
        else{
            // paper-t, rock-f
            userwin = compChoice === "rock" ? false : true ;
        }
        showWinner(userwin, userChoice, compChoice);
    }
};



choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choices is clicked", userChoice);
        playGame(userChoice);
    });
});

