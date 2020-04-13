window.onload = function () {
    var obtn = document.getElementById('btn');
    obtn.onclick = function () {
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        document.documentElement.scrollTop = document.body.scrollTop = -200;
    };
}

function checkUserName() {
    var name = document.getElementById("username").value;
    if (name == "") {
        alert("Please enter the user name!");
        document.form.username.focus();
        return false;
    } else if (!name.match(/^[|u4E00-\u9FA5a-zA-Z0-9_]/)) {
        alert("User name can only include letters, numbers and underscore characters!");
        document.form.username.focus();
        return false;
    } else {
        return true;
    }
}

var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
function checkEmail() {
    var email = document.getElementById("email").value;
    if (email == "") {
        alert("Please input email!");
        document.form.email.focus();
        return false;
    } else if (reg.test(email)) {
        return true;
    } else {
        alert("Incorrect mailbox format");
        return false;
    }

}


function checkForm() {
    if (checkUserName() && checkEmail()) {
        alert("User submitted successfully");
        return true;
    } else {
        return false;
    }
}