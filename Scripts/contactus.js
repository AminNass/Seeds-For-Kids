function submitContactUs() {

    const firstnameElement = document.getElementById("inputFirstname-ContactUs");
    const lastnameElement = document.getElementById("inputLastname-ContactUs");
    const emailElement = document.getElementById("inputEmail-ContactUs");
    const messageElement = document.getElementById("inputMessage-ContactUs");

    let error = "";

    const inputFirstname = firstnameElement.value.trim();
    const inputLastname = lastnameElement.value.trim();
    const inputMessage = messageElement.value

    if (inputFirstname.length === 0) {
        error = error + "\nFirstname must be entered.";
    }

    if (inputLastname.length === 0) {
        error = error + "\nLastname must be entered.";
    }

    if (inputMessage.length === 0) {
        error = error + "\nMessage must be entered.";
    }

    if (inputFirstname.length > 30) {
        error = error + "\nFirstname is too long (More than 30 characters).";
    }

    if (inputLastname.length > 30) {
        error = error + "\nLastname is too long (More than 30 characters).";
    }

    if (!isEmailValid(emailElement.value.trim())) {
        error = error + "\nEmail is not in the correct format.";
    }

    if (inputMessage.length > 500) {
        error = error + "\nmessage must be below 500 characters.";
    }

    if (error === "") {
        showPopup("Success", "We will get in touch soon!\nSomeone from our team will get back to you as soon as possible");
        firstnameElement.value = "";
        lastnameElement.value = "";
        emailElement.value = "";
        messageElement.value = "";
    } else {
        alert(error);
    }

}

function contactUsCharLimit() {

    const messageElement = document.getElementById("inputMessage-ContactUs");
    const inputMessage = messageElement.value

    const promptElement = document.getElementById("contactUs-prompt")

    promptElement.textContent = inputMessage.length + " / 500"

}