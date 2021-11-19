
 
  
// har gjort en funktion som byter slumpmässad färg på elementen. Har gjort med parametrar 'x', så att jag kan använda funktionen flera gånger
// istället för att behöva upprepa min kod när jag vill ändra färgen på ett annat element. 
// så för att specificera en div exempelvis så skriver jag <button onclick="ChangeDesign('ID')"></button>
function changeDesign(x) {
    const newColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementById(x).style.backgroundColor = "#" + newColor;
    color.innerHTML = "#" + newColor;
  }


    



