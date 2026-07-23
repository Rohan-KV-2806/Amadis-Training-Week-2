// Get current user from URL
const params = new URLSearchParams(window.location.search);
const current_user = params.get("loggedin_user");
console.log(current_user);

// Show welcome message
const to_welcome = document.getElementById("user_welcome");
to_welcome.innerHTML = "Welcome, <strong>" + current_user + "</strong>! 👋";

// Update the Post link to pass the current user
const postLink = document.getElementById("postLink");
postLink.href = "post.html?loggedin_user=" + encodeURIComponent(current_user);

// Load and display posts
function loadPosts() {
    const postsContainer = document.querySelector(".posts");
    if (!current_user) {
        window.location.href = "login.html";
        return;
    }

    const storageKey = current_user + "_posts";
    const posts = JSON.parse(localStorage.getItem(storageKey));

    // Clear existing posts
    postsContainer.innerHTML = "";

    if (!posts || posts.length === 0) {
        postsContainer.innerHTML = '<div class="empty-state">No posts yet. Click <strong>Post</strong> to create your first one!</div>';
        return;
    }

    // Show posts newest first (reverse order)
    const reversedPosts = [...posts].reverse();
    reversedPosts.forEach(post => {
        const postCard = document.createElement("div");
        postCard.className = "post-card";

        postCard.innerHTML = `
            <div class="post-header">
                <span class="post-username">${current_user}</span>
                <span class="post-time">${post.date} at ${post.time}</span>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-footer">
                <button class="like-btn" data-id="${post.id}">
                    ❤️ <span class="like-count">${post.likes}</span>
                </button>
            </div>
        `;

        postsContainer.appendChild(postCard);
    });

    // Add like button functionality
    document.querySelectorAll(".like-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            const postId = parseInt(this.dataset.id);
            const storageKey = current_user + "_posts";
            let allPosts = JSON.parse(localStorage.getItem(storageKey));

            const targetPost = allPosts.find(p => p.id === postId);
            if (targetPost) {
                targetPost.likes += 1;
                localStorage.setItem(storageKey, JSON.stringify(allPosts));
                // Update the counter in the UI
                this.querySelector(".like-count").textContent = targetPost.likes;
            }
        });
    });
}

// Run on page load
loadPosts();
