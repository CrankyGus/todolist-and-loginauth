import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


//เอา project setting จาก firebase มาใส่
const app = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
})

export const auth = app.auth()
export default app
