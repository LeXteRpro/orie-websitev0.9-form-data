"use strict";

//Scroll Down to Portfolio section 
$("#portfolio-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio-doc").offset().top
    }, 500);
});

//Scroll Down to Contact section 
$("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#cta").offset().top
    }, 500);
});

  // Anonymous function with named alias
(function(){

// Testing the console
console.log("Console is ready for action!");


// Creating variable names and linking them to the their form id.
var name = document.getElementById("form_name");
var email = document.getElementById("form_email");
var message = document.getElementById("form_message");
var submit = document.getElementById("submit_button");


// When the event listener on the submit button is activated, the form data is sent to the console.
submit.addEventListener("click", function() {
    console.log("Name: " + name.value);
    console.log ("Email " + email.value);
    console.log ("Message: " + message.value);

}); // End Event Listener


// Close the anonymous function
})();

