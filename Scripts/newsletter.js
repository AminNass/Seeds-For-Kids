function submitNewsletter() {

    const inputElement = document.getElementById("inputNewsletter")
    const userInput = inputElement.value.trim(); 


    if (isEmailValid(userInput)) {
        inputElement.value = "";
        showPopup("News letter", "Thank you for subscribing to our news letter.")
    } else {
        alert("Email must be in the right format.")
    }
}