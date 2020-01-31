/**
 * @author Franziska Rieder
 * @version 1.0.0
 * @file Klasse die einen Charakter darstellt
 */
/**
 * Klasse die einen Charakter darstellt
 */

class Character {

  /**
   * Konstruktor der Klasse aufbaut
   */
  constructor() {
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
    this.bilder;
  }

  /**
  * Methode die einen Charakter der Datenbank hinzufügt
  * @param {Object} char - Eine Instanz der Klasse Character 
  * @return {void}
  */
  addCharacter(char) {
    let transaction = db.transaction(['one'], 'readwrite');
    let store = transaction.objectStore('one');
    let character = { char };
    store.add(character);

    // Wait for the database transaction to complete
    transaction.oncomplete = function () { console.log('stored Charakter!') }
    transaction.onerror = function (event) {
      alert('error storing note ' + event.target.errorCode);
    }
  }

  /**
  * Methode die einen Charakter aus der Datenbank löscht
  * @param() keine Parameter
  * @return {void}
  */
  removeCharacter() {
    console.log(key);
    hidingEditButtons();
    var transaction = db.transaction(["one"], "readwrite")
      .objectStore("one")
      .delete(key);
    removeElement(key);
    schließeFenster();
    transaction.oncomplete = function (event) {
      alert(key + "entry has been removed from your database.");


    };
  }
  /**
  * Methode die den Namen eines Charakters updated
  * @param() keine Parameter
  * @return {void}
  */
  updateName() {
    // Update with cursor.update
    var transaction = db.transaction("one", "readwrite");
    var store = transaction.objectStore("one");
    store.openCursor(key).onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {
        cursor.value.char.name = document.getElementById('edit_id').value;
        cursor.update(cursor.value);
        displayDataByKey(key)
        hidingEditButtons();
        var span = document.getElementById(cursor.value.char.id);
        span.innerHTML = cursor.value.char.name;
        console.log(span.innerHTML);
        document.getElementById('edit_id').value = "";


      };
    }
  }
  /**
   * Methode die das Alter eines Charakters updated
   * @param() keine Parameter
   * @return {void}
   */
  updateAge() {
    // Update with cursor.update
    var transaction = db.transaction("one", "readwrite");
    var store = transaction.objectStore("one");
    store.openCursor(key).onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {
        cursor.value.char.age = document.getElementById('edit_id').value;
        cursor.update(cursor.value);
        displayDataByKey(key)
        hidingEditButtons();
        document.getElementById('edit_id').value = "";
      };
    }
  }

  /**
   * Methode die die Rasse eines Charakters updated
   * @param() keine Parameter
   * @return {void}
   */
  updateRace() {
    // Update with cursor.update
    var transaction = db.transaction("one", "readwrite");
    var store = transaction.objectStore("one");
    store.openCursor(key).onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {
        cursor.value.char.race = document.getElementById('edit_id').value;
        cursor.update(cursor.value);
        displayDataByKey(key)
        hidingEditButtons();
        document.getElementById('edit_id').value = "";
      };
    }
  }

  /**
   * Methode die das Geschlecht eines Charakters updated
   * @param() keine Parameter
   * @return {void}
   */
  updateGender() {
    // Update with cursor.update
    var transaction = db.transaction("one", "readwrite");
    var store = transaction.objectStore("one");
    store.openCursor(key).onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {
        cursor.value.char.gender = document.getElementById('edit_id').value;
        cursor.update(cursor.value);
        displayDataByKey(key)
        hidingEditButtons();
        document.getElementById('edit_id').value = "";
      };
    }
  }
  /**
   * Methode die die Nationalität eines Charakters updated
   * @param() keine Parameter
   * @return {void}
   */
  updateNat() {
    // Update with cursor.update
    var transaction = db.transaction("one", "readwrite");
    var store = transaction.objectStore("one");
    store.openCursor(key).onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {
        cursor.value.char.nat = document.getElementById('edit_id').value;
        cursor.update(cursor.value);
        displayDataByKey(key)
        hidingEditButtons();
        document.getElementById('edit_id').value = "";
      };
    }
  }

  /**
   * Methode die die Höhe eines Charakters updated
   * @param() keine Parameter
   * @return {void}
   */
  updateH() {
    // Update with cursor.update
    var transaction = db.transaction("one", "readwrite");
    var store = transaction.objectStore("one");
    store.openCursor(key).onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {
        cursor.value.char.h = document.getElementById('edit_id').value;
        cursor.update(cursor.value);
        displayDataByKey(key)
        hidingEditButtons();
        document.getElementById('edit_id').value = "";
      };
    }
  }

  /**
   * Methode die die Haare eines Charakters updated
   * @param() keine Parameter
   * @return {void}
   */
  updateHair() {
    // Update with cursor.update
    var transaction = db.transaction("one", "readwrite");
    var store = transaction.objectStore("one");
    store.openCursor(key).onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {
        cursor.value.char.hair = document.getElementById('edit_id').value;
        cursor.update(cursor.value);
        displayDataByKey(key)
        hidingEditButtons();
        document.getElementById('edit_id').value = "";
      };
    }
  }

  /**
   * Methode die die Augen eines Charakters updated
   * @param() keine Parameter
   * @return {void}
   */
  updateEyes() {
    // Update with cursor.update
    var transaction = db.transaction("one", "readwrite");
    var store = transaction.objectStore("one");
    store.openCursor(key).onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {
        cursor.value.char.eyes = document.getElementById('edit_id').value;
        cursor.update(cursor.value);
        displayDataByKey(key)
        hidingEditButtons();
        document.getElementById('edit_id').value = "";
      };
    }
  }
  /**
   * Methode die die kurze Beschreibung eines Charakters updated
   * @param() keine Parameter
   * @return {void}
   */
  updateDes() {
    // Update with cursor.update
    var transaction = db.transaction("one", "readwrite");
    var store = transaction.objectStore("one");
    store.openCursor(key).onsuccess = function (event) {
      var cursor = event.target.result;
      if (cursor) {
        cursor.value.char.des = document.getElementById('edit_id').value;
        cursor.update(cursor.value);
        displayDataByKey(key)
        hidingEditButtons();
        document.getElementById('edit_id').value = "";
      };
    }
  }


}
