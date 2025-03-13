function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "admin" && password === "password") {
        window.location.href = "resume.html";
    } else {
        document.getElementById("error-msg").textContent = "Invalid credentials!";
    }
}
