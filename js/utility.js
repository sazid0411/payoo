function convertPurseInt(id) {
    const x = document.getElementById(id).value;
    const convertX = parseInt(x)
    return convertX;
}


function showSection(show, hide1, hide2) {
    show.classList.remove("hidden");
    hide1.classList.add("hidden");
    hide2.classList.add("hidden");
}


