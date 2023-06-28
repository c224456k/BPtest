

    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
    import { getDatabase, ref, set ,child ,get } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js"


    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyD4N9uYIKv0XJrOSDtwS5KOuoxJ4tdqWNo",
    authDomain: "aovdemo-d15b3.firebaseapp.com",
    databaseURL: "https://aovdemo-d15b3-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "aovdemo-d15b3",
    storageBucket: "aovdemo-d15b3.appspot.com",
    messagingSenderId: "983596318594",
    appId: "1:983596318594:web:f11aabca338938c955599b",
    measurementId: "G-D03RQGKH32"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getDatabase(app);
    const dbRef = ref(getDatabase(app));





// 寫入資料


    set(ref(db, 'hero_rate/' ), {   
        L1: false ,
        L2: false ,
        L3: false ,
        L4: false ,
        L5: false ,
        R1: false ,
        R2: false ,
        R3: false ,
        R4: false ,
        R5: false ,
    
});


document.getElementById('L1').addEventListener("click", function() {
    console.log("Button clicked!");
    set(ref(db, 'hero_rate/' ), {
        L1: true ,
 });
  });

  document.getElementById('L2').addEventListener("click", function() {
    console.log("Button clicked!");
    set(ref(db, 'hero_rate/' ), {
        L2: true 
});
  });

  document.getElementById('L3').addEventListener("click", function() {
    console.log("Button clicked!");
    set(ref(db, 'hero_rate/' ), {

        L3: true 
});
  });

  document.getElementById('L4').addEventListener("click", function() {
    console.log("Button clicked!");
    set(ref(db, 'hero_rate/' ), {

        L4: true ,
});
  });


  document.getElementById('L5').addEventListener("click", function() {
    console.log("Button clicked!");
    set(ref(db, 'hero_rate/' ), {

        L5: true ,
});
  });


  document.getElementById('R1').addEventListener("click", function() {
    console.log("Button clicked!");
    set(ref(db, 'hero_rate/' ), {

        R1: true ,
});
  });

  document.getElementById('R2').addEventListener("click", function() {
    console.log("Button clicked!");
    set(ref(db, 'hero_rate/' ), {

        R2: true ,
});
  });

  document.getElementById('R3').addEventListener("click", function() {
    console.log("Button clicked!");
    set(ref(db, 'hero_rate/' ), {

        R3: true ,
});
  });

  document.getElementById('R4').addEventListener("click", function() {
    console.log("Button clicked!");
    set(ref(db, 'hero_rate/' ), {

        R4: true ,
});
  });


  document.getElementById('R5').addEventListener("click", function() {
    console.log("Button clicked!");
    set(ref(db, 'hero_rate/' ), {

        R5: true });
  });