import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database(); 
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};

//child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childsnapshot) => {
//         expenses.push({
//             id: childsnapshot.key,
//             ...childsnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push({
//         description: 'Rent',
//         note: '',
//         amount: 109500,
//         createdAt: 154849846
// });

// database.ref('notes/-LZVXcDMMJEFGlGoInFv').remove();

// database.ref('notes').push({
//     title: 'Course Topic',
//     body: 'React Native, Angular, Python'
// });

// const firebase = {
//     notes: {

//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Second note!',
//     body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   }, (e) => {
//       console.log('Error Fetching the data', e);
//   });

// const onValueChange = database.ref()
// .on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error fetching some data', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29).onValueChange
// }, 3500);

// setTimeout(() => {
//     database.ref().off();
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref()
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log('Error fetching data', e);
// });

// database.ref().set({
//     name: 'Siddharth Retiwala',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Tomball',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is changed');
// }).catch((e) => {
//     console.log('This is failed', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         console.log('Data was not removed', e);
//     });