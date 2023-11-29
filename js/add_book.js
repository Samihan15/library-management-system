$(document).ready(function() {
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
    
    $("#book-form").submit(function(e) {
        e.preventDefault();
    });

    $('#submit').click(function() {
      add_this();
    });

    firebase.auth().onAuthStateChanged(user => {
        if(!user) {
            window.location = 'main_page.html';
            }
    });

});

function add_this()
{
    var BookCode = document.getElementById("book_code").value;
    var BookName = document.getElementById("book_name").value;
    var Author1 = document.getElementById("author1").value;
    var Author2 = document.getElementById("author2").value;
    var Subject = document.getElementById("Subject").value;
    var tags = document.getElementById("tags").value;
    var db = firebase.firestore();
 
    db.collection("books").doc(BookCode).set({
        bookcode: BookCode,
        bookname : BookName,
        author1: Author1,
        author2: Author2,
        subject : Subject,
        tags : tags
    })
    .then(function() {
        console.log("Document successfully written!");
        window.alert("Successfully Book Added");
        window.location = 'admin_portal.html';
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}