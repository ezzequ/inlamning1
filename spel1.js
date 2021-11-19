/*const buttonstone = document.querySelector("body > div.spel1-box > div > button:nth-child(1)").value
const buttonbag = document.querySelector("body > div.spel1-box > div > button:nth-child(2)").value
const buttonscissor = document.querySelector("body > div.spel1-box > div > button:nth-child(3)").value
*/
/*
const buttonstone = document.querySelector("#spel1-box > div.spel1-buttons > button:nth-child(1)").value
const buttonbag = document.querySelector("#spel1-box > div.spel1-buttons > button:nth-child(2)").value
const buttonscissor = document.querySelector("#spel1-box > div.spel1-buttons > button:nth-child(3)").value
let gameButtons = [buttonstone, buttonbag, buttonscissor]

gameButtons = document.querySelectorAll("body > div.spel1-box > div > button");*/


// har försökt bygga ett spel som sten, sax påse, där spelaren själv får välja om den vill göra sten, sax, eller påse.
//motståndaren är datorn och har gjort så att den slumpar ett nummer och baserat på nummret så kommer den bli sten sax eller påse.
let userScissor = document.getElementById("Userhandscissor");
let userRock = document.getElementById("Userhandsrock");
let userPaper = document.getElementById("Userhandspaper");
let computerScissor = document.getElementById("Computerhandscissor");
let computerRock = document.getElementById("Computerhandsrock");
let computerPaper = document.getElementById("Computerhandspaper");
let userpickDOM = document.getElementById("userpick")
let randompickDOM = document.getElementById("randompick")
let winnerDOM = document.getElementById("whowins")
gameButtons = document.querySelectorAll("#spel1-box > div.spel1-buttons");
for (var i = 0; i < gameButtons.length; i++) {
    gameButtons[i].addEventListener("click", function (x) {
        let UserPick = x.target.innerText;
        let RandomPick = Math.floor(Math.random() * 6) +1;
          if (RandomPick < 3){
            RandomPick = "scissor";
           
           }
            if (RandomPick <= 4){
                RandomPick = "bag";
                
            }
           
            if (RandomPick <= 6){
                RandomPick = "stone";
                
    }

       console.log(RandomPick)
       console.log(UserPick)
    
       userpickDOM.textContent = UserPick
       randompickDOM.textContent = RandomPick

 function Whowins(){
 
// här är funktionen som avgör vem som vinner

    if (UserPick === "bag" && RandomPick==="bag"|| UserPick==="stone" && RandomPick==="stone"|| UserPick==="scissor" && RandomPick==="scissor" ){
        winnerDOM.textContent ="its a tie!";
        
}

    else if (UserPick==="bag"){
        if (RandomPick==="stone"){
            winnerDOM.textContent ="user wins!";
           
        } else{
           winnerDOM.textContent ="computer wins!";
           
        }
} 

    else if (UserPick==="stone"){
        if (RandomPick ==="scissor"){
             winnerDOM.textContent ="user wins!";
            
        } else {
            winnerDOM.textContent="computer wins!";
            
            
        } 
}

   else if (UserPick ==="scissor"){
        if (RandomPick ==="bag"){
           winnerDOM.dom="user wins!";
           
        } else{
           winnerDOM.textContent="computer wins!";
            
        }


        
}

}; 
onclick=Whowins();


//denna funktionen är "bilderna" eller ikonerna som visas beroende på om det är sten sax eller påse. Så om jag tar "sax" så visas bara sax handem
//och sten och påse hadnen blockeras. 
function CatchTheseHands(){
  if (UserPick==="bag"){
      userPaper.style.display ="block"
      userRock.style.display ="none"
      userScissor.style.display ="none"
    }

    else if (UserPick==="stone"){
        userPaper.style.display ="none"
        userRock.style.display ="block"
        userScissor.style.display ="none"
        }

    else if (UserPick==="scissor"){
        userPaper.style.display ="none"
        userRock.style.display ="none"
        userScissor.style.display ="block"
        }

 if (RandomPick==="bag"){
     computerPaper.style.display ="block"
     computerRock.style.display ="none"
     computerScissor.style.display ="none"
    }
      
        else if (RandomPick==="stone"){
          computerPaper.style.display ="none"
          computerRock.style.display ="block"
          computerScissor.style.display ="none"
        }
      
        else if (RandomPick==="scissor"){
          computerPaper.style.display ="none"
          computerRock.style.display ="none"
          computerScissor.style.display ="block"
        }





};

    CatchTheseHands();



       

    });
 




};



/*
    if ( RandomPick == "scissor" && UserPick == "bag"){
            winnerDOM.textContent = "Computer wins!"
    }

       else if ( RandomPick =="scissor" && UserPick == "stone"){
            winnerDOM.textContent = "User wins!"

       }

       else if (RandomPick == "scissor" && UserPick=="scissor"){
           winnerDOM.textContent="its a tie"
       }
    if ( RandomPick =="bag" && UserPick=="stone"){
        winnerDOM.textContent="Computer wins!"
    }
       else if( RandomPick == "bag" && UserPick=="scissor"){
           winnerDOM.textContent = "User wins!"
       }

       else if( RandomPick == "bag" && UserPick=="bag"){
        winnerDOM.textContent = "its a tie!"
       }

    if ( RandomPick == "stone" && UserPick=="scissor"){
        winnerDOM.textContent =" Computer wins!"
    }

      else if ( RandomPick == "stone" && UserPick=="bag"){
        winnerDOM.textContent =" User wins!"
    }
      
      else if ( RandomPick == "stone" && UserPick=="stone"){
        winnerDOM.textContent =" its a tie!"
    }
    else {
        winnerDOM.textContent = "deijfejif"
    } 
    */
    