document.getElementById("convertBtn").onclick = function () {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if (amount === "") {
        document.getElementById("result").innerText = "Please enter amount";
        return;
    }

    amount = Number(amount);

    // Simple fixed conversion rates
    let rates = {
        INR: { USD: 0.012, EUR: 0.011, INR: 1 },
        USD: { INR: 83, EUR: 0.92, USD: 1 },
        EUR: { INR: 89, USD: 1.08, EUR: 1 }
    };

    let output = amount * rates[from][to];

    document.getElementById("result").innerText =
        amount + " " + from + " = " + output.toFixed(2) + " " + to;
};