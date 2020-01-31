/**
 * @author Franziska Rieder
 * @version 1.0.0
 * @file Erzeugt die Indexeddb
 */

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
dbReq.onupgradeneeded = function (event) {
  // Set the db variable to our database so we can use it!  
  db = event.target.result;

  // Create an object store named notes. Object stores
  // in databases are where data are stored.
  let database = db.createObjectStore('one', { keyPath: "char.id" });
  



}
dbReq.onsuccess = function (event) {
  db = event.target.result;

}

dbReq.onerror = function (event) {
  alert('error opening database ' + event.target.errorCode);
}
/**
    * Methode die alle Charakter aus der Datenbank lädt
    * @param() keine Parameter
    * @return {void}
    */
function loadCharacters() {
  transaction = db.transaction(['one'], "readonly");
  let store = transaction.objectStore('one');
  store.openCursor().onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      addHtml(cursor.value.char.name, cursor.value.char.id);
      cursor.continue();
      chaId = cursor.value.char.id;
      chaId++;
      loadPics();
      hideStartingText();

    } else {
      console.log('Entries all displayed.');
    }
  };
}

/**
 * Setzt die Variable key auf die aktuelle Charakter Id
 * @param {number} id - die Id des aktuellen Charakters
 * @return {void}
 */
function getKey(id) {
  var transaction = db.transaction('one', 'readwrite');
  var store = transaction.objectStore('one').get(id);


  store.onsuccess = function (e) {

    var result = e.target.result;
    key = id;

  };
}
/**
 * Erstellt dynamisch die Charakter Ansicht wenn man den Character anclickt 
 * @param {number} id - die Id des aktuellen Charakters
 * @return {void}
 */
function displayDataByKey(id) {
  document.getElementById("contentToRender").innerHTML = "";
  var transaction = db.transaction(['one'], 'readonly');
  let store = transaction.objectStore('one');

  store.openCursor(id).onsuccess = function (event) {
    var cursor = event.target.result;
    if (cursor) {
      addHtml2(cursor.value.char.name, cursor.value.char.age, cursor.value.char.gender, cursor.value.char.race, cursor.value.char.nat, cursor.value.char.h, cursor.value.char.hair, cursor.value.char.eyes, cursor.value.char.des);

      cursor.continue();
    } else {
      console.log('Entries all displayed.');
    }
  }
};












