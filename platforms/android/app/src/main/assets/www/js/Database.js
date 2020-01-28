//prefixes of implementation that we want to test
window.indexedDB = window.indexedDB || window.mozIndexedDB ||
  window.webkitIndexedDB || window.msIndexedDB;



//prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction ||
  window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange ||
  window.msIDBKeyRange

if (!window.indexedDB) {
  window.alert("Your browser doesn't support a stable version of IndexedDB.")
}



var db;
var databaseName = 'myDB';
var databaseVersion = 1;
var dbReq = window.indexedDB.open(databaseName, databaseVersion);
var key;
var attribute = "";
dbReq.onupgradeneeded = function (event) {
  // Set the db variable to our database so we can use it!  
  db = event.target.result;

  // Create an object store named notes. Object stores
  // in databases are where data are stored.
  let notes = db.createObjectStore('one', { keyPath: "char.id" });
}
dbReq.onsuccess = function (event) {
  db = event.target.result;

}

dbReq.onerror = function (event) {
  alert('error opening database ' + event.target.errorCode);
}

function loadCharacters() {
  let tx = db.transaction(['one'], "readonly");
  let store = tx.objectStore('one');
  store.openCursor().onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      addHtml(cursor.value.char.name, cursor.value.char.id);
      cursor.continue();
      chaId = cursor.value.char.id;
      chaId++;
      hideStartingText();

    } else {
      console.log('Entries all displayed.');
    }
  };
}

function addCharacter(char) {
  // Start a database transaction and get the notes object store
  let tx = db.transaction(['one'], 'readwrite');
  let store = tx.objectStore('one');

  // Put the sticky note into the object store
  let note = { char };
  store.add(note);

  // Wait for the database transaction to complete
  tx.oncomplete = function () { console.log('stored Charakter!') }
  tx.onerror = function (event) {
    alert('error storing note ' + event.target.errorCode);
  }
}
dbReq.onsuccess = function (event) {
  db = event.target.result;

}

function getData(id) {
  var transaction = db.transaction('one', 'readwrite');
  var store = transaction.objectStore('one').get(id);


  store.onsuccess = function (e) {

    var rd = e.target.result;
    key = id;

  };
}

function displayDataByKey(id) {
  document.getElementById("contentToRender").innerHTML = "";
  var transaction = db.transaction(['one'], 'readonly');
  let store = transaction.objectStore('one');

  store.openCursor(id).onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      addHtml2(cursor.value.char.name,cursor.value.char.age,cursor.value.char.gender,cursor.value.char.race,cursor.value.char.nat,cursor.value.char.h,cursor.value.char.hair,cursor.value.char.eyes,cursor.value.char.des);

      cursor.continue();
    } else {
      console.log('Entries all displayed.');
    }
  }
};

function remove() {
  console.log(key);
  var request = db.transaction(["one"], "readwrite")
    .objectStore("one")
    .delete(key);
  removeElement(key);

  request.oncomplete = function (event) {
    alert(key + "entry has been removed from your database.");

  };
}
function setNameFunction(){
  document.getElementById('confirmation').setAttribute('onclick','updateName()')
}
function setAgeFunction(){
  document.getElementById('confirmation').setAttribute('onclick','updateAge()')
}
function setRaceFunction(){
  document.getElementById('confirmation').setAttribute('onclick','updateRace()')
}
function setGenderFunction(){
  document.getElementById('confirmation').setAttribute('onclick','updateGender()')
}
function setNatFunction(){
  document.getElementById('confirmation').setAttribute('onclick','updateNat()')
}
function sethFunction(){
  document.getElementById('confirmation').setAttribute('onclick','updateH()')
}
function seteyesFunction(){
  document.getElementById('confirmation').setAttribute('onclick','updateEyes()')
}
function sethairFunction(){
  document.getElementById('confirmation').setAttribute('onclick','updateHair()')
}
function setdesFunction(){
  document.getElementById('confirmation').setAttribute('onclick','updateDes()')
}

function updateName() {
  // Update with cursor.update
  tx = db.transaction("one", "readwrite");
  var store = tx.objectStore("one");
  store.openCursor(key).onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      cursor.value.char.name = document.getElementById('edit_id').value;
      cursor.update(cursor.value);
      displayDataByKey(key)
      hidingEditButtons();
      var span = document.getElementById(cursor.value.char.id);
      span.innerHTML = cursor.value.char.name;
      console.log(span.innerHTML)
      

    };
  }
}
function updateAge() {
  // Update with cursor.update
  tx = db.transaction("one", "readwrite");
  var store = tx.objectStore("one");
  store.openCursor(key).onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      cursor.value.char.age = document.getElementById('edit_id').value;
      cursor.update(cursor.value);
      displayDataByKey(key)
      hidingEditButtons();
    };
  }
}
function updateRace() {
  // Update with cursor.update
  tx = db.transaction("one", "readwrite");
  var store = tx.objectStore("one");
  store.openCursor(key).onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      cursor.value.char.race = document.getElementById('edit_id').value;
      cursor.update(cursor.value);
      displayDataByKey(key)
      hidingEditButtons();
    };
  }
}
function updateGender() {
  // Update with cursor.update
  tx = db.transaction("one", "readwrite");
  var store = tx.objectStore("one");
  store.openCursor(key).onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      cursor.value.char.gender = document.getElementById('edit_id').value;
      cursor.update(cursor.value);
      displayDataByKey(key)
      hidingEditButtons();
    };
  }
}
function updateNat() {
  // Update with cursor.update
  tx = db.transaction("one", "readwrite");
  var store = tx.objectStore("one");
  store.openCursor(key).onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      cursor.value.char.nat = document.getElementById('edit_id').value;
      cursor.update(cursor.value);
      displayDataByKey(key)
      hidingEditButtons();
    };
  }
}
function updateH() {
  // Update with cursor.update
  tx = db.transaction("one", "readwrite");
  var store = tx.objectStore("one");
  store.openCursor(key).onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      cursor.value.char.h = document.getElementById('edit_id').value;
      cursor.update(cursor.value);
      displayDataByKey(key)
      hidingEditButtons();
    };
  }
}
function updateHair() {
  // Update with cursor.update
  tx = db.transaction("one", "readwrite");
  var store = tx.objectStore("one");
  store.openCursor(key).onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      cursor.value.char.hair = document.getElementById('edit_id').value;
      cursor.update(cursor.value);
      displayDataByKey(key)
      hidingEditButtons();
    };
  }
}
function updateEyes() {
  // Update with cursor.update
  tx = db.transaction("one", "readwrite");
  var store = tx.objectStore("one");
  store.openCursor(key).onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      cursor.value.char.eyes = document.getElementById('edit_id').value;
      cursor.update(cursor.value);
      displayDataByKey(key)
      hidingEditButtons();
    };
  }
}
function updateDes() {
  // Update with cursor.update
  tx = db.transaction("one", "readwrite");
  var store = tx.objectStore("one");
  store.openCursor(key).onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      cursor.value.char.des = document.getElementById('edit_id').value;
      cursor.update(cursor.value);
      displayDataByKey(key)
      hidingEditButtons();
    };
  }
}









