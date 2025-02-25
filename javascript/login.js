// alert()
document.getElementById("login-btn").addEventListener("click", function(event) {
    // alert("Login button clicked");
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const pinNumber =document.getElementById("pin-number").value;
    if(accountNumber.length ===11){
        console.log("Account number is valid");
        if(parseInt(pinNumber) ===1234){
            alert("Login success");
            window.location.href = "./main.html";
           
        }
        else{
            alert("Login failed")  
        }
    } else {
        alert("Account number is invalid")
    }
});