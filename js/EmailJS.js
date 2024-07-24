
function SendEmail(){
    
    var params = {
         from_name : document.getElementById("from_name").value,
         from_email : document.getElementById("from_email").value,
         message : document.getElementById("message").value
    }
    emailjs.send("service_pq9cidp","template_vrbl6ui",params).then(function(res){
        alert("Thank you for contacting me. I will get back to you soon.");
    }, function(error) {
        alert('Sorry, there was an error sending your message. Please try again later.');
        console.error('Error:', error);
    });
}

