let input = document.getElementById("invite-input");
let submit = document.getElementById("invite-button");
let list = document.getElementById("invited-list");
let hideSwitch = document.getElementById("hide");
let hide = false;

submit.addEventListener('click', function () {
    if (input.value.trim() === "") return;
    addUser(newId, input.value, false);
    newId++;
    display(hide);
    input.value = "";
});

list.addEventListener('click', function (e) {
    let target = e.target;

    if (target.tagName === "BUTTON") {
        let li = target.parentNode;
        let id = parseInt(li.classList[0].split('-')[1]);
        switch (target.textContent) {
            case "Edit":
                toggleEdit(li);
                break;
            case "Remove":
                removeData(id);
                display(hide);
                break;
            case "Save":
                editUser(id, li.firstElementChild.value);
                display(hide);
                break;
            case "Cancel":
                cancelEdit(li);
                break;
        }
    }

    if(target.tagName == "INPUT" && target.type == "checkbox"){
        let li = target.parentNode.parentNode;
        let id = parseInt(li.classList[0].split('-')[1]);
        let user = getUserById(id);
        user.confirmed = !user.confirmed;

        display(hide);
    }
});

hideSwitch.addEventListener('change', function () {
    if(hideSwitch.checked === true) {
        hide = true;
        displayConfirmedUsers(list);
        return;
    }
    hide = false;
    displayAllUsers(list);
});

displayAllUsers(list);