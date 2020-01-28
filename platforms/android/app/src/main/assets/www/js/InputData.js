var charName;
var age;
var gender;
var race;
var nat;
var h;
var hair;
var eyes;
var des;



function handleName() {
    charName = document.getElementById('name_id').value;
    //manageButton(charName);
    if(charName === ""){
        alert("You must have a name for your ");
        window.location.replace("#chaCreation1");
    }
    else{
        window.location.replace("#chaCreation2");

    }
 
    };
function handleAge() {
age = document.getElementById('age_id').value;
console.log("Your age is:" + age);

};
function handleGender() {
gender = document.getElementById('gender_id').value;
console.log("Your gender is:" + gender);

};
function handleRace() {
race = document.getElementById('race_id').value;
console.log("Your race is:" + race);

};
function handleNationality() {
nat = document.getElementById('nat_id').value;
console.log("Your nationality is:" + nat);

};
function handleHeigth() {
h = document.getElementById('h_id').value;
console.log("Your heigth is:" + h);

};
function handleHair() {
hair = document.getElementById('hair_id').value;
console.log("Your hair is:" + hair);

};
function handleEyes() {
eyes = document.getElementById('eyes_id').value;
console.log("Your eyes are:" + eyes);

};
function handleDescription() {
des = document.getElementById('des_id').value;

console.log("Your description is:" + des);


};
