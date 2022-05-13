import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCFto3i6FnZnO9hEOUUtpwVHMSkTPUR_Eg",
  authDomain: "react-recipe-app-e90ec.firebaseapp.com",
  projectId: "react-recipe-app-e90ec",
  storageBucket: "react-recipe-app-e90ec.appspot.com",
  messagingSenderId: "881789585130",
  appId: "1:881789585130:web:a014254831444c67e07993",
  measurementId: "G-JXBN1B3DD1"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }