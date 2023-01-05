import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDgC_KhTwW4ttRGkZD67O-ul6yealBCWGY',
  authDomain: 'erudite-button-260119.firebaseapp.com',
  databaseURL: 'https://erudite-button-260119.firebaseio.com',
  projectId: 'erudite-button-260119',
  storageBucket: 'erudite-button-260119.appspot.com',
  messagingSenderId: '81405867028',
  appId: '1:81405867028:web:51fe8559f03c6a2d942301',
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getDatabase(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }
