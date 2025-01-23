function login(){
    const username= document.getElementById("loginUname").value;
    const password = document.getElementById("loginPword").value;
    const parsedObj= JSON.parse(localStorage.getItem(username));
    if (parsedObj.pass==password){
        alert("loggedin");
    }
}

document.getElementById("loginBtn").addEventListener("click", newUser);