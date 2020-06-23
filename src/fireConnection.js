import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyC1kaZOBjaO4wbCsD3p5lXE2eecREwX-eI",
    authDomain: "iniciandofirebase-12eb9.firebaseapp.com",
    databaseURL: "https://iniciandofirebase-12eb9.firebaseio.com",
    projectId: "iniciandofirebase-12eb9",
    storageBucket: "iniciandofirebase-12eb9.appspot.com",
    messagingSenderId: "23435037090",
    appId: "1:23435037090:web:60794c791d5f52a7fdcafb",
    measurementId: "G-K182T3L4LC"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;