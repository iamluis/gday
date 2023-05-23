// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyA7selI9Lv-BywgQXPGhZfs-ogS5HctzkA",
    authDomain: "gday-bf969.firebaseapp.com",
    projectId: "gday-bf969",
    storageBucket: "gday-bf969.appspot.com",
    messagingSenderId: "525677684037",
    appId: "1:525677684037:web:49a2b83e2dea3cd6f38a2c",
    measurementId: "G-Q3XLHYFJ08"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);

const initialize = async (user) => {
    const db = getFirestore(app);
    const userDataDoc = doc(db, "users", user.email)
    window.userDataDoc = userDataDoc;
    const userData = await getDoc(userDataDoc);

    if (userData.exists()) {
        const data = userData.data();
        if (data.passedStart && location.pathname !== "/itinerary/") {
            location.assign("/itinerary");
        } else if (!data.passedStart && location.pathname !== "/") {
            location.assign("/");
        }
    }
    
}

auth.onAuthStateChanged(function (user) {
    if (location.pathname !== "/login/") {
        if (user == null) {
            location.assign("/login");
        } else {
            initialize(user);
        }
    } else {
        if (user != null) {
            location.assign("/");
        }
    }
});




window.loginUser = (e) => {
    e.preventDefault();
    var form = document.getElementById('loginForm');

    console.log("form submitted");
    var email = form.elements.email.value;
    var password = form.elements.password.value;
    console.log(email, password)

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            user = userCredential.user;
            location.assign("/");
            // ...
        })
        .catch((error) => {
            console.log(error);
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`${errorCode} - ${errorMessage}`);
        });
};


window.start = async () => {
    console.log("start");
    await updateDoc(window.userDataDoc, {passedStart: true});
    location.assign("/itinerary");
}

window.goHome = () => {
    location.assign("/");
}