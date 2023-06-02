import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA5mDTlqnPu-XP78VSblZ6Kmc8AOm7RA8U",
  authDomain: "prueba-user-efaf0.firebaseapp.com",
  projectId: "prueba-user-efaf0",
  storageBucket: "prueba-user-efaf0.appspot.com",
  messagingSenderId: "461373980126",
  appId: "1:461373980126:web:194e6418d1f8f001a5b14f",
  measurementId: "G-V13D4VHZT5"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
