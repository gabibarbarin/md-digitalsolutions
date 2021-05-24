let playButton = document.getElementById("play-button");
let modal = document.getElementById("modal");
let modalContainer = document.getElementById("modal-container");
let cruzModal = document.getElementById("cruz-modal");
let iframe = document.getElementById("iframe");
let atribute = iframe.getAttribute("src");

playButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (atribute == "")
    iframe.setAttribute("src","https://www.youtube.com/embed/cQ-jrVyd1vg");

    modalContainer.style.visibility = "visible";
    modal.classList.toggle("open-modal");
});

cruzModal.addEventListener("click", () => {

    modalContainer.style.visibility = "hidden";

    iframe.setAttribute("src"," ");
    atribute=""
    
    modal.classList.toggle("open-modal");
});