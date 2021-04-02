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

  export const createUserProfileDocument = async (userAuth, additionalData) => { 
    // if there's no user, don't even start doing anything 
      if(!userAuth) return; 

      // get the reference to the object with the id supplied 
      const userRef = firestore.doc(`users/${userAuth.uid}`); 
      console.log(await firestore.collection('users').get()); 

      // get a snapshot using the crud methods from the reference that we got 
      const snapShot = await userRef.get(); 

      // use the exists property of the snapshot object received. If there's no shapshot there, then we create it. 
      if(!snapShot.exists){  
          // destructure the dislplay name and email properties from the userauth 
          const {displayName, email} = userAuth; 
          //create a new data object for the time that this user was created 
          const createdAt = new Date();  

          // sinc what we are doing is an asynchronous request, we wrap it in a try catch block 
          try{ 
              await userRef.set({ 
                displayName,
                email,
                createdAt, 
                ...additionalData
              })
          } catch(error){ 
              console.log('error creating user', error.message); 
          }
      } 
      // return the userRef because we might want to use the user object to do other things. 

      return userRef; 

  }

  firebase.initializeApp(config);  

  export const auth = firebase.auth(); 
  export const firestore = firebase.firestore(); 

  const provider = new firebase.auth.GoogleAuthProvider();  
  provider.setCustomParameters({prompt: 'select_account'});  
  export const signInWithGoogle = () => auth.signInWithPopup(provider); 

  export default firebase; 