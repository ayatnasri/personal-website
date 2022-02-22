'use strict'
function getStylesheet() {
    var currentTime = new Date().getHours();
    if (8 <= currentTime&&currentTime < 20) {
     document.write("<link rel='stylesheet' href='style2.css' type='text/css'>");
    }
    else {
     document.write("<link rel='stylesheet' href='style1.css' type='text/css'>");
    }
}
getStylesheet();


var result = confirm("Welcome to Ayat's Nasri profile \n Are you intressed?");{
    if (result== true)
    {
        prompt("Please! Send your email to contact me.");
        alert("Thank you. I'll contact you soon.");
    }
    else {
        alert("Thanks for visiting my page.");
    }
}
 

