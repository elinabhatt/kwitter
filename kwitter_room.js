var firebaseConfig = {
  apiKey: "AIzaSyCBnZEVxxK1PVkJjAfZJD3vCRvFLCNHHl0",
  authDomain: "class93-95.firebaseapp.com",
  databaseURL: "https://class93-95-default-rtdb.firebaseio.com",
  projectId: "class93-95",
  storageBucket: "class93-95.appspot.com",
  messagingSenderId: "14393949313",
  appId: "1:14393949313:web:23072a6265de97ee83e180",
  measurementId: "G-19GD0E284Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
 console.log("Room Name - " + Room_names)
 row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;

  //End code
  });});}
getData();



function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebaseConfig.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    
    localStorage.setItem("room name", room_name);
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)

{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"
}

function logout() {
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
    window.location = "kwitter.html";
}