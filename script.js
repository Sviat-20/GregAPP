document.addEventListener("DOMContentLoaded", function() {
    let balance = 0;

    document.getElementById("clickButton").addEventListener("click", function() {
        balance++;
        document.getElementById("balance").innerText = balance;
    });
});