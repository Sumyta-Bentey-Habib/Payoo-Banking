document.getElementById("transaction-history-box").
addEventListener("click", 
    function() {
        document.getElementById("cash-out").style.display = "none";
        document.getElementById("addmoney").style.display = "none";
        document.getElementById("transaction-history").style.display = "block"; 
    });