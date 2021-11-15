

function myFunction() {
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



function pickWeaponButton(){
let inputWeapon = document.getElementById("inputWeapon").value.toLowerCase();
let weaponQuestion = document.getElementById("IDweapon");
let char = document.getElementById("pickweaponmessage").innerText

 if (char=="mage" && (inputWeapon=="wand" || inputWeapon=="tome" || inputWeapon=="gemstone") ){
    weaponQuestion.style.display = "none"
}

   /* else if ( char=="mage" && inputWeapon!="wand" || inputWeapon!="tome" || inputWeapon!="gemstone"){
        alert("you have out something invalid, try again")
    }*/

 else if ( char=="warrior" && (inputWeapon=="bow" || inputWeapon=="dagger" || inputWeapon=="sword") ){
        weaponQuestion.style.display = "none"
    }

  else if  ( char=="healer" && (inputWeapon=="antidote" || inputWeapon=="cloak" || inputWeapon=="sheild") ){
        weaponQuestion.style.display = "none"
    }

    else{
        alert("You have put something invalid, try again")

    }
    
       

   console.log(char)
    console.log(inputWeapon)
    
 
}


    







 