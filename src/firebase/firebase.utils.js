import firebase  from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD381i9BoTAn_8RvJQRgAt8SJyhMerrZl0",
    authDomain: "crwn-db-2be09.firebaseapp.com",
    projectId: "crwn-db-2be09",
    storageBucket: "crwn-db-2be09.appspot.com",
    messagingSenderId: "1062145970273",
    appId: "1:1062145970273:web:7d96c2c7a967c8bcee1a20",
    measurementId: "G-T39ZV6ZDXK"
  };

  export const createUserProfileDocument = async (userAuth, additionalDataObject) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalDataObject
            })
        }catch(error){
            console.log("Error creating user: ", error)
        }
    }
    return userRef;
}

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;