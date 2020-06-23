

//=============================Task # 1 ====================================



// var firstName =  prompt('Enter Your First Name');
// var lastName =  prompt('Enter Your Last Name');

// var greet = "Welcome  ";

// document.getElementById("task1").innerHTML = "Welcome" +" " + firstName + " "+ lastName;

 


//============================= Task # 2 ==================================

// var task2 = prompt("Enter your favourite mobile name")
// var task3 = task2.length;
// for(i = 0; i < task2.length; i++ ){
    
// }
// document. getElementById("task2").innerHTML= ("My Favourite Phone is  " + task2 + " " + "<br>" +  "Length of String is " +  i);


//============================== Task 3===============================

var a = "Pakistani";
var b = a.indexOf("n");

document.getElementById("task3a").innerHTML = "String = " + a + "<br>" + "Index of 'n' = " +  b; 

//============================Task 4 ========================================

var str = "Hello World";
var numb = str.lastIndexOf("l");
document.getElementById("task4").innerHTML = "String = " + str + "<br>" + "Last Index of 'l' = " +  numb; 


//============================Task 5 ========================================
var myStr = "Pakistani";
var myNumb = myStr.charAt(3);
document.getElementById("task5").innerHTML = "String = " + myStr + "<br>" + "Character at Index 3 = " +  myNumb; 

//===========================Task 6 =========================================

// var myFirstName = prompt('Enter your Frist Name');

// var myLastName = prompt('Enter your Last Name');

// var finalName=myFirstName.concat(myLastName);
// var greet = " ";

// document.getElementById("task6").innerHTML= "Welcome " +  " " + finalName;
// "<br />";

//=============================Task 7 =======================================

var city = "Hyderabad";
var myReplace ='';

myReplace = city.replace("Hyder", "Islam");
document.getElementById("task7").innerHTML= "City: " +  " " + city + "<br>" + "After Replacement:" + " " + myReplace;

//==========================Task 8 ==========================================

var message = "Ali and Sami are best friends. They played circket and football togather";
var messageReplace ='';

messageReplace = message.replace(/and/g, "&");
document.getElementById("task8").innerHTML= "Message: " +  " " + message + "<br>" + "After Replacement:" + " " + messageReplace;

//============================task 9 ====================================

var str1 = "472";
var num3 = typeof(str1);
var num1 = Number(str1);
var num2 = typeof(num1);
document.getElementById("task9").innerHTML= "Value: " + str1 +  "<br>" + "Type: " + num3 + "<br>" + "Value :"  +  num1 + "<br>"  + "Type: " + num2;

//======================== Task 10 ==========================================

// var myCharacter = prompt('Enter some thing in alphabet');

// var myCharacter1 = myCharacter.toUpperCase();


// document.getElementById("task10").innerHTML = "User Input " + myCharacter +  "<br> " + "Upper Case = " +  myCharacter1;
// "<br />";

//=============================Task 11 ======================================

// var mytext = prompt('Enter Sentence');
// var mytext1=mytext[0].toUpperCase() + mytext.slice(1);
// document.getElementById("task11").innerHTML=mytext1;





//==============================Task 12======================================

var num2 = "39.49";
var num3 = num2.replace("39.49", "3949");
document.getElementById("task12").innerHTML = "Number = " + num2 +  "<br> " + "Result = " +  num3;

//===============================Task 13 ====================================

// var mySymbol = prompt("Enter Name");
// var mySymbol1 = String.fromCharCode(33);
// var mySymbol2 = String.fromCharCode(44);
// var mySymbol3 = String.fromCharCode(46);
// var mySymbol4 = String.fromCharCode(64);
// if(mySymbol === mySymbol1 || mySymbol === mySymbol2 || mySymbol === mySymbol3 || mySymbol === mySymbol4){
//     alert("Please Enter a Valid User Name");
//     }else{
//         document.getElementById("task13").innerHTML = "Name = " + mySymbol;
//     }

//=============================Task 14 ======================================

// var mySearch2 = prompt("Welcome to ABC Bakey, What do you want to Order sir/ma'am");
// var myBakery = ["Cake", "Apple Pie", "Cookie", "Chips", "Patties"];
//      var mySearch = mySearch2.toUpperCase();
//      var mySearch3 = mySearch.toLowerCase();
//      var myItem;
//          myBakery.map((value,index)=>{
//     let cValue=value.toLowerCase();
//     if(mySearch3 == cValue)
//     {
//         myItem= "found at index " + index;
//         document.getElementById("task14").innerHTML=myItem;
//     //     }else{
//     //      myItem = "We are Sorry, the " + mysearch2 +  "is not available";
//     //      document.getElementById("task14").innerHTML = myItem;
//   }
                    
// })

//==============================task 15 =====================================

function fun(){

	var a = document.getElementById("pwd").value;
	var b = document.getElementById("pwd1").value;


	if (a ===""){
		 (document.getElementById("spnpwd1").innerHTML = "Empty Password not allwed");
		return false;
	}

	if (a.length < 6 || a.length > 8 ){
		 document.getElementById("spnpwd1").innerHTML = "Mnimum six Charactors allowed. " + "<br>" + "Enter Valid Password";    
		 return false; 
	 }
	 	if(a == b){
	 	document.getElementById("spnpwd2").innerHTML="Password matched, Thak You";
	 	return false;
	 }


	}
    //==============================task 16==================================
    

    //==============================task 17==================================

    
    a = prompt ("Enter Contry Name", "Pakisan");
    alen = a.length;
    var lastChar = a.charAt(a.length-1);
    document.getElementById("task17").innerHTML = "The last Character of"+" " + a + " is : " + lastChar;

//====================================Task 18================================

var txt = "The quck brown fox jump over the lazy dog";

var txt1 = txt.toLowerCase();

document.getElementById("task18").innerHTML = "Text =" + txt + "<br>" + "Ther are " + txt1.match(/t/g || []).length + " " + "occurance(S) of word 'the' ."









        

