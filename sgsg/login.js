const firebaseConfig = {
    apiKey: "AIzaSyAEjLXV4EiULhdETN-ZLtY68nIy4AK-1xY",
    authDomain: "blog-assignment-1cb74.firebaseapp.com",
    databaseURL: "https://blog-assignment-1cb74-default-rtdb.firebaseio.com",
    projectId: "blog-assignment-1cb74",
    storageBucket: "blog-assignment-1cb74.appspot.com",
    messagingSenderId: "488390995649",
    appId: "1:488390995649:web:de069472887fb05e892e40",
    measurementId: "G-XN0L6H8L07"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  const database = firebase.database();