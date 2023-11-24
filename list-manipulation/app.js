let deleteButtons = document.querySelectorAll(".remove");
let addButton = document.querySelector("#add-button");
let addInput = document.querySelector("#add-input");
let list = document.querySelector("#list");

addButton.addEventListener('click', function () {
    let value = addInput.value;
    if (value.trim() == "") return;

    let element = createItem(value);
    list.appendChild(element);
    addInput.value = "";
});

list.addEventListener('click', function (e) {
    let target = e.target;

    if (target.tagName == "BUTTON") {
        let li = target.parentNode;
        switch (target.textContent) {
            case "Up":
                let previous = li.previousElementSibling;
                if(previous === null) break;
                list.removeChild(li);
                list.insertBefore(li, previous);   
                break;
            case "Down":
                let next = li.nextElementSibling;
                if(next === null) break;
                list.removeChild(li);
                list.insertBefore(li, next.nextElementSibling);
                break;
            case "Remove":
                list.removeChild(li);
                break;
        }
    }
})

