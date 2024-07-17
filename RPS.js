console.log("Hello World!");

let HumanScore = 0;
let computerScore = 0;
let humanChoice;
let scoreboard = document.getElementById("scoreboard").textContent;

const btnR = document.querySelector("#R");
const btnP = document.querySelector("#P");
const btnS = document.querySelector("#S");
btnR.addEventListener("click", () => playRound(document.getElementById("R").value,getComputerChoice()));
btnP.addEventListener("click", () => playRound(document.getElementById("P").value,getComputerChoice()));
btnS.addEventListener("click", () => playRound(document.getElementById("S").value,getComputerChoice()));

function getComputerChoice(){
    let RandomNumber = Math.round(Math.random()*9)
    
    if(RandomNumber<3){
        return "Rock"
    }
    else if(RandomNumber<6){
        return "Paper"
    }
    else if(RandomNumber<9){
        return "Scissors"
    }
}

function playRound(humanChoice,computerChoice){
    
    console.log(computerChoice);
    console.log(humanChoice);
    
    let h = humanChoice.toUpperCase();
    if(h == "STOP"){
        return}
    let c = computerChoice.toUpperCase();
    console.log({h,c});

    if ( h == "ROCK" && c == "PAPER"){ 
        computerScore++
        
    }
    else if ( h == "ROCK" && c == "SCISSORS"){ 
        HumanScore++
        
    }
    else if ( h == "PAPER" && c == "ROCK"){ 
        HumanScore++
        
    }
    else if ( h == "PAPER" && c == "SCISSORS"){ 
        computerScore++
        
    }
    else if ( h == "SCISSORS" && c == "ROCK"){ 
        computerScore++
        
    }
    else if ( h == "SCISSORS" && c == "PAPER"){ 
        HumanScore++
    }
    else if (h==c){
        alert("draw!")
    }
    else{
        alert("chose a viable answer") 
    }
    console.log(HumanScore);
    console.log(computerScore);
    document.getElementById("scoreboard").textContent = "Human Score " + HumanScore + "/CPU" + computerScore;
    if(HumanScore+computerScore>5){
        alert("your score:"+HumanScore.toString() + "/"+ "CPU score:"+computerScore.toString())
        if(HumanScore<computerScore){
            alert("YOU LOOSE")
        }
        else{ alert("YOU WIN")}
        alert("end of game")
        HumanScore = 0;
        computerScore = 0;
        document.getElementById("scoreboard").textContent = "Human Score " + HumanScore + "/CPU" + computerScore;
        return
    }
}
