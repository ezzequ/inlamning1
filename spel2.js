const door2 = document.getElementById("door2")


//eftersom jag vill att spelaren skall utmanas mer än att bara klicka på dörrar så är det en dörr som kräver ett lösenord.
//du kommer inte in utan lösenordet och det har jag gömt i den div som man hittar när man hoovrar över skärmen.
//när man väl skrivit in lösenordet en gång så behöver man inte skriva in det igen nästa gång man öppnar dörren. 
function passwordbutton(){
    let passwordbox = document.getElementById("passwordbox");
    let password = document.getElementById("inputpassword").value.toLowerCase();
    let surprise = document.getElementById("surprise");

if (password == "pineapple-pen"){
       passwordbox.style.display="none";
       surprise.style.display = "block";
}
   else if (password != "pineapple-pen"){
   alert ("you have misspelled or typed something invalid, please try again")
   
   }

console.log(password)


}

