//=========================task 1 =================================

    var a = new Date();
    var b = a.getDate();
function mytime() {

    return a;
    
}
document.getElementById("task1").innerHTML = a;

//==========================task 2 ===============================

var firstName = prompt('Enter First Name');
var lastName = prompt('Enter Last Name');
function myfunction() {
    return firstName + lastName;
}
document.getElementById("task2").innerHTML = "Welcom! " + firstName + lastName;

//======================= task 3 =================================

function mySum(num1, num2) {
    var num1 = +prompt('Enter First Number');
    var num2 = +prompt('Enter Second Number');
    //var res = num1 + num2;
    return num1 + num2;
}


document.getElementById("task3").innerHTML = mySum();

//======================== Task 4=================================
var g, h;
function setValues() {
    g = document.getElementById("a").value;
    h = document.getElementById("b").value;
    
}
function sum() {
    setValues();
    result = Number(g) + Number(h);


    alert("Sum of " + g + " and" +" " + h + "=" +  result);
    
}

function minus() {
    setValues();
    result = Number(g) - Number(h);


    alert("Subtraction of " + g + " and" +" " + h + "=" +  result);
    
}

function multiply() {
    setValues();
    result = Number(g) * Number(h);


    alert("Multipulication of  " + g + " and" +" " + h + "=" +  result);
    
}

function division() {
    setValues();
    result = Number(g) / Number(h);
 

    alert("Division of " + g + " and" +" " + h + "=" +  result);
    
}

//=============================== Task -5 ========================
var number = +prompt('Enter Number to obtain Squaire');
function mySquair() {
    
    if (number == '') {
        alert('Empty Numbers not allowed')
    } else {
        
    }
    return number * number;
}
document.getElementById("task5").innerHTML = "Squair of given number,  "  + number + " = " + mySquair(number);

//============================= Task 6 ===========================

function factorial(x) {
    if (x === 0) {
        return 1;    
    }
    return x * factorial(x - 1);        
}

document.getElementById("task6").innerHTML = "Factorial of 5 is" + " " + factorial(5);    

//=============================Task 7=============================

//=============================Task 8=============================
var base = +prompt('Enter first digit for base');
var perpendicular = +prompt('Enter second digit for perpendicular');
var hypotenus = 0;
function rightAngleTriangleSum() {
    if (base && perpendicular == '') {
        alert('Empty inut found');
    } else {
        base = base * base;
        perpendicular = perpendicular * perpendicular;
        hypotenus = base + perpendicular;
    }
    return hypotenus;            
    }
document.getElementById("task8").innerHTML = "The Sum of base and perpendicular is:" + (rightAngleTriangleSum(hypotenus));



//=============================Task 9=============================

//=============================Task 10============================

//========================= task 11==============================

function titleCase(str) { 
    str = str.toLowerCase().split(' '); 
    for (var i = 0; i < str.length; i++) { 
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);  
    } 
    return str.join(' '); 
  } 
document.getElementById("task11").innerHTML = (titleCase("THE QUICK BROWN FOX"));
