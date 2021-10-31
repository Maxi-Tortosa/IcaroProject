import firebase from 'firebase';
import 'firebase/firestore';

const app = {
	apiKey: 'AIzaSyB86XZHvKjcXkB-JGqol2RnDMQXyH50mEg',
	authDomain: 'icaro-project.firebaseapp.com',
	databaseURL: 'https://icaro-project-default-rtdb.firebaseio.com',
	projectId: 'icaro-project',
	storageBucket: 'icaro-project.appspot.com',
	messagingSenderId: '121347868529',
	appId: '1:121347868529:web:d5345759def8b5084f58d0',
	measurementId: 'G-ZTM3FJNDZV',
};

if (!firebase.apps.lenght) {
	firebase.initializeApp(app);
}

export const db = firebase.firestore();

export const auth = firebase.auth();

export default firebase;
