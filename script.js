let $ = document;

let input = $.querySelector(".input");
let deleteBtn = $.querySelector(".btn-delete");
let ul = $.querySelector(".ul");
let liElm = $.querySelectorAll(".li-items");
let addElem = $.querySelector(".add");


liElm.forEach(function (e) {
    let newIcon = document.createElement("i");

    newIcon.className = "fa-solid fa-trash";
    newIcon.style.cursor = "pointer"
    e.append(newIcon);
    // liElm.append(newIcon)
    newIcon.addEventListener("click", function () {
        newIcon.parentElement.remove()
    })
});


function createNewElem() {
    let newElm = $.createElement("li");
    newElm.innerHTML = input.value;
    newElm.className = "li-items";
    ul.appendChild(newElm);
    input.value = "";

    let newIcon = document.createElement("i");
    newIcon.className = "fa-solid fa-trash";
    newIcon.style.cursor = "pointer"
    newElm.append(newIcon);

    newIcon.addEventListener("click", function () {
        newIcon.parentElement.remove()
    })
}

input.addEventListener("keydown", function (event) {
    if(input.value == "" && event.key == "Enter"){
        alert("Please write your task and then press enter")
    }else if (event.key == "Enter") {
        createNewElem();
    }
});

function deleteAllLi() {
    ul.replaceChildren("");
}

deleteBtn.addEventListener("click", function () {
    deleteAllLi();
});





