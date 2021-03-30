import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyBPF3UNaw_xhOQQ0os_CVHuU2VbS9amRug",
    authDomain: "crown-db-1ab9c.firebaseapp.com",
    projectId: "crown-db-1ab9c",
    storageBucket: "crown-db-1ab9c.appspot.com",
    messagingSenderId: "573852022963",
    appId: "1:573852022963:web:e283d3704234bb60d858c6",
    measurementId: "G-ZEWGG5GDWJ"
  }; 

  firebase.initializeApp(config);  

  export const auth = firebase.auth(); 
  export const firestore = firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider();  
  provider.setCustomParameters({prompt: 'select_account'});  
  export const signInWithGoogle = () => auth.signInWithPopup(provider); 

  export default firebase; 