//============================= task 1 ======================================

var myDate = Date();
console.log(myDate);
document.getElementById("task1").innerHTML = myDate;

//========================== Task 2 =========================================

var myMonth =  new Date();
var myMonth1 = new Array();

myMonth1[0] = "January";
myMonth1[1] = "Feburary";
myMonth1[2] = "March";
myMonth1[3] = "April";
myMonth1[4] = "May";
myMonth1[5] = "June";
myMonth1[6] = "July";
myMonth1[7] = "August";
myMonth1[8] = "September";
myMonth1[9] = "October";
myMonth1[11] = "November";
myMonth1[12] = "December";


var myMonth2 = myMonth1[myMonth.getMonth()];
document.getElementById("task2").innerHTML = " Current Month :" + " " + myMonth2;

//=============================== task 3 ====================================

var myDay = new Date();
var myToDay = myDay.getDay();
// var myToDay1 = new Array();
// myToDay1[0]="Sun";
// myToDay1[1]="Mon";
// myToDay1[2]="Tue";
// myToDay1[3]="Wed";
// myToDay1[4]="Thu";
// myToDay1[5]="Fri";
// myToDay1[6]="Sat";

// var myToDay3 = myToDay1[myDay.getDay()];
document.getElementById("task3").innerHTML = " Today is :" + " " + myDay.toDateString();

//============================== task 4 =====================================

var myToDay = myDay.getDay();
var myToDay1 = new Array();
myToDay1[0]="Sunday";
myToDay1[6]="Satuday";
if(myToDay1 == [0] || myToDay1 == [6]){
    var myToDay3 = myToDay1[myDay.getDay()];
}
document.getElementById("task4").innerHTML = " It's Fun day :" 

//========================== task 5 ========================================

var myDay = new Date();
var myToDay = myDay.getDay();
var myToDay1 = new Array();
myToDay1[0]="Sun";
myToDay1[1]="Mon";
myToDay1[2]="Tue";
myToDay1[3]="Wed";
myToDay1[4]="Thu"; 
myToDay1[5]="Fri";
myToDay1[6]="Sat";
var firstFifteenDays = 30;
var lastFifteenDays = '';
//  for(firstFifteenDays = 0; firstFifteenDays < myDay; firstFifteenDays++){
//     if(myDay < firstFifteenDays){

// //     for (lastFifteenDays = 0; lastFifteenDays < myDay.length; lastFifteenDays++){
        

//         }
//     }



// var myToDay3 = myToDay1[myDay.getDay()];
// document.getElementById("task5").innerHTML = " First Fifteen Days of the month :" + " " + myToDay3;

//======================================Task 6 ==============================


// var milliSeconds = new Date("Jan 01 1970, 00:00:00:000");
// //var myMilliSeconds = milliSeconds.getMilliseconds();


// console.log(milliSeconds.getMilliseconds());

var d = new Date();
document.getElementById("task6").innerHTML ="Current Date =" + " "+ d + "<br>" + "Elapsed Milli Seconds Since Jan 01, 1970 " + " " + d.getTime();



//===================== Task 7===============================================

var myAM = new Date();
x = document.getElementById("task7");
myPM = myAM.getHours();
if (myPM = 00 && myPM > 1200){
    //console.log("AM");
    x.innerHTML="It is 'AM' ";

}else{
    //console.log("PM");
    x.innerHTML="It is 'PM' ";
}

//==============================Task 8=======================================

var laterDate = new Date("Dec 31 2020");
//var laterDate = currentDate.getDate();
a = document.getElementById("task8");
a.innerHTML= "Later Date : " + laterDate;

//===========================Task 9 =========================================
var ramdan = new Date("June, 18, 2015");
var ramdan1 = ramdan.getMilliseconds();
var ramdanDiff = ramdan1 - ramdan; 
ramdanDiff = Math.floor(1000 * 60 * 60 * 24);
document.getElementById("task9").innerHTML = ramdanDiff;



//=================================Task 10 ===============================================================================================

var year2015 = new Date(2015, 11, 5);
var milli = year2015.getTime();
milli = 1000 * 60 * 60 * 24;
document.getElementById("task10").innerHTML = milli;


//================================= Task 11 =========================

var d1 = new Date();
//var h1 = d1.getHours();
var h2 = d1.setHours(22);
// var d2 = new Date();
// var h2 = d2.getHours();
// var h3 = h1 - h2;
console.log(h2);
document.getElementById("task11").innerHTML = "Current Date: " + d
    + " " + "<br>" + "One Hour ago, It was :" + h2;   

//========================== Task 12 ================================

var setyr = new Date();
var setyr1 = setyr.setFullYear(1920);

document.getElementById("task12").innerHTML = "Current Date " + setyr + "<br>" +
    "100 years back it is " + setyr1;


console.log(d1);


//============================task 13 ===============================
console.log(1994 - 21);

//=============================task 14 ==============================

var units = 410;
var perUnit = 16;
var latepay = 350;

var netpay = units * perUnit;
var grosAmnt = netpay + latepay;

document.getElementById("units").innerHTML = "Number of Units : " + units;

document.getElementById("charges").innerHTML = "Charges per Unit : " + perUnit;
"<br>" + "<br>" + "<br>"
document.getElementById("netpay").innerHTML = "Net Amount Payable (with in Due Date): " + netpay;

document.getElementById("latepay").innerHTML = "Late Payment Surcharge : " + latepay;

document.getElementById("grosspay").innerHTML = "Gross Amount Payable (After Due Date) " + grosAmnt;














