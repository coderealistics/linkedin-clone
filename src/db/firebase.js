import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDOYjBcOYDhHncCwOYG-XSnFijSBICu0UI",
    authDomain: "clone-c0007.firebaseapp.com",
    projectId: "clone-c0007",
    storageBucket: "clone-c0007.appspot.com",
    messagingSenderId: "739785903010",
    appId: "1:739785903010:web:6116893ffb54aa033240fb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth};
