


//du får börja med att välja vilken karaktär du vill vara
function pickCharacterButton() {
    let characterQuestion = document.getElementById("IDcharacter");
    let inputCharacter = document.getElementById("inputCharacter").value.toLowerCase();
    let weaponQuestion = document.getElementById("IDweapon");

 if (inputCharacter=="mage" || inputCharacter=="warrior" || inputCharacter=="healer"){
    characterQuestion.style.display = "none",   weaponQuestion.style.display = "block"
}

    else if (inputCharacter != "mage" || "warrior" || "healer"){
    alert ("you have put in something invalid, please type in mage, healer or warrior to continue")
}
 console.log(inputCharacter)

 // sedan så får du olika val utav utrustning beroende på vilken karaktär du vill vara, i ett meddelande aom visas ocanför inputen
function pickWeaponDisplayMessage(){
    let pickWeapon = document.getElementById("pickweaponmessage");
    let weaponsYouCanPick = document.getElementById("weaponsYouCanPick")

    if (inputCharacter=="mage"){
        pickWeapon.innerHTML = inputCharacter;
        weaponsYouCanPick.textContent =  "as your character, you can now equip yourself with one of the following weapons: wand, tome, gemstone"
 }

    else if(inputCharacter=="warrior"){
        pickWeapon.innerHTML = inputCharacter;  
        weaponsYouCanPick.textContent = " as your character, you can now equip yourself with one of the following weapons: sword, dagger, bow"
   
    }   

    else if(inputCharacter=="healer"){
        pickWeapon.innerHTML = inputCharacter; 
        weaponsYouCanPick.textContent = " as your character, you can now equip yourself with one of the following weapons: cloak, sheil, antidote"
  
    }  
    
    
}
pickWeaponDisplayMessage()
}


// här har jag gjort så att man bara kan välja det vapnet som tillhör rätt karaktär
function pickWeaponButton(){
let inputWeapon = document.getElementById("inputWeapon").value.toLowerCase();
let weaponQuestion = document.getElementById("IDweapon");
let char = document.getElementById("pickweaponmessage").innerText
let superpowerQuestion = document.getElementById("IDsuperpower")

 if (char=="mage" && (inputWeapon=="wand" || inputWeapon=="tome" || inputWeapon=="gemstone") ){
    weaponQuestion.style.display = "none"
    superpowerQuestion.style.display = "block"

}

   /* else if ( char=="mage" && inputWeapon!="wand" || inputWeapon!="tome" || inputWeapon!="gemstone"){
        alert("you have out something invalid, try again")
    }*/

 else if ( char=="warrior" && (inputWeapon=="bow" || inputWeapon=="dagger" || inputWeapon=="sword") ){
        weaponQuestion.style.display = "none"
        superpowerQuestion.style.display = "block"
    }

  else if  ( char=="healer" && (inputWeapon=="antidote" || inputWeapon=="cloak" || inputWeapon=="sheild") ){
        weaponQuestion.style.display = "none"
        superpowerQuestion.style.display = "block"
    }

    else{
        alert("You have put something invalid, try again")

    }
    
       

   console.log(char)
    console.log(inputWeapon)


  /*här har jag gjort en input där man kan välja en superktaft, den visar även dina tidigare val som du gjort innan. Här är meddelandet och nedanför i nästa
 funktion så kommer inputen*/
function pickSuperpowerDisplayMessage(){
        let picksuperpowerMessage = document.getElementById("superpowersyoucanpick");
        let Weapon = document.getElementById("inputWeapon").value.toLowerCase();
        let weapondisplay = document.getElementById("weaponofchoice")
        let char = document.getElementById("pickweaponmessage").innerText
        let characterofchoice = document.getElementById("characterofcoice")

        if (char=="mage"){
            characterofchoice.innerHTML = char;
            weapondisplay.innerHTML = Weapon;
            picksuperpowerMessage.textContent =  "you picked " + char + " and " + Weapon + " you can now pick one of the following superpowers: telekenesis, intangibility or shapeshifting"
     }
    
        else if (char=="warrior"){
            characterofchoice.innerHTML = char;
            weapondisplay.innerHTML = Weapon;
            picksuperpowerMessage.textContent =  "you picked " + char + " and " + Weapon + " you can now pick one of the following superpowers: telekenesis, intangibility or shapeshifting"
       
        }   
    
        else if(char=="healer"){
            characterofchoice.innerHTML = char;
            weapondisplay.innerHTML = Weapon;
            picksuperpowerMessage.textContent =  "you picked " + char + " and " + Weapon +" you can now pick one of the following superpowers: telekenesis, intangibility or shapeshifting"
      
        }  

    }

pickSuperpowerDisplayMessage();
    
}


function superpowerbutton(){
    let superpowerQuestion = document.getElementById("IDsuperpower");
    let superpowerinput = document.getElementById("inputSuperpower").value.toLowerCase();
    let namequestion = document.getElementById("IDname");

if (superpowerinput == "telekenesis" || superpowerinput == "intangibility" || superpowerinput == "shapeshifting"){
       superpowerQuestion.style.display="none";
       namequestion.style.display = "block";
}
   else if (superpowerinput != "telekenesis" || "intangibility" || "shapeshifting"){
   alert ("you have misspelled or typed something invalid, please try again")
   
   }

console.log(superpowerinput)


}

//har har jag gjort en funktion där alla inputs fungerar så länge den inte är tom. 
function namebutton(){
    let playButton = document.getElementById("start")
    let showYourCharacterBox = document.getElementById("yourCharacter")
    let yourname = document.getElementById("inputyourName").value.toLowerCase();
    let namequestion = document.getElementById("IDname");

   if (yourname != ""){
       namequestion.style.display ="none";
       showYourCharacterBox.style.display="block";
       playButton.style.display="block"
   }

   else if (yourname == ""){
    alert ("you must type in a name")
   }

console.log(yourname)

//här är et välkoms meddelande till spelare, som säger hej "namn" och rabblar upp alla val som du gjort för att bygga din karaktär
let ShowYourCharacter = document.querySelector("#yourCharacter > h3")

let character = document.getElementById("inputCharacter").value.toLowerCase();
let weapon = document.getElementById("inputWeapon").value.toLowerCase();
let superpower = document.getElementById("inputSuperpower").value.toLowerCase();
let yourName = document.getElementById("inputyourName").value.toLowerCase();

console.log(character)


ShowYourCharacter.innerHTML = ( "Hello " + yourName + "! welcome to the game. you picked " + character + " as your character and " 
+ weapon + " as your weapon and your superperpower is " + superpower + ". Nice!" )


}



// funktion som gömer en div, man kan använda på flera element utan att specificera ett ID, utan det gör man i html
// då detta är en funktion jag kommer använda flera gånger så vill jag göra det så enkelt som möjligt för attt inte upprepa min kod.
//därför löste jag detta med en funktion jag kan använda mig av om och om igen istället för att göra en ny för varje element med nytt id
function showDivOrElement(p){
    document.getElementById(p).style.display = 'block';
    
 
}


// funktion som gömmer en div, utan att man specifiserar ID. som man kan använda flera gånger i sin kod,
// utan att behöva göra en ny funktiom för varje ID, gjorde denna funktionen för att junna använda den på alla mina 
//dörrar i spelet, så att man kan stänga och öppna dom med enkla klick, man kan även göra en knapp utan <button> då jag ville att själva dörr divarna skulle fungera som en knapp utan att vara en knapp
  function hideDivOrElement(b) {
    document.getElementById(b).style.display = 'none';
    
  }


//en funktion som visar spelet och guidar användaren i rutan med text på vad hen skall göra
//precis som i beskrivningen ovan, fast för att stänga dörren och spelet så man kan komma till nästa dörr. 
let start = document.getElementById('start');
function showDivAndChangeText(){
    document.getElementById('spelet').style.display = 'block';
    start.innerHTML = 'click on the doors to find out whats behind them!';
}


 





 