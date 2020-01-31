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



var myDB2;
var databaseName = 'myDB2';
var databaseVersion = 1;
var dbReq = window.indexedDB.open(databaseName, databaseVersion);

dbReq.onupgradeneeded = function (event) {
  // Set the db variable to our database so we can use it!  
  myDB2 = event.target.result;

  // Create an object store named notes. Object stores
  // in databases are where data are stored.

  let cameradatabase = myDB2.createObjectStore('two' , {keyPath: 'key', autoIncrement: true});



}
dbReq.onsuccess = function (event) {
  myDB2 = event.target.result;

}

dbReq.onerror = function (event) {
  alert('error opening database ' + event.target.errorCode);
}
var dbLength;
function getDBLength (){
  var transaction = myDB2.transaction(['two'], 'readonly');
  var objectStore = transaction.objectStore('two');
      
  var countRequest = objectStore.count();
  countRequest.onsuccess = function() {
    console.log(countRequest.result);
    dbLength = countRequest.result;
    
  }
}






