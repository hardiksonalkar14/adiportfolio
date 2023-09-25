function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;a
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";


    var emailcheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phocheck = /^[7-9]\d{9}$/;
    
    if (name.length < 5) {
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 1) {
        text = "Please Enter More Than 15 Characters";
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 5) {
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }
   if (email.trim() == " ") {
        alert("Please enter the email id");
    }
    else if ((emailcheck.test(email))) {
        

    }
    else {
        text = "Please Enter Correct email id";
        error_message.innerHTML = text;
        return false;
    }
    if (phone.trim() == " ") {
        alert("Please enter the Phone no");
    }
    else if ((phocheck.test(phone))) {
        

    }
    
    else {
        text = "Please Enter Correct Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
   return true;
}

/*   var text;
   if(name.length < 5){
     text = "Please Enter valid Name";
     error_message.innerHTML = text;
     return false;
   }
   if(subject.length < 10){
     text = "Please Enter Correct Subject";
     error_message.innerHTML = text;
     return false;
   }
   if(isNaN(phone) || phone.length != 10){
     text = "Please Enter valid Phone Number";
     error_message.innerHTML = text;
     return false;
   }
   if(emailcheck.test(email)){
     text = "Please Enter valid Email";
     error_message.innerHTML = text;
     return false;
   }
   if(message.length <= 1){
     text = "Please Enter More Than 140 Characters";
     error_message.innerHTML = text;
     return false;
   }
   alert("Form Submitted Successfully!");
   return true;
 } */