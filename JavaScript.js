const form = document.getElementById("form");
const submitedEmail = document.querySelector("#submitedEmail");
const card1 = document.querySelector("#container_1");
const card2 = document.querySelector("#container_2");
const dismiss = document.getElementById("dismiss_btn");





function updateEmail(email) {
    submitedEmail.textContent = email;

}

function switchScreen() {
    card1.classList.toggle("hidden");
    card2.classList.toggle("hidden");
}

function showerrors() {
    const error = document.getElementById("msg_error");
    const input = document.querySelector("#email");
    error.classList.remove("hidden");
    input.classList.add("error_style");


}
function isValidEntry(str) {
    const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return reg.test(str);
}




form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.querySelector("#email");
    const valid = isValidEntry(email.value);
    if (!valid) {
        return showerrors();
    }
    else {
        updateEmail(email.value);
        switchScreen();
    }
    

});

dismiss.addEventListener("click", () => {
    switchScreen();
})



