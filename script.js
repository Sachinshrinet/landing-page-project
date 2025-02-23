// Navbar Change on Scroll
window.addEventListener('scroll', function () {
    let navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form Validation
document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Stop default form submission

            let name = document.getElementById('name');
            let email = document.getElementById('email');
            let message = document.getElementById('message');
            let errorMessage = document.getElementById('error-message');
            let successMessage = document.getElementById('success-message');

            let isValid = true;
            errorMessage.innerHTML = ""; // Clear previous messages
            errorMessage.style.display = "none";
            successMessage.style.display = "none";

            // Validate Name
            if (name.value.trim() === "") {
                showError(name, "Name is required");
                isValid = false;
            } else {
                clearError(name);
            }

            // Validate Email
            if (!validateEmail(email.value)) {
                showError(email, "Enter a valid email address");
                isValid = false;
            } else {
                clearError(email);
            }

            // Validate Message
            if (message.value.trim().length < 5) { // Reduced from 10 to 5 characters
                showError(message, "Message should be at least 5 characters");
                isValid = false;
            } else {
                clearError(message);
            }

            // Show Success Message if Valid
            if (isValid) {
                successMessage.innerHTML = "Form submitted successfully!";
                successMessage.style.display = "block";

                setTimeout(() => { successMessage.style.display = "none"; }, 5000); // Keep message visible for 5s
                form.reset(); // Clear form fields
            }
        });
    }
});

// Helper functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.trim());
}

function showError(input, message) {
    input.classList.add("input-error");
    let errorDiv = document.createElement("div");
    errorDiv.className = "error-text";
    errorDiv.style.color = "red";
    errorDiv.style.fontSize = "14px";
    errorDiv.innerText = message;
    input.parentNode.appendChild(errorDiv);
}

function clearError(input) {
    input.classList.remove("input-error");
    let errorText = input.parentNode.querySelector(".error-text");
    if (errorText) {
        errorText.remove();
    }
}
