/**
 * @author Franziska Rieder
 * @version 1.0.0
 * @file Klasse die einen Charakter darstellt
 */
/**
 * Klasse die einen Charakter darstellt
 */

class Character{

    /**
     * Konstruktor der Klasse aufbaut
     */
    constructor(){
        this.id;
        this.name;
        this.age;
        this.gender;
        this.race; 
        this.nat;
        this.h; 
        this.hair; 
        this.eyes;
        this.des;
    }

     /**
     * Methode die einen Charakter aus der Datenbank lädt
     * @return {void}
     */
    loadCharacters() {
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
     /**
     * Methode die einen Charakter der Datenbank hinzufügt
     * @return {void}
     */
     addCharacter(char) {
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

     /**
     * Methode die einen Charakter aus der Datenbank löscht
     * @return {void}
     */
    removeCharacter() {
      console.log(key);
      hidingEditButtons();
      var request = db.transaction(["one"], "readwrite")
        .objectStore("one")
        .delete(key);
      removeElement(key);
     
      request.oncomplete = function (event) {
        alert(key + "entry has been removed from your database.");
       
    
      };
    }
     /**
     * Methode die den Namen eines Charakters updated
     * @return {void}
     */
    updateName() {
      // Update with cursor.update
     var tx = db.transaction("one", "readwrite");
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
    /**
     * Methode die das Alter eines Charakters updated
     * @return {void}
     */
    updateAge() {
      // Update with cursor.update
      var tx = db.transaction("one", "readwrite");
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

    /**
     * Methode die die Rasse eines Charakters updated
     * @return {void}
     */
    updateRace() {
      // Update with cursor.update
     var tx = db.transaction("one", "readwrite");
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

    /**
     * Methode die das Geschlecht eines Charakters updated
     * @return {void}
     */
    updateGender() {
      // Update with cursor.update
      var tx = db.transaction("one", "readwrite");
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
    /**
     * Methode die die Nationalität eines Charakters updated
     * @return {void}
     */
    updateNat() {
      // Update with cursor.update
      var tx = db.transaction("one", "readwrite");
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

    /**
     * Methode die die Höhe eines Charakters updated
     * @return {void}
     */
    updateH() {
      // Update with cursor.update
      var tx = db.transaction("one", "readwrite");
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

    /**
     * Methode die die Haare eines Charakters updated
     * @return {void}
     */
    updateHair() {
      // Update with cursor.update
      var tx = db.transaction("one", "readwrite");
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

    /**
     * Methode die die Augen eines Charakters updated
     * @return {void}
     */
    updateEyes() {
      // Update with cursor.update
      var tx = db.transaction("one", "readwrite");
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
    /**
     * Methode die die kurze Beschreibung eines Charakters updated
     * @return {void}
     */
    updateDes() {
      // Update with cursor.update
      var tx = db.transaction("one", "readwrite");
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
    
   
 }
