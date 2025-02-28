document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainbalance = parseFloat(mainBalance);
    const selectedbank = document.getElementById("allbank").value;
    const account = document.getElementById("Acount-nunber").value;

    if (convertedPin===1234) {
        const sum = convertedMainbalance + convertedAmount;
        document.getElementById("main-balance").innerText = sum;
        const conatiner =document.getElementById("transectioncontainer")
       const div = document.createElement("div");
    div.innerHTML = `
    <h1>Added Money from ${selectedbank}</h1>
    <h3>Amount: ${convertedAmount}</h3>
    <p> accounted number: ${account} </p>

    `;
    conatiner.appendChild(div);


    }
    else {
        alert ('pin is incorrect');
    }
})