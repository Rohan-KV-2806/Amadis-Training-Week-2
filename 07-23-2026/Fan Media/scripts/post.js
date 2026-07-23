// Get current user from URL
const params = new URLSearchParams(window.location.search);
const current_user = params.get("loggedin_user");
function post() {
    const content = document.getElementById("ps").value;
    if (!content.trim()) {
        alert("Please write something before posting!");
        return;
    }
    if (!current_user) {
        alert("You need to be logged in to post!");
        window.location.href = "login.html";
        return;
    }
    const now = new Date();
    const date = now.toLocaleDateString();       
    const time = now.toLocaleTimeString();      
    const postData = {
        id: Date.now(),
        content: content,
        date: date,
        time: time,
        likes: 0
    };
    const storageKey = current_user + "_posts";
    let posts = JSON.parse(localStorage.getItem(storageKey));
    if (posts) {
        posts.push(postData);
    } else {
        posts = [postData];
    }
    localStorage.setItem(storageKey, JSON.stringify(posts));
    alert("Posted successfully!");
    document.getElementById("ps").value = "";
}
