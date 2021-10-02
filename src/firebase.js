import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBTtGhHPD-wzG7Im_ebkBd3dfOjAbh0kYk",
    authDomain: "auth-dev-44bab.firebaseapp.com",
    databaseURL: "https://auth-dev-44bab-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "auth-dev-44bab",
    storageBucket: "auth-dev-44bab.appspot.com",
    messagingSenderId: "401622559600",
    appId: "1:401622559600:web:546f6bd02aad25e25d3db5"
})

export const auth = app.auth()
export default app