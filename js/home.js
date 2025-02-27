const addMoney = document.getElementById("add-money");
const cashOut = document.getElementById("cash-out");
const transfer = document.getElementById("transfer");
const bonus = document.getElementById("bonus");
const pBill = document.getElementById("pay-bill");
const transact = document.getElementById("transact");

const select = document.getElementById("select");
const accoutNo = document.getElementById("account-field");
const paySelect = document.getElementById("select-pay");
const billAccount = document.getElementById("bill-account");

const date = new Date();








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



//add money button
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

            const div = ` <div class="p-3 bg-gray-200 rounded-lg m-2">
                    <h1 class="font-bold text-xl ">${amount} tk added from ${select.value}.</h1>
                    <h2 id="hh1" class="text-xs mt-1">${date.getDate()}-${date.getMonth()}-${date.getFullYear()}  ${date.getHours()}.${date.getMinutes()} </h2>
                </div>`;

            transAct.innerHTML += div;
        }

    } else {
        alert("Incorrect PIN")
    }
    ab.value = ""



})
// cash Out Button
const btnOut = document.getElementById("btn-out").addEventListener("click", (e) => {
    e.preventDefault();

    const balanceSpan = document.getElementById("balance");
    const balance = parseFloat(balanceSpan.innerText)
    const ab = document.getElementById("cashout-ammount")
    const amount = convertPurseInt("cashout-ammount");
    const pin = convertPurseInt("pin")

    if (pin === 1234) {

        if (ab.value === "") {
            alert("Enter Ammount")
        } else {
            const cash = balance - amount;
            balanceSpan.innerText = cash;



            const div2 = ` <div class="p-3 bg-gray-200 rounded-lg m-2">
                    <h1 class="font-bold text-xl ">${amount} tk cash out to ${accoutNo.value}.</h1>
                    <h2 id="hh1" class="text-xs mt-1">${date.getDate()}-${date.getMonth()}-${date.getFullYear()}  ${date.getHours()}.${date.getMinutes()} </h2>
                </div>`;

            transAct.innerHTML += div2;
        }

    } else {
        alert("Incorrect PIN")
    }

    ab.value = ""


})
// Transfer Button
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

            const div2 = ` <div class="p-3 bg-gray-200 rounded-lg m-2">
            <h1 class="font-bold text-xl ">${amount} tk tranfered to ${accoutNo.value}.</h1>
            <h2 id="hh1" class="text-xs mt-1">${date.getDate()}-${date.getMonth()}-${date.getFullYear()}  ${date.getHours()}.${date.getMinutes()} </h2>
        </div>`;

            transAct.innerHTML += div2;
        }

    } else {
        alert("Incorrect PIN")
    }

    ab.value = ""


})
// bonus Button

// Pay bill Button 
const btnPay = document.getElementById("btn-pay").addEventListener("click", (e) => {
    e.preventDefault();

    const balanceSpan = document.getElementById("balance");
    const balance = parseFloat(balanceSpan.innerText)
    const ab = document.getElementById("pay-amount")
    const amount = convertPurseInt("pay-amount");
    const pin = convertPurseInt("pin")

    if (pin === 1234) {

        if (ab.value === "") {
            alert("Enter Ammount")
        } else {
            const sum = balance - amount;
            balanceSpan.innerText = sum;

            const div2 = ` <div class="p-3 bg-gray-200 rounded-lg m-2">
            <h1 class="font-bold text-xl ">${amount} tk paid for ${paySelect.value} to ${billAccount.value} bill no</h1>
            <h2 id="hh1" class="text-xs mt-1">${date.getDate()}-${date.getMonth()}-${date.getFullYear()}  ${date.getHours()}.${date.getMinutes()} </h2>
        </div>`;

            transAct.innerHTML += div2;
        }

    } else {
        alert("Incorrect PIN")
    }

    ab.value = ""


})




