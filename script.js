// Prevent form resubmission upon refresh or back
if (window.history.replaceState) 
    window.history.replaceState(null, null, window.location.href);

// Run after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.querySelector("#password");
    const passwordField2 = document.querySelector("#password2");

    // Check password
    passwordField.addEventListener("input", () => {
        if (checkPasswordLength(passwordField.value)) {
            passwordField.classList.remove("invalid", "error1");
            passwordField.classList.add("valid");
        }
        else {
            passwordField.classList.remove("valid");
            passwordField.classList.add("invalid", "error1");
        }
    })

    // Check confirm password
    passwordField2.addEventListener("input", () => {
        if (comparePassword(passwordField.value, passwordField2.value)) {
            passwordField2.classList.remove("invalid", "error2");
            passwordField2.classList.add("valid");
        }
        else {
            passwordField2.classList.remove("valid");
            passwordField2.classList.add("invalid", "error2");
        }
    })
})

// Functions prototype
function checkPasswordLength(password) {
    if (password.length < 6) return false;
    return true;
}

function comparePassword(pw1, pw2) {
    if (!checkPasswordLength(pw1)) return false;
    if (pw1 !== pw2) return false;
    return true;
}
