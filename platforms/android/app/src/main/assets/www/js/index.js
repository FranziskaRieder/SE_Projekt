/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);





    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        console.log("device is not ready");
        this.receivedEvent('deviceready');

        console.log("device is ready");
        document.getElementById("cameraTakePicture").addEventListener("click", imageCapture);





    },

    // Update DOM on a Received Event

    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);




        console.log('Received Event: ' + id);
    }
};

app.initialize();


function getImageFile  (imagepath) {
    // Create XHR
    var xhr = new XMLHttpRequest(),
        blob;

    xhr.open("GET", imagepath, true);
    // Set the responseType to blob
    xhr.responseType = "blob";

    xhr.addEventListener("load", function () {
        if (xhr.status === 200) {
            console.log("Image retrieved");
            
            // Blob as response
            blob = xhr.response;
            console.log("Blob:" + blob);

            // Put the received blob into IndexedDB
            putElephantInDb(blob);
        }
    }, false);
    // Send XHR
    xhr.send();
}
var chamKey = 1;
function putElephantInDb  (blob) {
    console.log("Putting elephants in IndexedDB");

    // Open a transaction to the database
    var transaction = myDB2.transaction(["two"], 'readwrite');

    // Put the blob into the dabase
    var put = transaction.objectStore("two").put({blob});
    chamKey++;
    getDBLength();
};
function imageCapture() {
    var options = {
       limit: 1
    };
    navigator.device.capture.captureImage(onSuccess, onError, options);
 
    function onSuccess(mediaFiles) {
       var i, path, len;
       for (i = 0, len = mediaFiles.length; i < len; i += 1) {
          path = mediaFiles[i].fullPath;
          name = mediaFiles[i].localURL;
          getImageFile(name);
          console.log(mediaFiles);
          addPics(path);
          
       }
    }
 
    function onError(error) {
       navigator.notification.alert('Error!');
    }
 }
 function loadPics() {
   
    
      var transaction = myDB2.transaction(['two'], 'readonly');
    transaction.objectStore('two').get(1).onsuccess = function (event) {
      var imgFile = event.target.result;
      console.log(imgFile);
       
  
        // Get window.URL object
        var URL = window.URL || window.webkitURL;
  
        // Create and revoke ObjectURL
        var imgURL = URL.createObjectURL(imgFile.blob);
  
        // Set img src to ObjectURL
       addPics(imgURL);
        // Revoking ObjectURL
        URL.revokeObjectURL(imgURL);
    
      
    };
  }
 








