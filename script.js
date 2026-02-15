console.log("Portfolio Loaded Successfully");
document.getElementById("contact-form")
.addEventListener("submit", function(e) {

e.preventDefault();

emailjs.sendForm(
    "service_0nfu5c5",
    "template_cnn0ble",
    this
).then(function() {

    alert("Message Sent Successfully!");

}, function(error) {

    alert("Failed to send message");

});

});
