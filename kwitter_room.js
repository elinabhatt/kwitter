
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB8KW3n43hYRUZa-vXZ7AxcEko_TJN2Ulo",
      authDomain: "kwitter-a3041.firebaseapp.com",
      databaseURL: "https://kwitter-a3041-default-rtdb.firebaseio.com",
      projectId: "kwitter-a3041",
      storageBucket: "kwitter-a3041.appspot.com",
      messagingSenderId: "468779149068",
      appId: "1:468779149068:web:fc2f5c83538d40fe9e4b29",
      measurementId: "G-L9F0G83J26"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
  
                                         
      
      //End code
      });});}
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "kwitter.html";
      }