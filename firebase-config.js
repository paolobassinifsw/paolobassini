// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCmfmpM0q7nrlmdNxB3y0WD1HfAgkV39tY",
	authDomain: "paolobassini-1edba.firebaseapp.com",
	projectId: "paolobassini-1edba",
	storageBucket: "paolobassini-1edba.appspot.com",
	messagingSenderId: "1076170942112",
	appId: "1:1076170942112:web:e5e72bf7872f676fd38bc5",
	measurementId: "G-KKF0WML2T9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
