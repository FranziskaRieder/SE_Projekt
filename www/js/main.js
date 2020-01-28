/**
 * @author Franziska Rieder
 * @version 1.0.0
 * @file main
 */
var charName;
var age;
var gender;
var race;
var nat;
var h;
var hair;
var eyes;
var des;

/**
 * Setzt die onclick Funktion des Buttons confirmation auf updateName
 * @param() keine Parameter
 * @return {void}
 */
function setNameFunction() {
    document.getElementById('confirmation').setAttribute('onclick', 'char.updateName()')
  }
  /**
   * Setzt die onclick Funktion des Buttons confirmation auf updateAge
   * @param() keine Parameter
   * @return {void}
   */
  function setAgeFunction() {
    document.getElementById('confirmation').setAttribute('onclick', 'char.updateAge()')
  }
  /**
   * Setzt die onclick Funktion des Buttons confirmation auf updateRace
   * @param() keine Parameter
   * @return {void}
   */
  function setRaceFunction() {
    document.getElementById('confirmation').setAttribute('onclick', 'char.updateRace()')
  }
  /**
   * Setzt die onclick Funktion des Buttons confirmation auf updateGender
   * @param() keine Parameter
   * @return {void}
   */
  function setGenderFunction() {
    document.getElementById('confirmation').setAttribute('onclick', 'char.updateGender()')
  }
  /**
   * Setzt die onclick Funktion des Buttons confirmation auf updateNat
   * @param() keine Parameter
   * @return {void}
   */
  function setNatFunction() {
    document.getElementById('confirmation').setAttribute('onclick', 'char.updateNat()')
  }
  /**
   * Setzt die onclick Funktion des Buttons confirmation auf updateH
   * @param() keine Parameter
   * @return {void}
   */
  function sethFunction() {
    document.getElementById('confirmation').setAttribute('onclick', 'char.updateH()')
  }
  /**
   * Setzt die onclick Funktion des Buttons confirmation auf updateEyes
   * @param() keine Parameter
   * @return {void}
   */
  function setEyesFunction() {
    document.getElementById('confirmation').setAttribute('onclick', 'char.updateEyes()')
  }
  /**
   * Setzt die onclick Funktion des Buttons confirmation auf updateHair
   * @param() keine Parameter
   * @return {void}
   */
  function setHairFunction() {
    document.getElementById('confirmation').setAttribute('onclick', 'char.updateHair()')
  }
  /**
   * Setzt die onclick Funktion des Buttons confirmation auf updateDes
   * @param() keine Parameter
   * @return {void}
   */
  function setDesFunction() {
    document.getElementById('confirmation').setAttribute('onclick', 'char.updateDes()')
  }
/**
 * Funktion die ein HTML-Element entfernt
 * @param {number} elementId - die Id eines HTML-Elements
 * @param() keine Parameter
 * @return {void}
 */
function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.parentNode.removeChild(element.parentNode);
}

/**
 * Funktion die span Tags kreiert und den Namen des Charakters darstellt
 * @param {String} name - der Name des aktuellen Charakters
 * @param {number} id - die Id des aktuellen Charakters
 * @return {void}
 */
function addHtml(name, id) {
    var noteNode = document.createElement("span");
    noteNode.insertAdjacentHTML('afterbegin', '<a href="#characterView" id="' + id + '" data-transition="fade" onClick="displayDataByKey(' + id + '), getData(' + id + ')">' + name + '</a>')
    document.getElementById("CharakterUebersicht").appendChild(noteNode); //display divs  


}
/**
 * Funktion die die Übersichtsseite des Charakter , mit dessen Parametern, erstellt
 * @param {String} name - der Name des aktuellen Charakters
 * @param {String} age - die Id des aktuellen Charakters
 * @param {String} gender - die Id des aktuellen Charakters
 * @param {String} race- die Id des aktuellen Charakters
 * @param {String} nat - die Id des aktuellen Charakters
 * @param {String} h - die Id des aktuellen Charakters
 * @param {String} hair - die Id des aktuellen Charakters
 * @param {String} eyes- die Id des aktuellen Charakters
 * @param {String} des - die Id des aktuellen Charakters
 * @return {void}
 * 
 */
function addHtml2(name, age, gender, race, nat, h, hair, eyes, des) {
    var tableRow = document.createElement("div");
    tableRow.insertAdjacentHTML('afterbegin', '<div class="Header">' + name + '<a href="#Edit" data-transition="fade"><button class="edit" id="name" onclick="setNameFunction()" ><img id="smallEdit" src="img/bearbeitung.png"></button></a></div> <br><div id="Text2">Age: ' + age + ' <a href="#Edit" data-transition="fade"  ><button class="edit" onclick="setAgeFunction()" ><img id="smallEdit" src="img/bearbeitung.png" ></button></a></div><div id="Text2">Gender: ' + gender + ' <a href="#Edit" data-transition="fade" ><button class="edit" onclick="setGenderFunction()"><img id="smallEdit" src="img/bearbeitung.png"></button></a></div><div id="Text2">Race: ' + race + '  <a href="#Edit" data-transition="fade" ><button class="edit" onclick="setRaceFunction()"><img id="smallEdit" src="img/bearbeitung.png"></button></a></div><div id="Text2">Nationality: ' + nat + '  <a href="#Edit" data-transition="fade" ><button class="edit" onclick="setNatFunction()"><img id="smallEdit" src="img/bearbeitung.png"></button></a></div><div id="Text2">Heigth: ' + h + ' <a href="#Edit" data-transition="fade" ><button class="edit" onclick="sethFunction()"><img id="smallEdit" src="img/bearbeitung.png"></button></a></div><div id="Text2">Hair: ' + hair + ' <a href="#Edit" data-transition="fade" ><button class="edit" onclick="setHairFunction()"><img id="smallEdit" src="img/bearbeitung.png"></button></a></div><div id="Text2">Eyes: ' + eyes + ' <a href="#Edit" data-transition="fade" ><button class="edit" onclick="setEyesFunction()"><img id="smallEdit" src="img/bearbeitung.png"></button></a></div><div id="Text2" >Description: ' + des + '  <a href="#Edit" data-transition="fade" ><button class="edit" onclick="setDesFunction()"><img id="smallEdit" src="img/bearbeitung.png"></button></a></div>')
    document.getElementById("contentToRender").appendChild(tableRow);
}
/**
 * Funktion die die Edit Knöpfe anzeigt
 * @param() keine Parameter
 * @return {void}
 */
function displayEditButtons() {
    [...document.getElementsByClassName('edit')].forEach(e => e.style.display = "inline");
}
/**
 * Funktion die die Edit Knöpfe versteckt
 * @param() keine Parameter
 * @return {void}
 */
function hidingEditButtons() {
    [...document.getElementsByClassName('edit')].forEach(e => e.style.display = "inline");
}

/**
 * Funktion die alle Inputs der Charaktererstellung leert
 * @param() keine Parameter
 * @return {void}
 */
function emptyInputs() {
    document.getElementById('name_id').value = '';
    document.getElementById('age_id').value = '';
    document.getElementById('gender_id').value = '';
    document.getElementById('race_id').value = '';
    document.getElementById('nat_id').value = '';
    document.getElementById('h_id').value = '';
    document.getElementById('eyes_id').value = '';
    document.getElementById('hair_id').value = '';
    document.getElementById('des_id').value = '';
}
/**
 * Funktion die den Anfangstext versteckt 
 * @param() keine Parameter
 * @return {void}
 */
function hideStartingText() {
    document.getElementById("anfangstext").style.display = "none";

}

/**
 * Funktion die die Variable name auf den Wert des Inputs name_id setzt und nur zur nächsten Seite weiterleitet wenn name_id einen Wert hat
 * @param() keine Parameter
 * @return {void}
 */
function handleName() {
    charName = document.getElementById('name_id').value;
    //manageButton(charName);
    if (charName === "") {
        alert("You must have a name for your ");
        window.location.replace("#chaCreation1");
    }
    else {
        window.location.replace("#chaCreation2");

    }

};
/**
 * Funktion die die Variable age auf den Wert des Inputs age_id setzt
 * @param() keine Parameter
 * @return {void}
 */
function handleAge() {
    age = document.getElementById('age_id').value;
    console.log("Your age is:" + age);

};
/**
 * Funktion die die Variable gender auf den Wert des Inputs gender_id setzt
 * @param() keine Parameter
 * @return {void}
 */
function handleGender() {
    gender = document.getElementById('gender_id').value;
    console.log("Your gender is:" + gender);

};
/**
 * Funktion die die Variable race auf den Wert des Inputs race_id setzt
 * @param() keine Parameter
 * @return {void}
 */
function handleRace() {
    race = document.getElementById('race_id').value;
    console.log("Your race is:" + race);

};
/**
 * Funktion die die Variable nat auf den Wert des Inputs nat_id setzt
 * @param() keine Parameter
 * @return {void}
 */
function handleNationality() {
    nat = document.getElementById('nat_id').value;
    console.log("Your nationality is:" + nat);

};
/**
 * Funktion die die Variable h auf den Wert des Inputs h_id setzt
 * @param() keine Parameter
 * @return {void}
 */
function handleHeigth() {
    h = document.getElementById('h_id').value;
    console.log("Your heigth is:" + h);

};
/**
 * Funktion die die Variable hair auf den Wert des Inputs hair_id setzt
 * @param() keine Parameter
 * @return {void}
 */
function handleHair() {
    hair = document.getElementById('hair_id').value;
    console.log("Your hair is:" + hair);

};
/**
 * Funktion die die Variable eyes auf den Wert des Inputs eyes_id setzt
 * @param() keine Parameter
 * @return {void}
 */
function handleEyes() {
    eyes = document.getElementById('eyes_id').value;
    console.log("Your eyes are:" + eyes);

};
/**
 * Funktion die die Variable des auf den Wert des Inputs des_id setzt
 * @param() keine Parameter
 * @return {void}
 */
function handleDescription() {
    des = document.getElementById('des_id').value;

    console.log("Your description is:" + des);


};

var chaId = 0;
var char = new Character;
/**
 * Funktion die einen Charakter mit den eingegebenen Parameter erstellt, diesen dann zur Datenbank hinzufügt, addHtml audführt und emptyInputs
 * @param() keine Parameter
 * @return {void}
 */
function createCharakter() {


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
    char.addCharacter(char);
    addHtml(char.name, char.id);
    emptyInputs();
    hideStartingText();
    chaId++;

}

document.getElementById("Anmeldung").addEventListener("click", displayEditButtons);
document.getElementById("deleteButton").addEventListener("click", char.removeCharacter);

var startbutton = document.getElementById("start"),
    dialog = document.getElementById('dialog'),
    Anmeldung = document.getElementById("Anmeldung"),
    Abbruch = document.getElementById("Abbruch");
startbutton.addEventListener('click', zeigeFenster);
Anmeldung.addEventListener('click', schließeFenster);
Abbruch.addEventListener('click', schließeFenster);
/**
 * Funktion die das dialog Fenster anzeigt
 * @param() keine Parameter
 * @return {void}
 */
function zeigeFenster() {
    dialog.showModal();
}
/**
 * Funktion die das dialog Fenster schließt
 * @param() keine Parameter
 * @return {void}
 */
function schließeFenster() {
    dialog.close();

}

document.getElementById("nameAnchor").addEventListener("click", handleName);
document.getElementById("basicInfoAnchor").addEventListener("click", handleAge);
document.getElementById("basicInfoAnchor").addEventListener("click", handleRace);
document.getElementById("basicInfoAnchor").addEventListener("click", handleGender);
document.getElementById("basicInfoAnchor").addEventListener("click", handleNationality);
document.getElementById("appearenceAnchor").addEventListener("click", handleHeigth);
document.getElementById("appearenceAnchor").addEventListener("click", handleHair);
document.getElementById("appearenceAnchor").addEventListener("click", handleEyes);
document.getElementById("descriptionAnchor").addEventListener("click", handleDescription);
document.getElementById("descriptionAnchor").addEventListener("click", createCharakter);






