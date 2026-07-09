/*==========================================
        CONTACT FORM VALIDATION
==========================================*/

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

const name=this.querySelector('input[type="text"]');
const email=this.querySelector('input[type="email"]');
const phone=this.querySelector('input[type="tel"]');
const subject=document.getElementById("subject");
const message=this.querySelector("textarea");

if(name.value.trim()===""){

alert("Please enter your name.");

name.focus();

return;

}

if(email.value.trim()===""){

alert("Please enter your email.");

email.focus();

return;

}

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.value.match(emailPattern)){

alert("Please enter a valid email.");

email.focus();

return;

}

const phonePattern=/^[0-9]{11}$/;

if(!phone.value.match(phonePattern)){

alert("Please enter a valid 11-digit phone number.");

phone.focus();

return;

}

if(subject.value.trim()===""){

alert("Please enter subject.");

subject.focus();

return;

}

if(message.value.trim()===""){

alert("Please write your message.");

message.focus();

return;

}

alert("✅ Thank you! Your message has been sent successfully.");

contactForm.reset();

});

}