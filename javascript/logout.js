document.getElementById("log-out-btn").addEventListener("click", function(event) {
     alert("Logout button clicked");
    event.preventDefault();
    window.location.href = "./index.html";
});