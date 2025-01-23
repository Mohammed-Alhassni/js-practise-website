let errorDisplay;
let passEquals;

function getName() {
    const username= document.getElementById("regUname").value;
    if (username!= "") {
        return username;
    } else if (errorDisplay != null) {
        errorDisplay= errorDisplay + " and username"
    } else {
        errorDisplay= "username"
    }
}

function getEmail() {
    const email= document.getElementById("regEmail").value;
    if (email!= "") {
        return email;
    } else if (errorDisplay != null) {
        errorDisplay= errorDisplay + " and email"
    } else {
        errorDisplay= "email"
    }
}

function getPass() {
    const pass = document.getElementById("regPass").value;
    const rePass= document.getElementById("regRePass").value;
    if (pass !="" && rePass !="") {
        if (pass == rePass) {
            return pass;
        } else {
            passEquals= "* password and re-password should be equal"
        }
    } else if (errorDisplay != null) {
        errorDisplay= errorDisplay + " and passwords"
    } else {
        errorDisplay= "passwords"
    }
}

function newUser(){
    errorDisplay=null;
    passEquals=null;
    const key= getName();
    const userData= new Object();
    userData.email= getEmail();
    userData.pass= getPass();
    if (errorDisplay==null && passEquals==null) {
        localStorage.setItem(key, JSON.stringify(userData));
    } else {
        document.getElementById("passEquality").innerHTML= "";
        document.getElementById("errorDisplay").innerHTML= "";

        if (errorDisplay != null && passEquals == null) {
            document.getElementById("errorDisplay").innerHTML= "* please check: " + errorDisplay;
            document.getElementById("passEquality").innerHTML= "";
        } else if (passEquals != null && errorDisplay == null) {
            document.getElementById("passEquality").innerHTML= passEquals;
            document.getElementById("errorDisplay").innerHTML= "";
        } else if (errorDisplay != null && passEquals != null) {
            document.getElementById("errorDisplay").innerHTML= "* please check: " + errorDisplay;
            document.getElementById("passEquality").innerHTML= passEquals;
        } 
    }
    const parsedObj= JSON.parse(localStorage.getItem(key));
    console.log(parsedObj);
}

document.getElementById("regBtn").addEventListener("click", newUser);
console.log(localStorage)










