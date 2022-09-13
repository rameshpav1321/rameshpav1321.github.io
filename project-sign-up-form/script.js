function validatePassword() {
    pwd = document.getElementById('pwd').value;
    confirm_pwd = document.getElementById('confirm-pwd').value;
    if (pwd != confirm_pwd) {
        document.getElementById('pwd-validation-alert').style.color = 'red';
        document.getElementById('pwd-validation-alert').innerText =
            "👎 Use same password";
        document.getElementById('btn').disabled = true;
        document.getElementById('btn').style.opacity = (0.4);

    }
    else {
        document.getElementById('pwd-validation-alert').style.color = 'green';
        document.getElementById('pwd-validation-alert').innerText =
            "👍 Passwords matched";
        document.getElementById('btn').disabled = false;
        document.getElementById('btn').style.opacity = (1);

    }

}
pwd = document.getElementById('confirm-pwd');
pwd.addEventListener('input', validatePassword);
