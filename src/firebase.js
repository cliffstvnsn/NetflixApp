import firebase from './firebase'


//key for loggin into firebase
const firebaseConfig = {
    apiKey: "AIzaSyBZeHWzl-WyhaPUUIm9EZL9H9K3IMAmXPk",
    authDomain: "netflix-project-cb112.firebaseapp.com",
    projectId: "netflix-project-cb112",
    storageBucket: "netflix-project-cb112.appspot.com",
    messagingSenderId: "685134205464",
    appId: "1:685134205464:web:592e332a51aaac45b3a96d"
};

//this takes the login and initializes it to application
const firebaseApp = firebase.initializeApp(firebaseConfig);
//this will be the firebase database: firestore, real time database,
//keeps track of what the users subscription is
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;