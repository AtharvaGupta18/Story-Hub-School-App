import * as firebase from 'firebase';
require('@firebase/firestore')
  var firebaseConfig = {
    apiKey: "AIzaSyD_7lAEah-jDC_cEXBb8m6yHXMhBbv5M5k",
    authDomain: "story-hub-408ed.firebaseapp.com",
    projectId: "story-hub-408ed",
    storageBucket: "story-hub-408ed.appspot.com",
    messagingSenderId: "228392846631",
    appId: "1:228392846631:web:f5935e98178754d82d1502"
  };
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore() 