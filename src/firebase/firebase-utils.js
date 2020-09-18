import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyBrgDISA1lyXTIsj2JPVyxULHWjFxgsjNs",
    authDomain: "crwn-db-f0379.firebaseapp.com",
    databaseURL: "https://crwn-db-f0379.firebaseio.com",
    projectId: "crwn-db-f0379",
    storageBucket: "crwn-db-f0379.appspot.com",
    messagingSenderId: "626795678640",
    appId: "1:626795678640:web:26d08a63536302be396475",
    measurementId: "G-LCJPV3LRH1"
  }

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt : 'select_accoun'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;




