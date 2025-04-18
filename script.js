function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "Ryan" && password === "CVacsess") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "resume.html";
    } else {
        document.getElementById("error-msg").textContent = "Invalid credentials!";
    }
}

// Logout function
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
