import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCXEUf6ig1PHtN3bOzaRAYQL3RfLOebgG0',
  authDomain: 'cinexperience-26690.firebaseapp.com',
  projectId: 'cinexperience-26690',
  storageBucket: 'cinexperience-26690.appspot.com',
  messagingSenderId: '435402419654',
  appId: '1:435402419654:web:d3750e5cd981c52554d6c7',
  measurementId: 'G-S33NCRGE6S'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
