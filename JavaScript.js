const form = document.getElementById("form");
const submitedEmail = document.querySelector("#submitedEmail");
const card1 = document.querySelector("#container_1");
const card2 = document.querySelector("#container_2");
const dismiss = document.getElementById("dismiss_btn");
const error = document.getElementById("required_email");
const input = document.querySelector("#email");





function updateEmail(email) {
    submitedEmail.textContent = email;

}

function switchScreen() {
    card1.classList.toggle("hidden");
    card2.classList.toggle("hidden");
}

function showerrors() {
    
    input.style.color = "var(--Tomato)";
    input.style.borderColor = "var(--Tomato)";
    error.classList.toggle("hidden");


}
function isValidEntry(str) {
    const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return reg.test(str);
}




form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    const valid = isValidEntry(email.value);
    if (!valid) {
        return showerrors();
    }
    else {
        updateEmail(input.value);
        switchScreen();
    }


});

dismiss.addEventListener("click", () => {
    switchScreen();
})