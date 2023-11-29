//admin@123

$(document).ready(function(){    
    const firebaseConfig = {
        apiKey: "AIzaSyASus6VdBfnycps-Po3Cz4nklJ_90N7V5Q",
        authDomain: "login-and-crud.firebaseapp.com",
        projectId: "login-and-crud",
        storageBucket: "login-and-crud.appspot.com",
        messagingSenderId: "140809077376",
        appId: "1:140809077376:web:9fe76293cea195a8651c65",
        measurementId: "G-EKCSTRGNH8"
      };
      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    $("#login-form").submit(function(e) {
        e.preventDefault();
    });

    $('#submit_data').click(function() {
      login();
    });

    $('#back_button').click(function()
    {
        logout();
    });

    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            window.location = 'admin_portal.html'; //After successful login, user will be redirected to home.html     
            }
        });

  });
  
function login(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(email === "admin@gmail.com")
    {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert(errorMessage);
        });
    }
    
}
function logout()
{
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    }).catch(function(error) {
    // An error happened.
    });
}
