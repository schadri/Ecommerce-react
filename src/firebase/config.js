import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { 
  GoogleAuthProvider, 
  getAuth, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut } from 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
})

export const db = firebase.firestore();
export const auth = getAuth(app)

export const getActualDate = () => {
  return firebase.firestore.Timestamp.fromDate(new Date());
}

export const signInWithEmailAndPasswordFirebase = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
}

export const LoginWithGooglePopout = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
}

export const logout = async () => {
  return await signOut(auth);
}