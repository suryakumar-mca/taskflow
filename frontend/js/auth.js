const loginToggle = document.getElementById("loginToggle");
const signupToggle = document.getElementById("signupToggle");

const nameInput = document.getElementById("nameInput");

const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const submitButton = document.getElementById("submitButton");

const errorMessage = document.getElementById("errorMessage");

let isLogin = true;

function updateUI() {

    if (isLogin) {
        nameInput.classList.add("hidden")
        submitButton.textContent = "Login"

        loginToggle.classList.add(
            "bg-blue-500",
            "text-white"
        );

        signupToggle.classList.remove(
            "bg-blue-500",
            "text-white"
        );
    }

    else {
        nameInput.classList.remove("hidden");

        submitButton.textContent = "Signup";

        signupToggle.classList.add(
            "bg-blue-500",
            "text-white"
        );

        loginToggle.classList.remove(
            "bg-blue-500",
            "text-white"
        );
    }

    nameInput.value = "";

    emailInput.value = "";

    passwordInput.value = "";

    errorMessage.textContent = "";
}

loginToggle.addEventListener("click", () => {

    isLogin = true;
    updateUI();

});

signupToggle.addEventListener("click", () => {

    isLogin = false;
    updateUI();

});

updateUI();

const authForm = document.getElementById("authForm");

authForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    console.log("Form submitted!");

    const email = emailInput.value.trim();

    const password = passwordInput.value;

    const response = await login(email, password);

    console.log(response);

});