import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = ({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
});

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();

