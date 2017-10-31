//when the submit button is pressed on the contact form in ContactUs.html this alert message is shown 
//(all required fields must be filled in in the form before the submit button can be executed)
$(document).ready(function(){
    $("form").submit(function(){
        alert("THANK YOU: we will be in contact shortly");
    });
});