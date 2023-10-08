
document.getElementById("contact-form").addEventListener("submit", function(event) 
{
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;

    if (!isValidEmail(email)) 
    {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }

    if (message.trim() === "") 
    {
        alert("Please enter a message.");
        event.preventDefault();
    }
});

function isValidEmail(email) {
    // Use a regular expression for basic email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

