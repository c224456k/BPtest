

// 鎖住滑鼠拖曳動作兩行

document.addEventListener('mousedown', function(event) {
  event.preventDefault();
});

document.addEventListener('mouseup', function(event) {
  event.preventDefault();
});


var dropdown = document.getElementById("game0");

dropdown.addEventListener('mousedown', function(event) {
  event.stopPropagation();
});

dropdown.addEventListener('mouseup', function(event) {
  event.stopPropagation();
});




herolist1();


var gamepoints = 1;
var bbb=1; //Pick快捷計數器
var ddd=1; //ban快捷計數器
var namechange1=2; //name改變計數器
var lpoint = 0;
var rpoint = 0;


// 按鍵偵測
document.body.addEventListener('keydown', function(e){  
  var keyid = e.code;
  console.log(keyid);
  if (keyid === 'AltLeft')   //輸入按鍵 控制鎖定
  {      console.log(bbb);   
    if(bbb === 1 && ddd===2) {  localStorage.setItem('game99_LB11' , localStorage.getItem('game100_LB11'));
    document.getElementById('LB1').style.animation="fadeOut 0.5s 1 forwards" ; //動畫效果
    document.getElementById('RB1').src='images/' + 'bpng1.png'; + 'bpng1.png'; clock40(); bbb++;  
    return;}
    if(bbb === 2 && ddd===3) {   
      localStorage.setItem('game99_RB11' , localStorage.getItem('game100_RB11'));
      document.getElementById('RB1').style.animation="fadeOut 0.5s 1 forwards" ; document.getElementById('LB2').src='images/' + 'bpng1.png';
    clock40(); bbb++; return;}
    if(bbb === 3 && ddd===4) {  
      localStorage.setItem('game99_LB11' , localStorage.getItem('game100_RB11'));
      document.getElementById('LB2').style.animation="fadeOut 0.5s 1 forwards" ; document.getElementById('RB2').src='images/' + 'bpng1.png';
    clock40();bbb++; return; }
    if(bbb === 4 && ddd===5) {  document.getElementById('RB2').style.animation="fadeOut 0.5s 1 forwards" ; document.getElementById('ZL11').src='images/' + 'ppng1.png';clock(); 
    bbb++; return;}
  //pick
    if(bbb === 5 && ddd===6) {  document.getElementById('ZL11').style.animation="fadeOut 0.5s 1 forwards" ; 
    document.getElementById('L11').style.animation="fadeIn2 0.5s 1 forwards" ; 
    document.getElementById('ZR11').src='images/' + 'ppng1.png';
    document.getElementById('ZR22').src='images/' + 'ppng1.png';clock(); 
    // heroRate('L11');
    bbb++; return;}

  if(bbb === 6 && ddd===8) {  document.getElementById('ZL22').src='images/' + 'ppng1.png'; document.getElementById('ZL33').src='images/' + 'ppng1.png';
  clock();  document.getElementById('ZR11').style.animation="fadeOut 0.5s 1 forwards" ; document.getElementById('ZR22').style.animation="fadeOut 0.5s 1 forwards" ; bbb++; 
  document.getElementById('R11').style.animation="fadeIn2 0.5s 1 forwards" ; document.getElementById('R22').style.animation="fadeIn2 0.5s 1 forwards" ; 
  // setTimeout(() => {   document.getElementById('L111a').src='lu/L凱.png';   }, 2000);  //L凱z4蓋板
  // heroRate('R11');heroRate('R22');
  return;}

    if(bbb === 7 && ddd===10) {document.getElementById('ZR33').src='images/' + 'ppng1.png';
      clock(); document.getElementById('ZL22').style.animation="fadeOut 0.5s 1 forwards" ;document.getElementById('ZL33').style.animation="fadeOut 0.5s 1 forwards" ;bbb++; 
      document.getElementById('L22').style.animation="fadeIn2 0.5s 1 forwards" ; document.getElementById('L33').style.animation="fadeIn2 0.5s 1 forwards" ; 
      // setTimeout(() => {   document.getElementById('R111a').src='lu/R凱.png'; document.getElementById('R222a').src='lu/R射.png'; }, 2000);  //R凱野z4蓋板
  // heroRate('L22');heroRate('L33');
  return;}
  if(bbb === 8 && ddd===11) {document.getElementById('RB3').src='images/' + 'bpng1.png';
  clock40();document.getElementById('ZR33').style.animation="fadeOut 0.5s 1 forwards" ; bbb++; 
  document.getElementById('R33').style.animation="fadeIn2 0.5s 1 forwards" ;  
  // setTimeout(() => {   document.getElementById('L222a').src='lu/L野.png'; document.getElementById('L333a').src='lu/L中.png'; }, 2000);  //R凱野z4蓋板
  // heroRate('R33');
  return;}
  if(bbb === 9 && ddd===12) {document.getElementById('LB3').src='images/' + 'bpng1.png';
  clock40();document.getElementById('RB3').style.animation="fadeOut 0.5s 1 forwards" ; bbb++; 
  // setTimeout(() => {   document.getElementById('R333a').src='lu/R中.png'; document.getElementById('R444a').src='lu/R射.png'; }, 2000);  //R凱野z4蓋板
  return;}
  if(bbb === 10 && ddd===13) {document.getElementById('RB4').src='images/' + 'bpng1.png';
  clock40();document.getElementById('LB3').style.animation="fadeOut 0.5s 1 forwards" ; bbb++; 
  // setTimeout(() => {   document.getElementById('L444a').src='lu/L射.png'; document.getElementById('L555a').src='lu/L輔.png'; }, 2000);  //R凱野z4蓋板
  return;}
  if(bbb === 11 && ddd===14) {
    clock40(); document.getElementById('RB4').style.animation="fadeOut 0.5s 1 forwards" ; document.getElementById('LB4').src='images/' + 'bpng1.png';
    bbb++; 
    // setTimeout(() => {   document.getElementById('R555a').src='lu/R輔.png';}, 2000);  //R凱野z4蓋板
    return; } 
  
    if(bbb === 12 && ddd===15) {document.getElementById('LB4').style.animation="fadeOut 0.5s 1 forwards" ; document.getElementById('ZR44').src='images/' + 'ppng1.png';
  bbb++; clock();return;   }

  if(bbb === 13 && ddd===16) {document.getElementById('ZR44').style.animation="fadeOut 0.5s 1 forwards" ; 
  document.getElementById('R44').style.animation="fadeIn2 0.5s 1 forwards" ;
  document.getElementById('ZL44').src='images/' + 'ppng1.png';
  document.getElementById('ZL55').src='images/' + 'ppng1.png';bbb++; clock(); 
  // heroRate('R44');
  return;   }
  
  if(bbb === 14 && ddd===18) {document.getElementById('ZL44').style.animation="fadeOut 0.5s 1 forwards" ; document.getElementById('ZL55').style.animation="fadeOut 0.5s 1 forwards" ; 
  document.getElementById('L44').style.animation="fadeIn2 0.5s 1 forwards" ; document.getElementById('L55').style.animation="fadeIn2 0.5s 1 forwards" ; 
  document.getElementById('ZR55').src='images/' + 'ppng1.png';bbb++; clock();
  // heroRate('L44');heroRate('L55');
  return;   }

  if(bbb === 15 && ddd===19) {document.getElementById('ZR55').style.animation="fadeOut 0.5s 1 forwards" ;
  document.getElementById('R55').style.animation="fadeIn2 0.5s 1 forwards" ; 
  bbb++; clock(); 
  // heroRate('R55');
  return;   }

  }  



  if (keyid === 'ControlRight')   //解除防呆把前面資料清空
  {     pickcheck = [];  
 
  } 



   
if (keyid === 'ControlLeft')   //輸入按鍵 控制選英雄
{      console.log(ddd);   

if(ddd === 1 && bbb===1) {BAN('LB11'); ddd++;      return;}

if(ddd === 2&& bbb===2) { BAN('RB11') ;ddd++; return;}
if(ddd === 3&& bbb===3) {BAN('LB22');ddd++; return;}
if(ddd === 4&& bbb===4) {BAN('RB22');ddd++; return;}
if(ddd === 5&& bbb===5) {pick('L11','L111');ddd++; return;}
if(ddd === 6&& bbb===6) {pick('R11','R111'); ddd++; return;}
if(ddd === 7&& bbb===6) {pick('R22','R222'); ddd++; return;}
if(ddd === 8&& bbb===7) {pick('L22','L222'); ddd++;   return;}  
if(ddd === 9&& bbb===7) {pick('L33','L333'); ddd++;   return;}   
if(ddd === 10&& bbb===8) {pick('R33','R333'); ddd++; return;}
if(ddd === 11 && bbb===9) {BAN('RB33'); ddd++; return; }
if(ddd === 12 && bbb===10) {BAN('LB33'); ddd++; return;}
if(ddd === 13 && bbb===11) {BAN('RB44');ddd++; return;}
if(ddd === 14 && bbb===12) {BAN('LB44');ddd++; return;;}
if(ddd === 15 && bbb===13) {pick('R44','R444');ddd++; return; }
if(ddd === 16 && bbb===14) {pick('L44','L444');ddd++; return;}
if(ddd === 17 && bbb===14) {pick('L55','L555');ddd++; return;}
if(ddd === 18 && bbb===15) {pick('R55','R555');ddd++; return;}





} 

if (keyid === 'NumpadSubtract')   //輸入按鍵 控制鎖定

{
  if (namechange1%2 ===0) {

  document.getElementById('name_L1').className="nameR1 RBG";
  document.getElementById('name_L2').className="nameR2 RBG";
  document.getElementById('name_L3').className="nameR3 RBG";
  document.getElementById('name_L4').className="nameR4 RBG";
  document.getElementById('name_L5').className="nameR5 RBG";
  // document.getElementById('teamL').className="teamR";
  document.getElementById('teamLimg').className="teamR";
  document.getElementById('teamLimg').src =  document.getElementById('teamLimg').src.replace("/L/","/R/");


  document.getElementById('name_R1').className="nameL1 LBG";
  document.getElementById('name_R2').className="nameL2 LBG";
  document.getElementById('name_R3').className="nameL3 LBG";
  document.getElementById('name_R4').className="nameL4 LBG";
  document.getElementById('name_R5').className="nameL5 LBG";
  // document.getElementById('teamR').className="teamL";
  document.getElementById('teamRimg').className="teamL";
  document.getElementById('teamRimg').src =  document.getElementById('teamRimg').src.replace("/R/","/L/");


}
else {
  document.getElementById('name_L1').className="nameL1 LBG";
  document.getElementById('name_L2').className="nameL2 LBG";
  document.getElementById('name_L3').className="nameL3 LBG";
  document.getElementById('name_L4').className="nameL4 LBG";
  document.getElementById('name_L5').className="nameL5 LBG";
  // document.getElementById('teamL').className="teamL";
  document.getElementById('teamLimg').className="teamL";
  document.getElementById('teamLimg').src =  document.getElementById('teamLimg').src.replace("/R/","/L/");

  document.getElementById('name_R1').className="nameR1 RBG";
  document.getElementById('name_R2').className="nameR2 RBG";
  document.getElementById('name_R3').className="nameR3 RBG";
  document.getElementById('name_R4').className="nameR4 RBG";
  document.getElementById('name_R5').className="nameR5 RBG";
  // document.getElementById('teamR').className="teamR";
  document.getElementById('teamRimg').className="teamR";
  document.getElementById('teamRimg').src =  document.getElementById('teamRimg').src.replace("/L/","/R/");
  

}

namechange1++;

}


if (keyid === 'Numpad7')   //左邊分數+1
if(lpoint+1 === 4){return}
else
{  lpoint++; document.getElementById('Lpoint').src = 'number/old/' + lpoint + '.png';  
gamepointcheck();}

if (keyid === 'Numpad9')   //右邊分數+1
if(rpoint+1 === 4) {return}
else
{  rpoint++; document.getElementById('Rpoint').src = 'number/old/' + rpoint + '.png';    
gamepointcheck();}

if (keyid === 'Numpad4')   //左邊分數-1

{  
  if(lpoint-1 <0) {return}
  else {
    lpoint--; document.getElementById('Lpoint').src = 'number/old/' + lpoint + '.png';  } 
  gamepointcheck();}

if (keyid === 'Numpad6')   //右邊分數-1

if(rpoint-1 <0) {return}
  else {
{  rpoint--; document.getElementById('Rpoint').src = 'number/old/' + rpoint + '.png';  } 
gamepointcheck();}

if (keyid === 'Numpad5')   //啟動倒數計時
{clock40();}


function gamepointcheck(){
  gamepoints = lpoint + rpoint +1;
  document.getElementById('gamepoints').src = 'number/G' + gamepoints + '.png';

}



// if (keyid === 'NumpadDivide')   // GAME1+1
// { 
//   if (gamepoints === 7)
//   return;
//   gamepoints++;
//   document.getElementById('gamepoints').innerHTML = document.getElementById('gamepoints').innerHTML.slice(0, -1) + gamepoints;
// }

// if (keyid === 'NumpadMultiply')   //GAME1-1
// { 
//   if (gamepoints === 1)
//   return;
//   gamepoints--;
//   document.getElementById('gamepoints').innerHTML = document.getElementById('gamepoints').innerHTML.slice(0, -1) + gamepoints;}


});





//document.getElementById("heros1").addEventListener("click", () => {document.getElementById('heroA').value = document.getElementById('heros1').title});
//document.getElementById("heros2").addEventListener("click", () => {document.getElementById('heroA').value = document.getElementById('heros2').title});
//document.getElementById("heros3").addEventListener("click", () => {document.getElementById('heroA').value = document.getElementById('heros3').title});
// console.log(gg)
 // gg[0].addEventListener("click", () => {   document.getElementById('heroA').value = gg[0].title    });
 // gg[1].addEventListener("click", () => {   document.getElementById('heroA').value = gg[1].title    });


 //點擊英雄圖片 傳到inputbox 指定title   ********* 學會使用 for loop 作addeventlistener  ps.還是不曉得為什麼這樣作
 let gg = document.getElementsByClassName('heros');
 for (var i = 0; i < gg.length; i++) {
  (function(index) {
    gg[index].addEventListener("click", function() {
 //         console.log("you clicked region number " + index);
          document.getElementById('heroA').value = gg[index].title
        })
  })(i);
}




//check 英雄三率

function checkTFL1(){
  
  if (localStorage.getItem('L1rateTF') === 'true'){ 
  heroRate('L11');  

  
  clearInterval(rateL11); }
}
function checkTFL2(){

  if (localStorage.getItem('L2rateTF') === 'true'){
  heroRate('L22');   clearInterval(rateL22); }
}
function checkTFL3(){

  if (localStorage.getItem('L3rateTF') === 'true'){
  heroRate('L33');   clearInterval(rateL33); }
}
function checkTFL4(){

  if (localStorage.getItem('L4rateTF') === 'true'){
  heroRate('L44');   clearInterval(rateL44); }
}
function checkTFL5(){

  if (localStorage.getItem('L5rateTF') === 'true'){
  heroRate('L55');   clearInterval(rateL55); }
}

function checkTFR1(){

  if (localStorage.getItem('R1rateTF') === 'true'){
  heroRate('R11');   clearInterval(rateR11); }
}
function checkTFR2(){

  if (localStorage.getItem('R2rateTF') === 'true'){
  heroRate('R22');   clearInterval(rateR22); }
}
function checkTFR3(){

  if (localStorage.getItem('R3rateTF') === 'true'){
  heroRate('R33');   clearInterval(rateR33); }
}
function checkTFR4(){

  if (localStorage.getItem('R4rateTF') === 'true'){
  heroRate('R44');   clearInterval(rateR44); }
}
function checkTFR5(){

  if (localStorage.getItem('R5rateTF') === 'true'){
  heroRate('R55');   clearInterval(rateR55); }
}


var rateL11 = setInterval(checkTFL1, 2000);
var rateL22 = setInterval(checkTFL2, 2000);
var rateL33 = setInterval(checkTFL3, 2000);
var rateL44 = setInterval(checkTFL4, 2000);
var rateL55 = setInterval(checkTFL5, 2000);
var rateR11 = setInterval(checkTFR1, 2000);
var rateR22 = setInterval(checkTFR2, 2000);
var rateR33 = setInterval(checkTFR3, 2000);
var rateR44 = setInterval(checkTFR4, 2000);
var rateR55 = setInterval(checkTFR5, 2000);


function heroRate(a){
  

  const lastSlashIndex = document.getElementById(a).src.lastIndexOf('/'); 
  const heroB =  decodeURIComponent(document.getElementById(a).src.substring(lastSlashIndex+1)).slice(0, -4);
  console.log(heroB); //鎖定的上一把英雄


  const spreadsheetId = '1Ca2QMUrKBACVY1Z-ArgoyGsl9xvWY_9AK-iPRqYT5pY';
  const range = 'hero_rate!A1:I130'; // 读取数据的范围
  const apiKey = 'AIzaSyAwsDG93wFVevFk06pfbzfN3ilUM9WsJYA';
  let rows; let result; 
  
  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`, {
  method: 'GET',
  headers: {
  'Accept': 'application/json'
  }
  })
  .then(response => response.json())
  .then(data => {
  // 在这里处理数据
  // console.log(data.values);
  //console.log( data.values[3][1]) ;
    rows = data.values;
    result = rows.find(row => row.includes(heroB)); // 查找第一个包含搜索值的行
    console.log(result[1]); //左邊數來第二個
    document.getElementById(a+'rate1').innerHTML = result[4];   
    document.getElementById(a+'rate2').innerHTML = result[6];
    if(result[8] === undefined) {result[8]='0.00%';}
    document.getElementById(a+'rate3').innerHTML = result[8];

  // console.log( parseFloat(result[4])); 
   //上數據指令 N秒
   //if(parseFloat(result[4]) >= 10 ){ //大過10%才上
   document.getElementById(a+'rate').style.animation='DowntoUp 7s ease-in-out forwards';  //底圖
   document.getElementById(a+'rate1').style.animation='DowntoUp1 7s ease-in-out forwards'; 
   document.getElementById(a+'rate2').style.animation='DowntoUp2 7s ease-in-out forwards';
   document.getElementById(a+'rate3').style.animation='DowntoUp3 7s ease-in-out forwards';


  //}


  //  document.getElementById('nameL1').innerHTML = data.values[4][2];
  
  })
  .catch(error => {
  console.error(error);
  document.getElementById(a+'rate1').innerHTML = 'NODATA';
  document.getElementById(a+'rate2').innerHTML = 'NODATA';
  document.getElementById(a+'rate3').innerHTML = 'NODATA';
  });
 

}













function herolist(get){
// console.log("test");
document.getElementById('heroA').value = document.getElementById(get).title;


}


//ban角 LB1-RB4 ban角選擇器 , 一個解決
var pickcheck = [];

function BAN(get,c){
  if(document.getElementById('heroA').value === ""){return;}

  if (document.getElementById('heroA').value === "空BAN"){
    document.getElementById(get).src='ban/空.png'; 
    return;
  }

  heros =  document.getElementById('heroA').value + ".jpg";

  if (c !=='bt') {
    // 確認是否從按扭過來略過
  if(pickcheck.includes(document.getElementById('heroA').value) === true )
  {console.log("找到"); ddd--;  return; }

  pickcheck.push(document.getElementById('heroA').value);  console.log(pickcheck);
}


  localStorage.setItem('game100_'+get , document.getElementById('heroA').value);
  

  document.getElementById(get).style.animation="fadeIn1 0.1s 1"  //動畫效果
  document.getElementById(get).src='ban/' + heros;
  
}


//function L1-R5 選角選擇器 

function pick(a,b,c){
  // clock();

  heros =  document.getElementById('heroA').value + ".jpg";

  if (c !=='bt') {
  // 確認是否從按扭過來略過
  if(pickcheck.includes(document.getElementById('heroA').value) === true )
  {console.log("找到"); ddd--;  return; }
  pickcheck.push(document.getElementById('heroA').value);console.log(pickcheck);

}


  localStorage.setItem('game100_'+a , document.getElementById('heroA').value + '.png');
//  console.log(heros + ".png" );
  document.getElementById(a).style.animation="fadeIn1 0.4s 1"  //動畫效果
  document.getElementById(a).src='pick/' + heros;
  

// Z3 + Z4
// document.getElementById(b).style.animation="fade1 5s 1"  //動畫效果
// document.getElementById(b).src='images/ya.gif';

// 過五秒下掉蓋z3蓋板(pick中資訊) & 上Z4蓋板(凱野中射輔路線LOGO)
// var b1 = b + "a";
// 測試 console.log (b , b1); 

// if (bbb == 1){ setTimeout(() => {   document.getElementById(b).src='images/tomi.png'; document.getElementById(b1).src='lu/L凱.png';    console.log("L1蓋板");   console.log(bbb); }, 2000); }  
// if (bbb == 2){ setTimeout(() => {   document.getElementById(b).src='images/tomi.png'; document.getElementById(b1).src='lu/L野.png';   console.log("R1蓋板");   console.log(bbb); }, 2000); }  
// if (bbb == 3){ setTimeout(() => {   document.getElementById(b).src='images/tomi.png'; document.getElementById(b1).src='lu/L中.png';   console.log("R2蓋板");   console.log(bbb); }, 2000); }  
// if (bbb == 4){ setTimeout(() => {   document.getElementById(b).src='images/tomi.png'; document.getElementById(b1).src='lu/L射.png';   console.log("L2蓋板");   console.log(bbb); }, 2000); }  
// if (bbb == 5){ setTimeout(() => {   document.getElementById(b).src='images/tomi.png'; document.getElementById(b1).src='lu/L輔.png';   console.log("L3蓋板");   console.log(bbb); }, 2000); }  
// if (bbb == 6){ setTimeout(() => {   document.getElementById(b).src='images/tomi.png'; document.getElementById(b1).src='lu/L輔.png';   console.log("R3蓋板");   console.log(bbb); }, 2000); }  
// if (bbb == 7){ setTimeout(() => {   document.getElementById(b).src='images/tomi.png'; document.getElementById(b1).src='lu/L輔.png';  console.log("R4蓋板");   console.log(bbb); }, 2000); }  
// if (bbb == 8){ setTimeout(() => {   document.getElementById(b).src='images/tomi.png'; document.getElementById(b1).src='lu/L輔.png';   console.log("L4蓋板");   console.log(bbb); }, 2000); }  
// if (bbb == 9){ setTimeout(() => {   document.getElementById(b).src='images/tomi.png'; document.getElementById(b1).src='lu/L輔.png';   console.log("L5蓋板");   console.log(bbb); }, 2000); }  
// if (bbb == 10){ setTimeout(() => {  document.getElementById(b).src='images/tomi.png'; document.getElementById(b1).src='lu/L輔.png';    console.log("R5蓋板");   console.log(bbb); }, 2000); }  

};

//  document.getElementById(b).src='images/tomi.png';

    



// 時間倒數器

var ccc=0; //不要刪除 , 時間計數器

function clock(){
  document.getElementById('VS').style.animation="fadeIn1 0.1s 1"  //動畫效果
  document.getElementById('VS').src='teamlogo/BO5/tomi.png';
    ccc++;
//    console.log(ccc);
    if( ccc <2 ) {
          cgi= setInterval(tim, 1000);
    var timer = document.querySelector("#timer");
    timer.innerText = 60;
    var number = 60;}
//    console.log("cgi"+cgi)

function tim(){
      number -- ;
      if(number <= 0 )
        number = 0;
        if (number >= 10)
        timer.innerText = number + 0 ;
      if(number <10)
      timer.innerText = '0'+ number ;

      if(number === 0) {
        timer.innerText = '';
        document.getElementById('VS').style.animation="fadeIn1 0.1s 1"  //動畫效果
        document.getElementById('VS').src='teamlogo/BO5/VS.png';
        
        }
      }

      

      if (ccc >= 2){
      clearInterval(cgi);
      cgi = setInterval(tim , 1000);
      timer = document.querySelector("#timer");
      timer.innerText = 60;
      number = 60;
   }
}


let X1;
let Y1;
let Z1;
let Z2;
//交換localstorage的資料
var zzz=0;
var tempc;
var tempc1;
var tempz;


//交換英雄
function change1(a,c) {
  zzz++;
  if (zzz === 1) {
  X1 = document.getElementById(a);  
  Z1 = localStorage.getItem('game100_'+a)
  console.log("z1=" + Z1);
  // console.log("game99_1".slice(0, -1));
  let cstyle = document.getElementById(c);
  document.getElementById(c).style.background="yellow";
//  console.log(cstyle);
  tempz = a;
  tempc = c; 
  tempc1 = tempc.slice(-2,-1);  //防止左右亂換
//  console.log(zzz); console.log(X1);
}
 if (zzz === 2) {
  console.log(tempc1);

  if( c.slice(-2,-1) !== tempc1 )
  {zzz=0;   document.getElementById(tempc).style.background=""; return;  }


  document.getElementById(tempc).style.background="";


  // console.log(zzz); 
  Y1 = document.getElementById(a); 
  Z2 =  localStorage.getItem('game100_'+a)

  localStorage.setItem('game100_'+a , Z1);
  localStorage.setItem('game100_'+tempz , Z2);


  console.log("z2=" + Z2);
  // console.log(X1);

  let change2 = X1.src;
  // console.log(Y1); 
  X1.src = Y1.src;
  // console.log(change2);
   Y1.src = change2;
  zzz=0;

}
  // document.getElementById(a).src = document.getElementById(b).src;
  // document.getElementById(b).src = X1;

//  document.getElementById(b).src='images/' + heros;


}






function clock40(){
  document.getElementById('VS').style.animation="fadeIn1 0.1s 1"  //動畫效果
  document.getElementById('VS').src='teamlogo/BO5/tomi.png';
  ccc++;
//    console.log(ccc);

  if( ccc <2 ) {
    
  cgi= setInterval(tim, 1000);
  var timer = document.querySelector("#timer");
  timer.innerText = 40;
  var number = 40;
  var numberA;}
//    console.log("cgi"+cgi)

function tim(){
    number -- ;
        if(number <= 0 )
      number = 0;
    if (number >= 10)
      timer.innerText = number + 0 ;
    if(number <10)
    timer.innerText = '0'+ number ;

    if(number === 0) {
      timer.innerText = '';
      document.getElementById('VS').style.animation="fadeIn1 0.1s 1"  //動畫效果
      document.getElementById('VS').src='teamlogo/BO5/VS.png';
      
      }

  }

    if (ccc >= 2){
    clearInterval(cgi);
    
    cgi = setInterval(tim , 1000);
    timer = document.querySelector("#timer");
    timer.innerText = 40;
    number = 40;
 }
}
// localStorage.clear();


function allgame0() {
   
  // console.log(document.getElementById('game0_0').value);
  // console.log(document.getElementById('game0').value);

  if (namechange1%2 ===0) {  
  allgames1('L11','L22','L33','L44','L55','R11','R22','R33','R44','R55')  }
else{

  allgames1('R11','R22','R33','R44','R55','L11','L22','L33','L44','L55')  }


document.getElementById('OK1').style.background="red";

// console.log('red');

if (document.getElementById('game0').value === 'CLEARALL'){
  localStorage.clear();
  window.location.reload();
  return;

}


if (document.getElementById('game0').value === 'saveg1andclearall'){

  const keysToKeep = ['GAME1_L1', 'GAME1_L2', 'GAME1_L3' , 'GAME1_L4' , 'GAME1_L5',
  'GAME1_R1', 'GAME1_R2', 'GAME1_R3' , 'GAME1_R4' , 'GAME1_R5',
  'game100_L11','game100_L22','game100_L33','game100_L44','game100_L55',
  'game100_R11','game100_R22','game100_R33','game100_R44','game100_R55'];

  // 取得所有項目的 key 值
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    
    // 判斷是否需要保留
    if (!keysToKeep.includes(key)) {
      localStorage.removeItem(key); // 刪除項目
    }
  }

}





herolist1();

}


function allgames1(L1,L2,L3,L4,L5,R1,R2,R3,R4,R5){

  // console.log( document.getElementById('game0').value );



//  localStorage.setItem( document.getElementById('game0').value+'L1' ,localStorage.getItem('game99_'+L1))  ;
//  localStorage.setItem( document.getElementById('game0').value+'L2' ,localStorage.getItem('game99_'+L2))  ;
//  localStorage.setItem( document.getElementById('game0').value+'L3' ,localStorage.getItem('game99_'+L3))  ;
//  localStorage.setItem( document.getElementById('game0').value+'L4' ,localStorage.getItem('game99_'+L4))  ;
//  localStorage.setItem( document.getElementById('game0').value+'L5' ,localStorage.getItem('game99_'+L5))  ;
//  localStorage.setItem( document.getElementById('game0').value+'R1' ,localStorage.getItem('game99_'+R1))  ;
//  localStorage.setItem( document.getElementById('game0').value+'R2' ,localStorage.getItem('game99_'+R2))  ;
//  localStorage.setItem( document.getElementById('game0').value+'R3' ,localStorage.getItem('game99_'+R3))  ;
//  localStorage.setItem( document.getElementById('game0').value+'R4' ,localStorage.getItem('game99_'+R4))  ;
//  localStorage.setItem( document.getElementById('game0').value+'R5' ,localStorage.getItem('game99_'+R5))  ;


 localStorage.setItem( 'GAME' + gamepoints +'_L1' ,localStorage.getItem('game100_'+L1))  ;
 localStorage.setItem( 'GAME' + gamepoints +'_L2' ,localStorage.getItem('game100_'+L2))  ;
 localStorage.setItem( 'GAME' + gamepoints +'_L3' ,localStorage.getItem('game100_'+L3))  ;
 localStorage.setItem( 'GAME' + gamepoints +'_L4' ,localStorage.getItem('game100_'+L4))  ;
 localStorage.setItem( 'GAME' + gamepoints +'_L5' ,localStorage.getItem('game100_'+L5))  ;
 localStorage.setItem( 'GAME' + gamepoints +'_R1' ,localStorage.getItem('game100_'+R1))  ;
 localStorage.setItem( 'GAME' + gamepoints +'_R2' ,localStorage.getItem('game100_'+R2))  ;
 localStorage.setItem( 'GAME' + gamepoints +'_R3' ,localStorage.getItem('game100_'+R3))  ;
 localStorage.setItem( 'GAME' + gamepoints +'_R4' ,localStorage.getItem('game100_'+R4))  ;
 localStorage.setItem( 'GAME' + gamepoints +'_R5' ,localStorage.getItem('game100_'+R5))  ;






  // localStorage.setItem('key', 'value');
}




let test;










//上方打字英雄的碼

heroA.onfocus = function () {
  browsers.style.display = 'block';
  heroA.style.borderRadius = "5px 5px 0 0";  
};
for (let option of browsers.options) {
  option.onclick = function () {
    heroA.value = option.value;
    browsers.style.display = 'none';
    heroA.style.borderRadius = "5px";
  }
};

heroA.oninput = function() {
  currentFocus = -1;
  var text = heroA.value.toUpperCase();
  for (let option of browsers.options) {
    if(option.value.toUpperCase().indexOf(text) > -1){
      option.style.display = "block";
  }else{
    option.style.display = "none";
    }
  };
}
var currentFocus = -1;
heroA.onkeydown = function(e) {
  if(e.keyCode == 40){
    currentFocus++
   addActive(browsers.options);
  }
  else if(e.keyCode == 38){
    currentFocus--
   addActive(browsers.options);
  }
  else if(e.keyCode == 13){
    e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (browsers.options) browsers.options[currentFocus].click();
        }
  }
}

function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("active");
    }
  }