var chaId = 0;
function createCharakter(){
    
    var char = new Charakter;
    char.id = chaId;
    char.name = charName;
    char.age = age;
    char.gender = gender;
    char.race = race;
    char.nat = nat;
    char.h = h;
    char.hair = hair;
    char.eyes = eyes;
    char.des = des;
    console.log(char)
    addCharacter(char);
    addHtml(char.name, char.id);
    emptyInputs();
    hideStartingText();
    chaId++;
   
}
 
document.getElementById("Anmeldung").addEventListener("click",displayEditButtons);
document.getElementById("deleteButton").addEventListener("click",remove);

var startbutton = document.getElementById("start"),
                dialog = document.getElementById('dialog'),
                Anmeldung = document.getElementById("Anmeldung"),
                Abbruch = document.getElementById("Abbruch");
            startbutton.addEventListener('click', zeigeFenster);
            Anmeldung.addEventListener('click', schließeFenster);
            Abbruch.addEventListener('click', schließeFenster);
        
            function zeigeFenster() {
                dialog.showModal();
            }
        
            function schließeFenster() {
                dialog.close();
                
            }

            document.getElementById("nameAnchor").addEventListener("click",handleName);
            document.getElementById("basicInfoAnchor").addEventListener("click",handleAge);
            document.getElementById("basicInfoAnchor").addEventListener("click",handleRace);
            document.getElementById("basicInfoAnchor").addEventListener("click",handleGender);
            document.getElementById("basicInfoAnchor").addEventListener("click",handleNationality);
            document.getElementById("appearenceAnchor").addEventListener("click",handleHeigth);
            document.getElementById("appearenceAnchor").addEventListener("click",handleHair);
            document.getElementById("appearenceAnchor").addEventListener("click",handleEyes);
            document.getElementById("descriptionAnchor").addEventListener("click",handleDescription);
            document.getElementById("descriptionAnchor").addEventListener("click",createCharakter);






//var d = document.getElementById("d1"); 

//d.setAttribute("align", "center");