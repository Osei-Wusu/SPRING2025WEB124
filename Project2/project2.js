// Author: Dominic Appiah
// Date: March 6, 2025
// Description: JavaScript file for Project 2 exercises

var myName = "Dominic Appiah"; 

var para1 = document.getElementById("p1");
para1.textContent = myName;

var n1 = 10;
var n2 = 5;

var numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

var numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

var myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

var myNameMultNum = myName * n1;
document.getElementById("p5").textContent = myNameMultNum;

var myAge = 25;
var ageCompare = myAge > numberMult;
document.getElementById("p6").textContent = ageCompare;

n1 = 20; 
n2 = 10; 