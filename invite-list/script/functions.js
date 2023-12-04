function createInput(text) {
    let input = document.createElement('input');
    input.type = "text";
    input.value = text;
    return input;
}

function createSpanText(text) {
    let span = document.createElement('span');
    span.textContent = text;
    return span;
}

function createLabel(confirmed) {
    let label = document.createElement('label');
    label.textContent = "Confirmed";
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = confirmed;
    label.appendChild(checkbox);
    return label;
}

function createEditButton() {
    let button = document.createElement('button');
    button.textContent = "Edit";
    return button;
}

function createRemoveButton() {
    let button = document.createElement('button');
    button.textContent = "Remove";
    return button;
}

function createSaveButton() {
    let button = document.createElement('button');
    button.textContent = "Save";
    return button;
}

function createCancelButton() {
    let button = document.createElement('button');
    button.textContent = "Cancel";
    return button;
}

function createElement(id, name, confirmed) {
    let span = createSpanText(name);
    let label = createLabel(confirmed);
    let edit = createEditButton();
    let remove = createRemoveButton();

    let element = document.createElement('li');
    element.classList.add(`id-${id}`);
    element.appendChild(span);
    element.appendChild(label);
    element.appendChild(edit);
    element.appendChild(remove);

    return element;
}

function toggleEdit(li) {
    let text = li.firstElementChild;
    li.firstElementChild.style.display = "none";
    li.removeChild(li.lastElementChild);
    li.removeChild(li.lastElementChild);

    li.insertBefore(createInput(text.textContent), text);
    li.insertBefore(createSaveButton(), null);
    li.insertBefore(createCancelButton(), null);
}

function cancelEdit(li) {
    li.removeChild(li.firstElementChild);
    li.removeChild(li.lastElementChild);
    li.removeChild(li.lastElementChild);

    li.firstElementChild.style.display = "inline-block";
    li.insertBefore(createEditButton(), null);
    li.insertBefore(createRemoveButton(), null);
}

function addUser(id, name, confirmed){
    let user = {
        id:id,
        name:name,
        confirmed:confirmed
    };
    data[data.length] = user;
}

function clearUsers(list){
    while(list.children.length != 0){
        list.removeChild(list.children[0]);
    }
}

function displayUser(id, name, confirmed, list){
    let user = createElement(id, name, confirmed);
    list.appendChild(user);
}

function displayAllUsers(list){
    clearUsers(list);
    for(let i = 0;i<data.length;i++){
        let element = data[i];
        displayUser(element.id, element.name, element.confirmed, list);
    }
}

function displayConfirmedUsers(list){
    clearUsers(list);
    for(let i = 0;i<data.length;i++){
        let element = data[i];
        if(element.confirmed === true){
            displayUser(element.id, element.name, element.confirmed, list);
        }
    }
}

function getUserById(id){
    for(let i = 0;i<data.length;i++){
        if(data[i].id === id){
            return data[i];
        }
    }
}

function display(hide){
    if(hide){
        displayConfirmedUsers(list);
    }
    else{
        displayAllUsers(list);
    }
}

function removeUser(id){
    let index;
    for(let i = 0;i<data.length;i++){
        if(data[i].id === id){
            index = i;
            break;
        }
    }

    for(let i = index; i < data.length - 1;i++){
        data[i] = data[i+1];
    }
    data.length--;
}

function editUser(id, name){
    for(let i = 0;i<data.length;i++){
        if(data[i].id === id){
            data[i].name = name;
            break;
        }
    }
}