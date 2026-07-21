const users = {
    rohan: {
        password: "1234",
        balance: 10000
    },
    faharan: {
        password: "123",
        balance: 34222
    }
}

function login(){
    const username = document.getElementById("name").value;
    const password = document.getElementById("pass").value;

    if(users[username] && users[username].password === password){
        window.location.href = `dashboard.html?name=${username}&balance=${users[username].balance}`;
    }else{
        alert("Invalid credentials");
    }
}

