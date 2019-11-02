import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBr3T5xUwClPmzc5Xx3cPDiKEGRN8Tskis",
    authDomain: "credo-d6c6b.firebaseapp.com",
    databaseURL: "https://credo-d6c6b.firebaseio.com",
    projectId: "credo-d6c6b",
    storageBucket: "credo-d6c6b.appspot.com",
    messagingSenderId: "1050656781573",
    appId: "1:1050656781573:web:bb7075360a1d84a3ad336c",
    measurementId: "G-167F19728D"
};

// Initialize Firebase
const flamebase = firebase.initializeApp(firebaseConfig);

export default flamebase;