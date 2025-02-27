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
const bonusSection = document.getElementById("bonus-section");
const pBillSection = document.getElementById("pbill-section");
const transAct = document.getElementById("transact-section");

addMoney.addEventListener("click", () => {
    showSection(addSection, transAct, transferSection, cOutSection, pBillSection, bonusSection)

});
cashOut.addEventListener("click", () => {
    showSection(cOutSection, transAct, transferSection, addSection, pBillSection, bonusSection)

});
transfer.addEventListener("click", () => {
    showSection(transferSection, transAct, cOutSection, addSection, pBillSection, bonusSection)

});
bonus.addEventListener("click", () => {
    showSection(bonusSection, transAct, transferSection, cOutSection, addSection, pBillSection)

});
pBill.addEventListener("click", () => {
    showSection(pBillSection, transAct, transferSection, cOutSection, addSection, bonusSection)

});
transact.addEventListener("click", () => {
    showSection(transAct, transferSection, cOutSection, addSection, pBillSection, bonusSection)
});




const btnAdd = document.getElementById("btn-add").addEventListener("click", (e) => {
    e.preventDefault();

    const balanceSpan = document.getElementById("balance");
    const balance = parseFloat(balanceSpan.innerText)
    const ab = document.getElementById("amount-field")
    const amount = convertPurseInt("amount-field");
    const pin = convertPurseInt("pin")

    if (pin === 1234) {

        if (ab.value === "") {
            alert("Enter Ammount")
        } else {
            const sum = balance + amount;
            balanceSpan.innerText = sum;
        }

    } else {
        alert("Incorrect PIN")
    }

    ab.value = ""
})
const btnOut = document.getElementById("btn-out").addEventListener("click", (e) => {
    ;

    const balanceSpan = document.getElementById("balance");
    const balance = parseFloat(balanceSpan.innerText)
    const ab = document.getElementById("amountout-field")
    const amount = convertPurseInt("amountout-field");
    const pin = convertPurseInt("pin")

    if (pin === 1234) {

        if (ab.value === "") {
            alert("Enter Ammount")
        } else {
            const sum = balance - amount;
            balanceSpan.innerText = sum;
        }

    } else {
        alert("Incorrect PIN")
    }

    ab.value = ""


})
const btnTransfer = document.getElementById("btn-transfer").addEventListener("click", (e) => {
    e.preventDefault();

    const balanceSpan = document.getElementById("balance");
    const balance = parseFloat(balanceSpan.innerText)
    const ab = document.getElementById("tranfer-amount-field")
    const amount = convertPurseInt("tranfer-amount-field");
    const pin = convertPurseInt("pin")

    if (pin === 1234) {

        if (ab.value === "") {
            alert("Enter Ammount")
        } else {
            const sum = balance - amount;
            balanceSpan.innerText = sum;
        }

    } else {
        alert("Incorrect PIN")
    }

    ab.value = ""


})



