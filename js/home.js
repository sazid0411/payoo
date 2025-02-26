const addMoney = document.getElementById("add-money");
const cashOut = document.getElementById("cash-out");
const transfer = document.getElementById("transfer");
const bonus = document.getElementById("bonus");
const pBill = document.getElementById("pay-bill");
const transact = document.getElementById("transact");


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



const btnAdd = document.getElementById("btn-add").addEventListener("click",()=>{

})

