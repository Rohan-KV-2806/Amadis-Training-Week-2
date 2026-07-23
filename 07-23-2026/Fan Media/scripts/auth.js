function signup() {
    let user_name = document.getElementById("uname").value.trim();
    let user_password = document.getElementById("pass").value.trim();

    if (!user_name || !user_password) {
        alert("Please fill in both fields!");
        return;
    }

    // Check if username already exists
    if (localStorage.getItem(user_name)) {
        alert("Username already taken! Try a different one.");
        return;
    }

    const accounts = {
        name: user_name,
        password: user_password
    };
    localStorage.setItem(user_name, JSON.stringify(accounts));
    alert("Account " + user_name + " is successfully created!");
    window.location.href = "login.html";
}

function login() {
    let User_name = document.getElementById("uname").value.trim();
    let User_password = document.getElementById("pass").value.trim();

    if (!User_name || !User_password) {
        alert("Please fill in both fields!");
        return;
    }

    let user = JSON.parse(localStorage.getItem(User_name));

    if (!user) {
        alert("User not found! Please sign up first.");
        return;
    }

    if (User_password == user.password) {
        let name = user.name;
        alert("Login successful! Welcome back, " + name + ".");
        window.location.href = "index.html?loggedin_user=" + encodeURIComponent(name);
    } else {
        alert("Incorrect password. Try again.");
    }
}
