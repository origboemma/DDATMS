

/*
Project: Digital Dream Academy Training Management System
Purpose: Introduction to JavaScript programming
*/

// Store a message in a variable
const academyName = "Digital Dream Academy";

// Display the message in the browser console
console.log("Welcome to " + academyName);

// Create a simple function
function showWelcomeMessage() {
    return "Welcome to the DDATMS project!";
}

// Display the function result
console.log(showWelcomeMessage());


const welcomeButton = document.getElementById("welcomeButton");
const messageOutput = document.getElementById("messageOutput");

welcomeButton.addEventListener("click", function () {
    messageOutput.textContent = showWelcomeMessage();
});


const learnerNameInput = document.getElementById("learnerName");
const checkNameButton = document.getElementById("checkNameButton");
const validationMessage = document.getElementById("validationMessage");

checkNameButton.addEventListener("click", function () {
    const learnerName = learnerNameInput.value.trim();

    if (learnerName === "") {
        validationMessage.textContent = "Please enter a learner name.";
    } else {
        validationMessage.textContent =
            "Learner name entered: " + learnerName;
    }
});


const learnerForm = document.getElementById("learnerForm");
const learnerMessage = document.getElementById("learnerMessage");

// Temporary storage for registered learners
const learners = [];

learnerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;

    const learner = {
        fullName: fullName,
        email: email,
        course: course
    };

    learners.push(learner);

    learnerMessage.textContent =
        "Learner registered successfully: " + learner.fullName;

    console.log("Registered learners:", learners);

    learnerForm.reset();
});
