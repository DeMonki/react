import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();


const t = firestore.collection('users').doc('DWnHsGvJqzFJn3WovVNV').collection('cartItems').doc('XCA8I7WS5BE9y3NeSSOy');
console.log("TTTTT:   ", t);

