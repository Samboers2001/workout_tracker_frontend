function hasLowerCase(str) {
    return (/[a-z]/.test(str));
}
function hasUpperCase(str) {
    return (/[A-Z]/.test(str));
}

function validateEmail(email){
    const regex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return regex.test(email);
  }

function checkPassword(password) {
    if (password.length < 5) {
        return false
    } else if (password === "") {
        return false
    } else if (!hasLowerCase(password)) {
        return false
    } else if (!hasUpperCase(password)) {
        return false
    }
    return true
}
function checkEmail(email) {
    if(email === "") {
        return false
    }
    else if(!validateEmail(email)){
        return false
    }
    return true
}
module.exports = { hasLowerCase,hasUpperCase, validateEmail, checkEmail, checkPassword }

