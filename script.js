function validateName(name) {
    return name.trim() !== "";
}

function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateMobile(mobile) {
    var mobilePattern = /^[0-9]{10}$/;
    return mobilePattern.test(mobile);
}

document.getElementById("btn").addEventListener("click", function() {
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var mobile = document.getElementById("mobileInput").value;

    if (!validateName(name)) {
        alert("Please enter your name.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!validateMobile(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    alert("Form submitted successfully!");
});
