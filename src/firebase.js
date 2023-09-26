import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDspRFgAC45iXuumv5yWNuuDByQo7iXQoU",
  authDomain: "react-user-info-8fe43.firebaseapp.com",
  projectId: "react-user-info-8fe43",
  storageBucket: "react-user-info-8fe43.appspot.com",
  messagingSenderId: "1099190766104",
  appId: "1:1099190766104:web:8bfa57478ad2e432fa116d"
};

// Initialize Firebasec
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);