// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBlr_JwtCIK6NhgC7QTVIb5U04ezlHbLD8",
    authDomain: "messenger-clone-c1bba.firebaseapp.com",
    projectId: "messenger-clone-c1bba",
    storageBucket: "messenger-clone-c1bba.appspot.com",
    messagingSenderId: "1095484599962",
    appId: "1:1095484599962:web:52594d6cd39e2aeed57923",
    measurementId: "G-PQL87MKK57"
});

const db=firebaseApp.firestore();
export default db;