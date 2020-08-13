import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBllbLYXLIKx2NJ7WoO2mw56CzGcf6TOcI",
  authDomain: "amalon.firebaseapp.com",
  databaseURL: "https://amalon.firebaseio.com",
  projectId: "amalon",
  storageBucket: "amalon.appspot.com",
  messagingSenderId: "1066702053683",
  appId: "1:1066702053683:web:c593e37b20dd3634d79e46",
  measurementId: "G-N5F80V2F12"

});


const auth = firebase.auth();

export  {auth};