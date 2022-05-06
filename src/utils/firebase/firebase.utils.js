//1: Import InitializeApp
import { initializeApp } from "firebase/app";
//4: I need to import methods from firebase/auth
//These are getAuth, signInWithRedirect, SignInWithPopUp and GoogleAuthProvider,
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
//11: Database section: Im instansiating database

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

//2: My web apps Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfWykk7JtqMf1ddWwAb-7Tnm1tip-IIWU",
  authDomain: "crwn-clothing-db-99eca.firebaseapp.com",
  projectId: "crwn-clothing-db-99eca",
  storageBucket: "crwn-clothing-db-99eca.appspot.com",
  messagingSenderId: "1066515723586",
  appId: "1:1066515723586:web:2d06bad897fe8833b3c4db",
};

//3:  Im Initializing fireBase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopUp = () => {
  return signInWithPopup(auth, provider);
};
export const signInWithGoogleRedirect = () => {
  return signInWithRedirect(auth, provider);
};

export const db = getFirestore();



export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const  signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password ) return;
  return await signInWithEmailAndPassword(auth,email,password);
};

export const signOutUser = async () =>   await signOut(auth);


export const onAuthStateChangedListener = (callback) => 
onAuthStateChanged(auth,callback);
    
     
  