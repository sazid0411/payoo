const addMoney = document.getElementById("add-money");
const cashOut = document.getElementById("cash-out");
const transfer = document.getElementById("transfer");
const bonus = document.getElementById("bonus");
const pBill = document.getElementById("pay-bill");
const transact = document.getElementById("transact");

const logout = document.getElementById("logout").addEventListener("click", () => {
    window.location.href = "index.html";
})


const addSection = document.getElementById("add-money-section");
const cOutSection = document.getElementById("cash-out-section");
const transferSection = document.getElementById("transfer-section");

addMoney.addEventListener("click", () => {
    showSection(addSection, cOutSection, transferSection)
});
cashOut.addEventListener("click", () => {
    showSection(cOutSection, addSection, transferSection)
});
transfer.addEventListener("click", () => {
    showSection(transferSection, cOutSection, addSection)

});




const btnAdd = document.getElementById("btn-add").addEventListener("click", (e) => {
    e.preventDefault();

    const balanceSpan = document.getElementById("balance");
    const balance = parseFloat(balanceSpan.innerText)
    const ab = document.getElementById("amount-field").value
    const amount = convertPurseInt("amount-field");
    const pin = convertPurseInt("pin")

    if (pin === 1234) {

        if (ab === "") {
            alert("Enter Ammount")
        } else {
            const sum = balance + amount;
            balanceSpan.innerText = sum;
        }

    } else {
        alert("Incorrect PIN")
    }


})
const btnOut = document.getElementById("btn-out").addEventListener("click", (e) => {
    e.preventDefault();

    const balanceSpan = document.getElementById("balance");
    const balance = parseFloat(balanceSpan.innerText)
    const ab = document.getElementById("amountout-field").value
    const amount = convertPurseInt("amountout-field");
    const pin = convertPurseInt("pin")

    if (pin === 1234) {

        if (ab === "") {
            alert("Enter Ammount")
        } else {
            const sum = balance - amount;
            balanceSpan.innerText = sum;
        }

    } else {
        alert("Incorrect PIN")
    }


})
