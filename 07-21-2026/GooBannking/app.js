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

const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const balance = params.get("balance");
document.getElementById("WelcomeMsg").textContent = "Welcome " + name;
document.getElementById("YourBalance").textContent = "Your current balance is " + balance + " Rupees";


function withdraw(){
    const amount = prompt("Enter amount to withdraw:");

    if(amount && !isNaN(amount) && amount > 0){
        const withdrawAmount = Number(amount);

        if(withdrawAmount <= users[name].balance){
            users[name].balance -= withdrawAmount;

            document.getElementById("YourBalance").textContent =
                "Your current balance is " + users[name].balance + " Rupees";

            alert("Withdrawal successful! New balance: ₹" + users[name].balance);
        } else {
            alert("Insufficient balance!");
        }
    } else {
        alert("Please enter a valid amount");
    }
}