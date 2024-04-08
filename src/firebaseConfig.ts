import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyA79V2H0Sc-MNTySCFgl1dNZ-M76cZg0Tk',
  authDomain: 'comentaki-07.firebaseapp.com',
  databaseURL: 'https://comentaki-07-default-rtdb.firebaseio.com',
  projectId: 'comentaki-07',
  storageBucket: 'comentaki-07.appspot.com',
  messagingSenderId: '602924042502',
  appId: '1:602924042502:web:5894872bfd75b2e9e97687',
} as const

const firebaseApp = initializeApp(firebaseConfig)
const database = getDatabase(firebaseApp)
const auth = getAuth(firebaseApp)

export { auth, database, firebaseApp }
