import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyBAF0hB1AcdGqBLk-N7SwINqfV_iQBnkWk",
    authDomain: "site-thaylucena.firebaseapp.com",
    projectId: "site-thaylucena",
    storageBucket: "site-thaylucena.appspot.com",
    messagingSenderId: "689364176292",
    appId: "1:689364176292:web:1e29312e9edb4dfa424531",
    measurementId: "G-L306SFSL61"
  };

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export default firebase;