import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBi5ZvauvV0_umNCH6pTJh1SVgvCPTXnKo',
  authDomain: 'catch-of-the-day-iqbal-ahmadi.firebaseapp.com',
  databaseURL:
    'https://catch-of-the-day-iqbal-ahmadi-default-rtdb.firebaseio.com',
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
