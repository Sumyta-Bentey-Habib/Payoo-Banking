document.getElementById("cash-out").style.display = "none";
document.getElementById("transaction-history").style.display = "none";



document.getElementById("add-money-box").addEventListener("click", function() {
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("addmoney").style.display = "block";
    document.getElementById("transaction-history").style.display = "none";

   
});

document.getElementById("cash-out-box").addEventListener("click", function() { 
    document.getElementById("addmoney").style.display = "none";
    document.getElementById("cash-out").style.display = "block";
    document.getElementById("transaction-history").style.display = "none";
   
});

