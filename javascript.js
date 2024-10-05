let computer=0;
let human=0;
let computerChoice;
let humanChoice;
const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissors=document.querySelector("#scissors");
rock.addEventListener("click",()=>playRound(getComputerChoice(),"rock"));
paper.addEventListener("click",()=>playRound(getComputerChoice(),"paper"));
scissors.addEventListener("click",()=>playRound(getComputerChoice(),"scissors"));    

function getComputerChoice(){
    
    let num=Math.floor(Math.random()*3);
    if(num==0){
        computerChoice="rock";
    }else if(num==1){
        computerChoice="paper";
    }else{
        computerChoice="scissors"
    }
    
}


function playRound(computerChoice,humanChoice){
    const result=document.querySelector(".result") 
    const score=document.querySelector(".score");
    
        if(computerChoice=="paper"){
            if(humanChoice=="rock"){  
                result.textContent=`computer chose paper and you chose rock,You lose! paper beat rock!`;
                computer++;
            }else if(humanChoice=="paper"){
                result.textContent="equal";
            }else{
                result.textContent=`computer chose paper and you chose scissor,You win!scissor beats paper!`;
                human++;
            }
        
        }else if(computerChoice=="rock"){
            if(humanChoice=="rock"){
                result.textContent="equal";      
            }else if(humanChoice=="paper"){
                result.textContent=`computer chose rock and you chose paper,You win!paper beats rock`;
                human++;
            }else{
                result.textContent=`computer chose rock and you chose scissors,You lost!rock beats scissors!`;
                console.log("You lost!rock beats scissors!")
                computer++;
            }
           
        }else{
            if(humanChoice=="rock"){
                result.textContent=`computer chose scissors and you chose rock,You win!rock beats scissors!`;
                console.log("You win!rock beats scissors!") 
                human++;    
            }else if(humanChoice=="paper"){
                result.textContent=`computer chose scissors and you chose paper,You lost!scissors beat paper!`;
                console.log("You lost!scissors beat paper!")
                computer++;
            }else{
                result.textContent="equal";
            }
            
        }
        score.textContent=`computer score:${computer}, human score:${human}`;
        if(human>4||computer>4){
            const buttons=document.querySelectorAll("button");
            buttons.forEach(button=>button.disabled=true);
            if(computer>human){
                score.textContent=`computer score:${computer}, human score:${human}, computer win!`
            }else{
                score.textContent=`computer score:${computer}, human score:${human}, human win!`
            }
        }
        
}

    
       
     

