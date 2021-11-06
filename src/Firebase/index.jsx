import firebase from 'firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

const app = firebase.initializeApp({
	apiKey: 'AIzaSyB86XZHvKjcXkB-JGqol2RnDMQXyH50mEg',
	authDomain: 'icaro-project.firebaseapp.com',
	databaseURL: 'https://icaro-project-default-rtdb.firebaseio.com',
	projectId: 'icaro-project',
	storageBucket: 'icaro-project.appspot.com',
	messagingSenderId: '121347868529',
	appId: '1:121347868529:web:d5345759def8b5084f58d0',
	measurementId: 'G-ZTM3FJNDZV',
});

export function getFirebase() {
	return app;
}

export function getFirestore() {
	return firebase.firestore(app);
}

export function getAuth() {
	return firebase.auth(app);
}
