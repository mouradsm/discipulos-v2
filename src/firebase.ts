import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCVlKbWO_eXYRcd5CXjlaWq85DWeiPpEuQ",
  authDomain: "christian-manager-develop.firebaseapp.com",
  databaseURL: "https://christian-manager-develop.firebaseio.com",
  projectId: "christian-manager-develop",
  storageBucket: "christian-manager-develop.appspot.com",
  messagingSenderId: "157784816613",
  appId: "1:157784816613:web:f4f4a2e527f7c8669f0d0c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const Auth = firebase.auth.Auth
const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()

export default { db, auth, Auth, GoogleAuthProvider }