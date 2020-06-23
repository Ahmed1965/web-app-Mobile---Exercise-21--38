
//============================ Task - 1 =====================================

var myNumber = +prompt("Enter any number" , "4.333 ");

var myNumberRound = Math.round(myNumber);

var myNumberFloor = Math.floor(myNumber);

var myNumberCeil = Math.ceil(myNumber);

Math.floor(myNumber);

Math.ceil(myNumber);

document.getElementById("task1").innerHTML = "Number : " + myNumber + "<br>" + " " +  "Round Off value : " +   myNumberRound + " <br>" +  "Floor Value:" + myNumberFloor + " <br>" +  "Ceil Value " +  myNumberCeil;

//=============================Task 2 =======================================

var myNumber = +prompt("Enter any number" , "-4.333 ");

var myNumberRound = Math.round(myNumber);

var myNumberFloor = Math.floor(myNumber);

var myNumberCeil = Math.ceil(myNumber);

Math.floor(myNumber);

Math.ceil(myNumber);

document.getElementById("task2").innerHTML = "Number : " + myNumber + "<br>" + " " +  "Round Off value : " +   myNumberRound + " <br>" +  "Floor Value:" + myNumberFloor + " <br>" +  "Ceil Value " +  myNumberCeil;


//================================Task 3 ====================================

var myAbsoulteNumber = -4;
myAbsoulteNumber1 = Math.abs(myAbsoulteNumber);
document.getElementById("task3").innerHTML = " The absoulte value of " + " " + myAbsoulteNumber + " " + "is" + " " + myAbsoulteNumber1;


//===============================Task 4 =====================================

var x = Math.floor((Math.random()* 10) +1) ;
var x1 = Math.floor((Math.random()* 10) +1) ;

document.getElementById("task4").innerHTML = "Random Dice Value is :" + x;
document.getElementById("task4a").innerHTML = "Random Dice Value is :" + x1;

//============================== Task 5 =====================================

var y = Math.floor((Math.random()*2 )+1) ;
var y1 = Math.floor((Math.random()*2)+1) ;

document.getElementById("task5").innerHTML =  y + "<br>" + "random coin value: Heads";
document.getElementById("task5a").innerHTML = y1 + "<br>" + "random coin value: Tails";

//========================== Task 6 =========================================

var z = Math.floor((Math.random()*100 )+1) ;


document.getElementById("task6").innerHTML =  "Random Number between 1 and 100 is " + z;


//================================ Task 7 ===================================

var myWeight = ("Enter weight ", " 50.2 kilogram");
var myWeight1 = parseInt(myWeight);

document.getElementById("task7").innerHTML = "The weight of User is : " + myWeight1 + " " + "kilogram";

//================================Task 8 ====================================

var mySecretNumber = 3;

var userInputNumber = prompt("Enter any Number between 1 to 10");
 var myRandomNumber = userInputNumber;
 userInputNumber = Math.floor((Math.random()*10)+1) ;

 if (userInputNumber === mySecretNumber){
     document.getElementById("task8").innerHTML = " Congratulate, You win";
 }else{
     document.getElementById("task8").innerHTML = "Try again"
     alert("Try again");
 }






