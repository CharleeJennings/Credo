import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB5ka7C-M-SUOT650seTZiFnQ_A0clYHC4",
    authDomain: "credo-local.firebaseapp.com",
    databaseURL: "https://credo-local.firebaseio.com",
    projectId: "credo-local",
    storageBucket: "credo-local.appspot.com",
    messagingSenderId: "388403717742",
    appId: "1:388403717742:web:1a6038d7a773528a75e87f"
  };
  // Initialize Firebase
  const flamebase = firebase.initializeApp(firebaseConfig);

  export default flamebase;