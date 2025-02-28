document.getElementById("cashout-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const pin = document.getElementById("chashout-pin").value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById("cashout-amount").value;
    convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (convertedPin === 1234) {
      const sum = convertedMainBalance - convertedAmount;
      document.getElementById("main-balance").innerText = sum;
      const conatiner =document.getElementById("transectioncontainer")
        const p = document.createElement("p");
        p.innerText = `You have cash out ${convertedAmount} to your account`;
        conatiner.appendChild(p);
    } else {
      alert("enter valid pin");
    }
  });