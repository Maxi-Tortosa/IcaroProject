import firebase from "firebase";
import "firebase/firestore";

//agregar todos los datos de configuracion en un archivo .env ??

const app = {
	apiKey: "AIzaSyB86XZHvKjcXkB-JGqol2RnDMQXyH50mEg",
	authDomain: "icaro-project.firebaseapp.com",
	databaseURL: "https://icaro-project-default-rtdb.firebaseio.com",
	projectId: "icaro-project",
	storageBucket: "icaro-project.appspot.com",
	messagingSenderId: "121347868529",
	appId: "1:121347868529:web:d5345759def8b5084f58d0",
	measurementId: "G-ZTM3FJNDZV",
};

//en caso de realizar con .env
// const app = {
// 	apiKey: process.env.REACT_APP_FIREBASE_KEY,
// 	authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
// 	databaseURL:  process.env.REACT_APP_FIREBASE_DATABASE,
// 	projectId:  process.env.REACT_APP_FIREBASE_PROJECT_ID,
// 	storageBucket:  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// 	messagingSenderId:  process.env.REACT_APP_FIREBASE_SENDER_ID,
// 	appId:  process.env.REACT_APP_FIREBASE_APP_ID,
// 	measurementId:  process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// }

if (!firebase.apps.lenght) {
	firebase.initializeApp(app);
}

export const db = firebase.firestore();

export const auth = firebase.auth();

export default firebase;
