
//  localStorage.getItem('L1').replace('.png','')


// localStorage.getItem('L1').replace('.jpg','')
// localStorage.getItem('L2').replace('.jpg','')
// localStorage.getItem('L3').replace('.jpg','')
// localStorage.getItem('L4').replace('.jpg','')
// localStorage.getItem('L5').replace('.jpg','')
// localStorage.getItem('R1').replace('.jpg','')
// localStorage.getItem('R2').replace('.jpg','')
// localStorage.getItem('R3').replace('.jpg','')
// localStorage.getItem('R4').replace('.jpg','')
// localStorage.getItem('R5').replace('.jpg','')





// console.log(  localStorage.getItem('L1').replace('.jpg','')  );

// console.log( localStorage.getItem('L1')   )

//create CSV file data in an array

function download_csv_file() {


var csvFileData = [
    ['GAME1_L1', localStorage.getItem('GAME1_L1')],
    ['GAME1_L2', localStorage.getItem('GAME1_L2')],
    ['GAME1_L3', localStorage.getItem('GAME1_L3')],
    ['GAME1_L4', localStorage.getItem('GAME1_L4')],
    ['GAME1_L5', localStorage.getItem('GAME1_L5')],
    ['GAME1_R1', localStorage.getItem('GAME1_R1')],
    ['GAME1_R2', localStorage.getItem('GAME1_R2')],
    ['GAME1_R3', localStorage.getItem('GAME1_R3')],
    ['GAME1_R4', localStorage.getItem('GAME1_R4')],
    ['GAME1_R5', localStorage.getItem('GAME1_R5')],

    ['GAME2_L1', localStorage.getItem('GAME2_L1')],
    ['GAME2_L2', localStorage.getItem('GAME2_L2')],
    ['GAME2_L3', localStorage.getItem('GAME2_L3')],
    ['GAME2_L4', localStorage.getItem('GAME2_L4')],
    ['GAME2_L5', localStorage.getItem('GAME2_L5')],
    ['GAME2_R1', localStorage.getItem('GAME2_R1')],
    ['GAME2_R2', localStorage.getItem('GAME2_R2')],
    ['GAME2_R3', localStorage.getItem('GAME2_R3')],
    ['GAME2_R4', localStorage.getItem('GAME2_R4')],
    ['GAME2_R5', localStorage.getItem('GAME2_R5')],

    ['GAME3_L1', localStorage.getItem('GAME3_L1')],
    ['GAME3_L2', localStorage.getItem('GAME3_L2')],
    ['GAME3_L3', localStorage.getItem('GAME3_L3')],
    ['GAME3_L4', localStorage.getItem('GAME3_L4')],
    ['GAME3_L5', localStorage.getItem('GAME3_L5')],
    ['GAME3_R1', localStorage.getItem('GAME3_R1')],
    ['GAME3_R2', localStorage.getItem('GAME3_R2')],
    ['GAME3_R3', localStorage.getItem('GAME3_R3')],
    ['GAME3_R4', localStorage.getItem('GAME3_R4')],
    ['GAME3_R5', localStorage.getItem('GAME3_R5')],

    ['GAME4_L1', localStorage.getItem('GAME4_L1')],
    ['GAME4_L2', localStorage.getItem('GAME4_L2')],
    ['GAME4_L3', localStorage.getItem('GAME4_L3')],
    ['GAME4_L4', localStorage.getItem('GAME4_L4')],
    ['GAME4_L5', localStorage.getItem('GAME4_L5')],
    ['GAME4_R1', localStorage.getItem('GAME4_R1')],
    ['GAME4_R2', localStorage.getItem('GAME4_R2')],
    ['GAME4_R3', localStorage.getItem('GAME4_R3')],
    ['GAME4_R4', localStorage.getItem('GAME4_R4')],
    ['GAME4_R5', localStorage.getItem('GAME4_R5')],

    ['GAME5_L1', localStorage.getItem('GAME5_L1')],
    ['GAME5_L2', localStorage.getItem('GAME5_L2')],
    ['GAME5_L3', localStorage.getItem('GAME5_L3')],
    ['GAME5_L4', localStorage.getItem('GAME5_L4')],
    ['GAME5_L5', localStorage.getItem('GAME5_L5')],
    ['GAME5_R1', localStorage.getItem('GAME5_R1')],
    ['GAME5_R2', localStorage.getItem('GAME5_R2')],
    ['GAME5_R3', localStorage.getItem('GAME5_R3')],
    ['GAME5_R4', localStorage.getItem('GAME5_R4')],
    ['GAME5_R5', localStorage.getItem('GAME5_R5')],

    ['GAME6_L1', localStorage.getItem('GAME6_L1')],
    ['GAME6_L2', localStorage.getItem('GAME6_L2')],
    ['GAME6_L3', localStorage.getItem('GAME6_L3')],
    ['GAME6_L4', localStorage.getItem('GAME6_L4')],
    ['GAME6_L5', localStorage.getItem('GAME6_L5')],
    ['GAME6_R1', localStorage.getItem('GAME6_R1')],
    ['GAME6_R2', localStorage.getItem('GAME6_R2')],
    ['GAME6_R3', localStorage.getItem('GAME6_R3')],
    ['GAME6_R4', localStorage.getItem('GAME6_R4')],
    ['GAME6_R5', localStorage.getItem('GAME6_R5')],

    ['game100_L1', localStorage.getItem('game100_L11')],
    ['game100_L2', localStorage.getItem('game100_L22')],
    ['game100_L3', localStorage.getItem('game100_L33')],
    ['game100_L4', localStorage.getItem('game100_L44')],
    ['game100_L5', localStorage.getItem('game100_L55')],
    ['game100_R1', localStorage.getItem('game100_R11')],
    ['game100_R2', localStorage.getItem('game100_R22')],
    ['game100_R3', localStorage.getItem('game100_R33')],
    ['game100_R4', localStorage.getItem('game100_R44')],
    ['game100_R5', localStorage.getItem('game100_R55')],
 
 ];
   
 //create a user-defined function to download CSV file 

    //刷新
    // document.location.reload();
 
     //define the heading for each row of the data
     var csv = 'game0,hero\n';
     
     //merge the data with CSV
     csvFileData.forEach(function(row) {
            //  csv += row.join(',');
             csv += row.join(',');
             csv += "\n";
             
     });

   
     //display the created CSV data on the web browser 
 
 
    
     var hiddenElement = document.createElement('a');
     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
     hiddenElement.target = '_blank';
     
     //provide the name for the CSV file to be downloaded
     hiddenElement.download = 'allpick.csv';
     hiddenElement.click();
 }


 var G1,G2,G3,G4,G5,G6,G7;


 function herolist1() {
    
    if ( localStorage.getItem('GAME1_R5') === null || localStorage.getItem('GAME1_R5') === "null") 
    G1 = "無資料";
    else
    {document.getElementById('herolist').style.color = 'red';
    G1 = "有資料"; }
    
    if ( localStorage.getItem('GAME2_R5') === null || localStorage.getItem('GAME2_R5') === "null") 
    G2 = "無資料";
    else
    G2 = "有資料";
    if ( localStorage.getItem('GAME3_R5') === null || localStorage.getItem('GAME3_R5') === "null") 
    G3 = "無資料";
    else
    G3 = "有資料";
    if ( localStorage.getItem('GAME4_R5') === null || localStorage.getItem('GAME4_R5') === "null" ) 
    G4 = "無資料";
    else
    G4 = "有資料";
    if ( localStorage.getItem('GAME5_R5') === null || localStorage.getItem('GAME5_R5') === "null") 
    G5 = "無資料";
    else
    G5 = "有資料";
    var csvFileData = [
        ['Game1', G1],
        ['Game2', G2],
        ['Game3', G3],
        ['Game4', G4],
        ['Game5', G5],

    
     ];
       
     //create a user-defined function to download CSV file 
    
        //刷新
        // document.location.reload();
     
         //define the heading for each row of the data
         var csv = '';
         
         //merge the data with CSV
         csvFileData.forEach(function(row) {
                //  csv += row.join(',');
                 csv += row.join(',');
                 csv += "\n";
                 
         });
    
         document.getElementById('herolist').innerHTML = csv;

        }













// // GAME1
// document.getElementById('L11'+'a').src = 'allpick/' + localStorage.getItem('GAME1_L1').replace('.jpg','') + '.png'
// document.getElementById('L22'+'a').src = 'allpick/' + localStorage.getItem('GAME1_L2').replace('.jpg','') + '.png'
// document.getElementById('L33'+'a').src = 'allpick/' + localStorage.getItem('GAME1_L3').replace('.jpg','') + '.png'
// document.getElementById('L44'+'a').src = 'allpick/' + localStorage.getItem('GAME1_L4').replace('.jpg','') + '.png'
// document.getElementById('L55'+'a').src = 'allpick/' + localStorage.getItem('GAME1_L5').replace('.jpg','') + '.png'
// document.getElementById('R11'+'a').src = 'allpick/' + localStorage.getItem('GAME1_R1').replace('.jpg','') + '.png'
// document.getElementById('R22'+'a').src = 'allpick/' + localStorage.getItem('GAME1_R2').replace('.jpg','') + '.png'
// document.getElementById('R33'+'a').src = 'allpick/' + localStorage.getItem('GAME1_R3').replace('.jpg','') + '.png'
// document.getElementById('R44'+'a').src = 'allpick/' + localStorage.getItem('GAME1_R4').replace('.jpg','') + '.png'
// document.getElementById('R55'+'a').src = 'allpick/' + localStorage.getItem('GAME1_R5').replace('.jpg','') + '.png'

// // GAME2
// document.getElementById('L11'+'b').src = 'allpick/' + localStorage.getItem('GAME2_L1').replace('.jpg','') + '.png'
// document.getElementById('L22'+'b').src = 'allpick/' + localStorage.getItem('GAME2_L2').replace('.jpg','') + '.png'
// document.getElementById('L33'+'b').src = 'allpick/' + localStorage.getItem('GAME2_L3').replace('.jpg','') + '.png'
// document.getElementById('L44'+'b').src = 'allpick/' + localStorage.getItem('GAME2_L4').replace('.jpg','') + '.png'
// document.getElementById('L55'+'b').src = 'allpick/' + localStorage.getItem('GAME2_L5').replace('.jpg','') + '.png'
// document.getElementById('R11'+'b').src = 'allpick/' + localStorage.getItem('GAME2_R1').replace('.jpg','') + '.png'
// document.getElementById('R22'+'b').src = 'allpick/' + localStorage.getItem('GAME2_R2').replace('.jpg','') + '.png'
// document.getElementById('R33'+'b').src = 'allpick/' + localStorage.getItem('GAME2_R3').replace('.jpg','') + '.png'
// document.getElementById('R44'+'b').src = 'allpick/' + localStorage.getItem('GAME2_R4').replace('.jpg','') + '.png'
// document.getElementById('R55'+'b').src = 'allpick/' + localStorage.getItem('GAME2_R5').replace('.jpg','') + '.png'

// // GAME3
// document.getElementById('L11'+'c').src = 'allpick/' + localStorage.getItem('GAME3_L1').replace('.jpg','') + '.png'
// document.getElementById('L22'+'c').src = 'allpick/' + localStorage.getItem('GAME3_L2').replace('.jpg','') + '.png'
// document.getElementById('L33'+'c').src = 'allpick/' + localStorage.getItem('GAME3_L3').replace('.jpg','') + '.png'
// document.getElementById('L44'+'c').src = 'allpick/' + localStorage.getItem('GAME3_L4').replace('.jpg','') + '.png'
// document.getElementById('L55'+'c').src = 'allpick/' + localStorage.getItem('GAME3_L5').replace('.jpg','') + '.png'
// document.getElementById('R11'+'c').src = 'allpick/' + localStorage.getItem('GAME3_R1').replace('.jpg','') + '.png'
// document.getElementById('R22'+'c').src = 'allpick/' + localStorage.getItem('GAME3_R2').replace('.jpg','') + '.png'
// document.getElementById('R33'+'c').src = 'allpick/' + localStorage.getItem('GAME3_R3').replace('.jpg','') + '.png'
// document.getElementById('R44'+'c').src = 'allpick/' + localStorage.getItem('GAME3_R4').replace('.jpg','') + '.png'
// document.getElementById('R55'+'c').src = 'allpick/' + localStorage.getItem('GAME3_R5').replace('.jpg','') + '.png'

// // GAME4
// document.getElementById('L11'+'d').src = 'allpick/' + localStorage.getItem('GAME4_L1').replace('.jpg','') + '.png'
// document.getElementById('L22'+'d').src = 'allpick/' + localStorage.getItem('GAME4_L2').replace('.jpg','') + '.png'
// document.getElementById('L33'+'d').src = 'allpick/' + localStorage.getItem('GAME4_L3').replace('.jpg','') + '.png'
// document.getElementById('L44'+'d').src = 'allpick/' + localStorage.getItem('GAME4_L4').replace('.jpg','') + '.png'
// document.getElementById('L55'+'d').src = 'allpick/' + localStorage.getItem('GAME4_L5').replace('.jpg','') + '.png'
// document.getElementById('R11'+'d').src = 'allpick/' + localStorage.getItem('GAME4_R1').replace('.jpg','') + '.png'
// document.getElementById('R22'+'d').src = 'allpick/' + localStorage.getItem('GAME4_R2').replace('.jpg','') + '.png'
// document.getElementById('R33'+'d').src = 'allpick/' + localStorage.getItem('GAME4_R3').replace('.jpg','') + '.png'
// document.getElementById('R44'+'d').src = 'allpick/' + localStorage.getItem('GAME4_R4').replace('.jpg','') + '.png'
// document.getElementById('R55'+'d').src = 'allpick/' + localStorage.getItem('GAME4_R5').replace('.jpg','') + '.png'

// // GAME5
// document.getElementById('L11'+'e').src = 'allpick/' + localStorage.getItem('GAME5_L1').replace('.jpg','') + '.png'
// document.getElementById('L22'+'e').src = 'allpick/' + localStorage.getItem('GAME5_L2').replace('.jpg','') + '.png'
// document.getElementById('L33'+'e').src = 'allpick/' + localStorage.getItem('GAME5_L3').replace('.jpg','') + '.png'
// document.getElementById('L44'+'e').src = 'allpick/' + localStorage.getItem('GAME5_L4').replace('.jpg','') + '.png'
// document.getElementById('L55'+'e').src = 'allpick/' + localStorage.getItem('GAME5_L5').replace('.jpg','') + '.png'
// document.getElementById('R11'+'e').src = 'allpick/' + localStorage.getItem('GAME5_R1').replace('.jpg','') + '.png'
// document.getElementById('R22'+'e').src = 'allpick/' + localStorage.getItem('GAME5_R2').replace('.jpg','') + '.png'
// document.getElementById('R33'+'e').src = 'allpick/' + localStorage.getItem('GAME5_R3').replace('.jpg','') + '.png'
// document.getElementById('R44'+'e').src = 'allpick/' + localStorage.getItem('GAME5_R4').replace('.jpg','') + '.png'
// document.getElementById('R55'+'e').src = 'allpick/' + localStorage.getItem('GAME5_R5').replace('.jpg','') + '.png'

// // GAME6
// document.getElementById('L11'+'f').src = 'allpick/' + localStorage.getItem('GAME6_L1').replace('.jpg','') + '.png'
// document.getElementById('L22'+'f').src = 'allpick/' + localStorage.getItem('GAME6_L2').replace('.jpg','') + '.png'
// document.getElementById('L33'+'f').src = 'allpick/' + localStorage.getItem('GAME6_L3').replace('.jpg','') + '.png'
// document.getElementById('L44'+'f').src = 'allpick/' + localStorage.getItem('GAME6_L4').replace('.jpg','') + '.png'
// document.getElementById('L55'+'f').src = 'allpick/' + localStorage.getItem('GAME6_L5').replace('.jpg','') + '.png'
// document.getElementById('R11'+'f').src = 'allpick/' + localStorage.getItem('GAME6_R1').replace('.jpg','') + '.png'
// document.getElementById('R22'+'f').src = 'allpick/' + localStorage.getItem('GAME6_R2').replace('.jpg','') + '.png'
// document.getElementById('R33'+'f').src = 'allpick/' + localStorage.getItem('GAME6_R3').replace('.jpg','') + '.png'
// document.getElementById('R44'+'f').src = 'allpick/' + localStorage.getItem('GAME6_R4').replace('.jpg','') + '.png'
// document.getElementById('R55'+'f').src = 'allpick/' + localStorage.getItem('GAME6_R5').replace('.jpg','') + '.png'