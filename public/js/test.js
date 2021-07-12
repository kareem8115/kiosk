//some vars
var 
    q = 24,
    s = 4,
    m = q * s,
    g = q * s * m,
    Name = "Ahmed",
    name = "adel";
//alert("ascasdascdadsads");

document.getElementsByClassName(".hellow_world").innerHTML = "m";
document.getElementById("hellow_world").innerHTML = m;
// document.getElementById("hellow world").innerHTML = "mm";
// document.write("<p>ascasdascdadsads</p>");

if 
//statement
(m + s === 136){
console.log("good");
}
else {
console.log("bad");
};


document.getElementById("min_number").innerHTML = q * m + "$";
document.getElementById("max_number").innerHTML = g + "$";
document.getElementById("third_number").innerHTML = g * m + "$";
document.getElementById("fourd_number").innerHTML = q * m + g + "$";



//data types 
/*
Boolean: true, false
Array:["facebook.com","youtube.com","google.com"]
obejct:{firstName:"Mohammed", lastName: "Mousa"}
string:"text"
number: 32
undefined: ?
null
nan: not a number
symbol
*/
var 
    // mainPrice = 450,
    hasDiscount = true,
    socialWebSite = ["facebook.com","youtube.com","google.com"],
    myInfo = {firstName:"Adel", lastName: "Mousa"};
    /*
    check if product has discount or no, 
    true = yes has discount
    false = no has no discount
    */
    if(hasDiscount === true) {
        var mainPrice = 350;
    }   
    else{
    var mainPrice = 150;
}
document.getElementById("mainPrice").innerHTML = myInfo.firstName;


/* Concatenation */
var
 testConcatenation = "Muhammad";
//example
 document.getElementById("testConcatenation").innerHTML = 
 "<span style=\"color:green \">My name is </span>" + "" + testConcatenation + "<br>" +
 " My age is" + " 35" + "<br>" +
 " I live ine" + " <span style='color:blue'>Saudi Arbia<span>";
// typeof data type in console

//output data
var 
    testAlert = 223423,
    myTestAlert = document.getElementById("testAlert");

//alert("testAlert");
//document.write("test Alert test message");
document.getElementById("testAlert").innerHTML = testAlert;
myTestAlert.innerHTML = testAlert;
console.log("hello world");

//if, else if, else

var 
    // testIf = 1800;
    testIf = 1200; //prompt("what's your age?");

if (testIf < 1500) {
    console.log("true");
} else if (testIf == 1900) {
console.log("less than 1500");
}
else {
    console.log("bad");
};

//conditional operators

/*
( = ) Assignment operator.
( == ) Comparison operator compare.
( === ) identity operator compare date type + value.
( != ) ! Not = Equel (Not Equal)
( !== ) Not identical
( && ) and
( || ) or
*/

var 
    testConditionalOperators = 1000,
    Adel_name = "Adel";

    if (testConditionalOperators != "1000" || Adel_name == "34") {
        console.log ("testConditionalOperators true");
    }
    else if (testConditionalOperators > 2000) {
        console.log ("testConditionalOperators not true");
    }
    else {
        console.log ("testConditionalOperators bad");
    };



// function = Function keyWord in javascript
/*
What happened in function stay in function
*/
// parameters = arguments - البراهين
// sort is irrelevant الترتيب غير مرتبط ببعضه


//Return & Basics
function myAgeIndays(){
    var age = "34";
    return age * 265;
}
var myAgeIndayes = myAgeIndays();
document.getElementById("myAgeIndays").innerHTML = "my age in days " + myAgeIndayes; 


//Parameters
function testParameter(a, b, g){
    return a + b + g ;
}
document.getElementById("testParameter").innerHTML = testParameter(12, 34, 56);


//Advanced
function myFunc() {
    "use strict";
    var Myname = "Khaled";
   if (Myname === "Muhammad" || Myname === "Khaled" || Myname === "Samy" || Myname === "Adel") {alert("Hi my name is " + Myname + " enjoy your time")}
   else if (Myname === "Adel"){alert("Hi my name is " + Myname + " enjoy your time")}
   else {alert("the name is not true")}; 
   return  Myname;// if i call the function inner HTMl
}
// myFunc();
// document.getElementById("testFunc").innerHTML = myFunc();


//Self invoke
//1.
// (function myFunc() {
//     "use strict";
//     alert("welcome")
// })();

//2. 
// (function myFunc() {
//     "use strict";
//     alert("welcome")
// }());


function testAdvancedFunc(){
    "use strict";
    var 
        price = 0,
        amount = document.getElementById("testAdvancedFuncValue").value,
        result = amount * 3.75,
        message = document.getElementById("testAdvancedFuncMessage");

        if(amount === "") {message.innerHTML = "this filed can't be empty";}
        else if (isNaN(amount)) {message.innerHTML = "this field accept number only";}
        else if (amount === "0") {message.innerHTML = " must not be 0";}
        else if (amount < 0) {message.innerHTML = " must not be Negative Number";}
        else if (amount > 100000) {message.innerHTML = " must not be under 100000";}
        else {message.innerHTML = amount + result + " Riyal";};

}



//Switch
/*
switch (expression) {

    case x:
        code to exceute;
        break;
    case x:
        code to exceute;
        break;

    case x:
        code to exceute;
        break;

    case x:
        code to exceute;
        break;

    default:
        code to exceute;
        break;
    }
*/ 

var season = prompt ("What's the beast season for you?");

switch (season) {
case "winter":
    alert("Winter is very cold");
    break;
    
case "summer":
    alert("summer is very hot");
    break;

case "autumn":
    alert("Autumn is very good");
    break;


case "spring":
    alert("summer is amazing");
    break;

default:
    alert("You didn't enter a season  name");

}


// global scope