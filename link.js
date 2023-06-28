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


localStorage.setItem('L1rateTF', false);
localStorage.setItem('L2rateTF', false);
localStorage.setItem('L3rateTF', false);
localStorage.setItem('L4rateTF', false);
localStorage.setItem('L5rateTF', false);
localStorage.setItem('R1rateTF', false);
localStorage.setItem('R2rateTF', false);
localStorage.setItem('R3rateTF', false);
localStorage.setItem('R4rateTF', false);
localStorage.setItem('R5rateTF', false);




// 抓取資料

var L1 =""; var L2 =""; var L3 =""; var L4 =""; var L5 ="";
var R1 =""; var R2 =""; var R3 =""; var R4 =""; var R5 ="";


function getDataL1() {
  
    get(child(dbRef, `hero_rate/${'L1'}`)).then((snapshot) => {
      if (snapshot.exists()) {
        L1 = snapshot.val();
        if(L1 == true){ 
          localStorage.setItem('L1rateTF', L1);
          clearInterval(L11);}
        
      }
    }).catch((error) => {
      console.error(error);
    });
   
  }
  function getDataL2() {
  
    get(child(dbRef, `hero_rate/${'L2'}`)).then((snapshot) => {
      if (snapshot.exists()) {
        L2 = snapshot.val();
        if(L2 == true){ 
          localStorage.setItem('L2rateTF', L2);
          clearInterval(L22);}
        
      }
    }).catch((error) => {
      console.error(error);
    });
   
  }

  function getDataL3() {
  
    get(child(dbRef, `hero_rate/${'L3'}`)).then((snapshot) => {
      if (snapshot.exists()) {
        L3 = snapshot.val();

        if(L3 == true){ 
          localStorage.setItem('L3rateTF', L3);
          clearInterval(L33);}
        
      }
    }).catch((error) => {
      console.error(error);
    });
   
  }
  function getDataL4() {
  
    get(child(dbRef, `hero_rate/${'L4'}`)).then((snapshot) => {
      if (snapshot.exists()) {
        L4 = snapshot.val();

        if(L4 == true){ 
          localStorage.setItem('L4rateTF', L4);
          clearInterval(L44);}
        
      }
    }).catch((error) => {
      console.error(error);
    });
   
  }

  function getDataL5() {
  
    get(child(dbRef, `hero_rate/${'L5'}`)).then((snapshot) => {
      if (snapshot.exists()) {
        L5 = snapshot.val();

        if(L5 == true){ 
          localStorage.setItem('L5rateTF', L5);
          clearInterval(L55);}
        
      }
    }).catch((error) => {
      console.error(error);
    });
   
  }

  function getDataR1() {
  
    get(child(dbRef, `hero_rate/${'R1'}`)).then((snapshot) => {
      if (snapshot.exists()) {
        R1 = snapshot.val();
        if(R1 == true){ 
          localStorage.setItem('R1rateTF', R1);
          clearInterval(R11);}
        
      }
    }).catch((error) => {
      console.error(error);
    });
   
  }
  function getDataR2() {
  
    get(child(dbRef, `hero_rate/${'R2'}`)).then((snapshot) => {
      if (snapshot.exists()) {
        R2 = snapshot.val();
        if(R2 == true){ 
          localStorage.setItem('R2rateTF', R2);
          clearInterval(R22);}
        
      }
    }).catch((error) => {
      console.error(error);
    });
   
  }

  function getDataR3() {
  
    get(child(dbRef, `hero_rate/${'R3'}`)).then((snapshot) => {
      if (snapshot.exists()) {
        R3 = snapshot.val();

        if(R3 == true){ 
          localStorage.setItem('R3rateTF', R3);
          clearInterval(R33);}
        
      }
    }).catch((error) => {
      console.error(error);
    });
   
  }
  function getDataR4() {
  
    get(child(dbRef, `hero_rate/${'R4'}`)).then((snapshot) => {
      if (snapshot.exists()) {
        R4 = snapshot.val();

        if(R4 == true){ 
          localStorage.setItem('R4rateTF', R4);
          clearInterval(R44);}
        
      }
    }).catch((error) => {
      console.error(error);
    });
   
  }

  function getDataR5() {
  
    get(child(dbRef, `hero_rate/${'R5'}`)).then((snapshot) => {
      if (snapshot.exists()) {
        R5 = snapshot.val();

        if(R5 == true){ 
          localStorage.setItem('R5rateTF', R5);
          clearInterval(R55);}
        
      }
    }).catch((error) => {
      console.error(error);
    });
   
  }



  var L11 = setInterval(getDataL1, 2000);
  var L22 = setInterval(getDataL2, 2000);
  var L33 = setInterval(getDataL3, 2000);
  var L44 = setInterval(getDataL4, 2000);
  var L55 = setInterval(getDataL5, 2000);
  var R11 = setInterval(getDataR1, 2000);
  var R22 = setInterval(getDataR2, 2000);
  var R33 = setInterval(getDataR3, 2000);
  var R44 = setInterval(getDataR4, 2000);
  var R55 = setInterval(getDataR5, 2000);
// 寫入資料
// function writeData() {

//     set(ref(db, '/' ), {   
//         game99_L1: localStorage.getItem("game99_L11") ,
//         game99_L2: localStorage.getItem("game99_L22") ,
//         game99_L3: localStorage.getItem("game99_L33") ,
//         game99_L4: localStorage.getItem("game99_L44") ,
//         game99_L5: localStorage.getItem("game99_L55") ,
//         game99_R1: localStorage.getItem("game99_R11") ,
//         game99_R2: localStorage.getItem("game99_R22") ,
//         game99_R3: localStorage.getItem("game99_R33") ,
//         game99_R4: localStorage.getItem("game99_R44") ,
//         game99_R5: localStorage.getItem("game99_R55") ,
//         game99_LB11: localStorage.getItem("game99_LB11") ,
//         game99_LB22: localStorage.getItem("game99_LB22") ,
//         game99_LB33: localStorage.getItem("game99_LB33") ,
//         game99_LB44: localStorage.getItem("game99_LB44") ,
//         game99_RB11: localStorage.getItem("game99_RB11") ,
//         game99_RB22: localStorage.getItem("game99_RB22") ,
//         game99_RB33: localStorage.getItem("game99_RB33") ,
//         game99_RB44: localStorage.getItem("game99_RB44") 


// });
//   }
//   setInterval(writeData, 2000);


//   document.getElementById('L55').src= 'pick/'+ l1h +".jpg"; 




