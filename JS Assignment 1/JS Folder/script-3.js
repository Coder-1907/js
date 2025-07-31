var age = 18;
alert("I am " + age + " years old");


 var visitCount = localStorage.getItem("visitCount") || 0;
 
    visitCount = Number(visitCount) + 1;

    localStorage.setItem("visitCount", visitCount);

    alert("You have visited this site " + visitCount + " times");

var birthYear = 2006;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear);


var visitorName = "John Doe";
var productTitle = "T-shirt(s)";
var quantity = 5;

document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store.");