console.log("Hello World!");

let CPUchoice;
let GUYchoice;
let HumanScore = 0;
let computerScore = 0;
let humanChoice;
let round=0;

const btnR = document.querySelector("#R");
const btnP = document.querySelector("#P");
const btnS = document.querySelector("#S");
btnR.addEventListener("click", playRound(document.getElementById("R").value,getComputerChoice));
btnP.addEventListener("click", playRound(document.getElementById("P").value,getComputerChoice));
btnS.addEventListener("click", playRound(document.getElementById("S").value,getComputerChoice));

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
    console.log(h);

    if ( h == "ROCK" && c == "PAPER"){ 
        computerScore++
        
    }
    if ( h == "ROCK" && c == "SCISSORS"){ 
        HumanScore++
        
    }
    if ( h == "PAPER" && c == "ROCK"){ 
        HumanScore++
        
    }
    if ( h == "PAPER" && c == "SCISSORS"){ 
        computerScore++
        
    }
    if ( h == "SCISSORS" && c == "ROCK"){ 
        computerScore++
        
    }
    if ( h == "SCISSORS" && c == "PAPER"){ 
        HumanScore++
     
    if (h==c){
        alert("draw!")
    }
    }else{
        alert("chose a viable answer") 
    }
    console.log(HumanScore);
    console.log(computerScore);
    round++
    if(round<=5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }else{
        return
    }
}
alert("your score:"+HumanScore.toString() + "/"+ "CPU score:"+computerScore.toString())
alert("end of game")