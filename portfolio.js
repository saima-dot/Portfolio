// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if(name === "" || email === "") {
        alert("Please fill in your name and email!");
        e.preventDefault();
    }
});
