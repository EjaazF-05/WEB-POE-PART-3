document.addEventListener("DOMContentLoaded", function () {

    // ========== ACCORDION ==========
    const accordionButtons = document.querySelectorAll(".accordion-btn");

    accordionButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const content = this.nextElementSibling;

            // Close all other accordion contents
            document.querySelectorAll(".accordion-content").forEach(function (item) {
                if (item !== content) {
                    item.classList.remove("active");
                }
            });

            // Toggle current one
            content.classList.toggle("active");
        });
    });

    // ========== ENQUIRY FORM VALIDATION ==========
    const enquiryForm = document.getElementById("enquiryForm");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let isValid = true;

            // Clear previous errors
            document.querySelectorAll(".error").forEach(el => el.textContent = "");

            const name = document.getElementById("playerName").value.trim();
            if (name === "") {
                document.getElementById("nameError").textContent = "Please enter the player's name.";
                isValid = false;
            }

            const age = document.getElementById("age").value;
            if (age === "" || age < 6 || age > 18) {
                document.getElementById("ageError").textContent = "Age must be between 6 and 18.";
                isValid = false;
            }

            const email = document.getElementById("email").value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === "" || !emailPattern.test(email)) {
                document.getElementById("emailError").textContent = "Please enter a valid email address.";
                isValid = false;
            }

            const programme = document.getElementById("programme").value;
            if (programme === "") {
                document.getElementById("programmeError").textContent = "Please select a training programme.";
                isValid = false;
            }

            const reason = document.getElementById("reason").value.trim();
            if (reason === "") {
                document.getElementById("reasonError").textContent = "Please tell us why you want to join.";
                isValid = false;
            }

            const messageDiv = document.getElementById("formMessage");
            if (isValid) {
                messageDiv.style.color = "green";
                messageDiv.textContent = "Thank you! Your enquiry has been received. We will contact you soon.";
                enquiryForm.reset();
            } else {
                messageDiv.style.color = "red";
                messageDiv.textContent = "Please fix the errors above before submitting.";
            }
        });
    }

    // ========== CONTACT FORM VALIDATION ==========
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let isValid = true;

            document.querySelectorAll(".error").forEach(el => el.textContent = "");

            const name = document.getElementById("contactName").value.trim();
            if (name === "") {
                document.getElementById("contactNameError").textContent = "Please enter your name.";
                isValid = false;
            }

            const email = document.getElementById("contactEmail").value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === "" || !emailPattern.test(email)) {
                document.getElementById("contactEmailError").textContent = "Please enter a valid email address.";
                isValid = false;
            }

            const type = document.getElementById("messageType").value;
            if (type === "") {
                document.getElementById("typeError").textContent = "Please select a message type.";
                isValid = false;
            }

            const message = document.getElementById("message").value.trim();
            if (message === "") {
                document.getElementById("messageError").textContent = "Please enter your message.";
                isValid = false;
            }

            const messageDiv = document.getElementById("contactMessage");
            if (isValid) {
                messageDiv.style.color = "green";
                messageDiv.textContent = "Thank you! Your message has been sent. We will reply soon.";
                contactForm.reset();
            } else {
                messageDiv.style.color = "red";
                messageDiv.textContent = "Please fix the errors above before submitting.";
            }
        });
    }
});