function signup(){
    let user_name = document.getElementById("uname").value;
    let user_password = document.getElementById("pass").value;
    const accounts = {
        name: user_name,
        password: user_password
    };
    localStorage.setItem(user_name, JSON.stringify(accounts));
    alert("account" + user_name + "is successfully created");
    window.location.href = "login.html";
}

function login(){
    let User_name = document.getElementById("uname").value;
    let User_password = document.getElementById("pass").value;
    let user = JSON.parse(localStorage.getItem(User_name));
    if(User_password == user.password){
        let name = user.name;
        alert("login success");
        window.location.href = `index.html?loggedin_user=${encodeURIComponent(name)}`;
    }else{
        alert("Login unsuccessful");
    }
}