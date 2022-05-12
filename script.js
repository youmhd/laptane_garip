// la recuperation des elements
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

//Evenements
form.addEventListener('submit', e => {
        e.preventDefault();

        form_verify();
    })
    //Fonctions
function form_verify() {
    //obtenir toutes les valeurs des inputs
    const userValue = username.value.trim();
    const emailValue = email.value.trim();
    const pwdValue = password.value.trim();
    const pwd2Value = password2.value.trim();

    //verification du nom d'utilisateur 
    if (userValue === "") {
        let message = "Username ne peut être vide";
        setError(username, message);
    } else if (!userValue.match(/^[a-zA-Z]/)) {
        let message = "Username ne peut être vide";
        setError(userValue, message)

    }

}

function setError(elem, message) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');

    //ajout du message de l'erreur
    small.innertText = message;

    //ajout de la classe error
    formControl.className = "form-control error";
}