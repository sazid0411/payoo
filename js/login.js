const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", (e) => {
    const accField = document.getElementById("account-field").value;
    const pin = convertPurseInt("pin")

    e.preventDefault();

    if (accField.length === 11) {
        if (pin === 1234) {
            window.location.href = "home.html";

        }
        else {
           alert("Pin error")
        }
    } else {
        alert("Error Account")
    }


})