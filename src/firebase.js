// Substitua os valores abaixo pelos dados do seu projeto Firebase
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDa0Tf45jn-iIkZU3gThDM65iDL_oaTmf4",
  authDomain: "pucpr-web-dev-494702.firebaseapp.com",
  projectId: "pucpr-web-dev-494702",
  storageBucket: "pucpr-web-dev-494702.firebasestorage.app",
  messagingSenderId: "1023454583916",
  appId: "1:1023454583916:web:0e0c959430b68e8d754c49"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
