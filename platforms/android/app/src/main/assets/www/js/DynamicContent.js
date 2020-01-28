
function removeElement(elementId) {
    // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.parentNode.removeChild(element.parentNode);
}

 
function addHtml(name,id){
    var noteNode = document.createElement("span");
            noteNode.insertAdjacentHTML('afterbegin', '<a href="#characterView" id="'+id+'" data-transition="fade" onClick="displayDataByKey('+id+'), getData('+id+')">' + name +'</a>' ) 
            document.getElementById("CharakterUebersicht").appendChild(noteNode); //display divs  


        }
function addHtml2(name,age,gender,race,nat, h,hair,eyes, des){
    var nameString = "name";
    var tableRow = document.createElement("div");
    tableRow.insertAdjacentHTML('afterbegin', '<div class="Header">' + name + '<a href="#Edit" data-transition="fade"><button class="edit" id="name" onclick="setNameFunction()" ><img id="smallEdit" src="img/bearbeitung.png"></button></a></div> <br><div id="Text2">Age: ' + age + ' <a href="#Edit" data-transition="fade"  ><button class="edit" onclick="setAgeFunction()" ><img id="smallEdit" src="img/bearbeitung.png" ></button></a></div><div id="Text2">Gender: ' + gender + ' <a href="#Edit" data-transition="fade" ><button class="edit" onclick="setGenderFunction()"><img id="smallEdit" src="img/bearbeitung.png"></button></a></div><div id="Text2">Race: ' + race + '  <a href="#Edit" data-transition="fade" ><button class="edit" onclick="setRaceFunction()"><img id="smallEdit" src="img/bearbeitung.png"></button></a></div><div id="Text2">Nationality: ' + nat + '  <a href="#Edit" data-transition="fade" ><button class="edit" onclick="setNatFunction()"><img id="smallEdit" src="img/bearbeitung.png"></button></a></div><div id="Text2">Heigth: ' + h + ' <a href="#Edit" data-transition="fade" ><button class="edit" onclick="sethFunction()"><img id="smallEdit" src="img/bearbeitung.png"></button></a></div><div id="Text2">Hair: ' + hair + ' <a href="#Edit" data-transition="fade" ><button class="edit" onclick="setHairFunction()"><img id="smallEdit" src="img/bearbeitung.png"></button></a></div><div id="Text2">Eyes: ' + eyes + ' <a href="#Edit" data-transition="fade" ><button class="edit" onclick="setEyesFunction()"><img id="smallEdit" src="img/bearbeitung.png"></button></a></div><div id="Text2" >Description: ' + des + '  <a href="#Edit" data-transition="fade" ><button class="edit" onclick="setDesFunction()"><img id="smallEdit" src="img/bearbeitung.png"></button></a></div>')
 document.getElementById("contentToRender").appendChild(tableRow);
}

function displayEditButtons(){
[...document.getElementsByClassName('edit')].forEach(e => e.style.display = "inline");
}
function hidingEditButtons(){
    [...document.getElementsByClassName('edit')].forEach(e => e.style.display = "inline");
    }

    function manageButton(txt) {
        var bt = document.getElementById('nameButton');
        
        if (txt != '') {
            bt.disabled = false;
            
            
        }
        else {
            
            bt.disabled = true;

            alert("You must have a name for your character")
        }
    } 
    
function emptyInputs(){
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
        
function hideStartingText(){
document.getElementById("anfangstext").style.display = "none";
   
}