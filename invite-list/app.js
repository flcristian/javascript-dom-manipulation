let input = document.getElementById("invite-input");
let submit = document.getElementById("invite-button");
let list = document.getElementById("invited-list");

submit.addEventListener('click', function () {
    if (input.value.trim() === "") return;
    let element = createElement(input.value);
    list.appendChild(element);
    input.value = "";
});

list.addEventListener('click', function (e) {
    let target = e.target;

    if (target.tagName === "BUTTON") {
        let li = target.parentNode;
        switch (target.textContent) {
            case "Edit":
                toggleEdit(li);
                break;
            case "Remove":
                list.removeChild(li);
                break;
            case "Save":
                saveElement(li);
                break;
            case "Cancel":
                cancelEdit(li);
                break;
        }
    }
});
