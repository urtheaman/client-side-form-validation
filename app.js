const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submitBtn = document.getElementById('submit');
const inputPass = document.getElementById("password");
const inputPass2 = document.getElementById("password2");
const showPassBtn = document.getElementById('showpassword');
const showPassBtn2 = document.getElementById('showpassword2');

function validateUserForm() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const password2Val = password2.value.trim();

    //USERNAME CHECK
    if (!usernameVal) {
        showError(username, "Username can't be Blank!");
    }else {
        showCheck(username);
    }

    //EMAIL CHECK
    if (!emailVal) {
        showError(email, "Email can't be Blank!");
    }else if (!ValidateEmail(emailVal)) {
        showError(email, "Email Is Incorrect!");
    }else {
        showCheck(email);
    }

    //PASSWORD CHECK
    if (!passwordVal) {
        showError(password, "Password can't be Blank!");
    }else {
        showCheck(password);
    }

    //PASSWORD REPEAT CHECK
    if (!password2Val) {
        showError(password2, "Password can't be Blank!");
    }else if (!(passwordVal === password2Val)) {
        showError(password2, "Password Doesn't Match!");
    }else {
        showCheck(password2);
    }
}

function showError(field, message) {
    const parentel = field.parentNode;
    const ErrorVal = parentel.querySelector("small");
    parentel.className = "input-container exclamation";
    ErrorVal.innerText = message;
}

function showCheck(field) {
    const parentel = field.parentNode;
    parentel.className = "input-container check";
}

function showPassword(value) {
    if (value == 0) {
        if (inputPass.type == 'password') {
            inputPass.type = 'text';
            showPassBtn.innerText = "Hide Password";
        }else {
            inputPass.type = 'password';
            showPassBtn.innerText = "Show Password";
        }
    }else if (value == 1) {
        if (inputPass2.type == 'password') {
            inputPass2.type = 'text';
            showPassBtn2.innerText = "Hide Password";
        }else {
            inputPass2.type = 'password';
            showPassBtn2.innerText = "Show Password";
        }
    }
}

function ValidateEmail(mail) {
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true);
  }
    return (false);
}

submitBtn.addEventListener('click', validateUserForm);