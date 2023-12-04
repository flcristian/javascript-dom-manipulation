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

function createLabel() {
    let label = document.createElement('label');
    label.textContent = "Confirmed";
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
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

function createElement(text) {
    let span = createSpanText(text);
    let label = createLabel();
    let edit = createEditButton();
    let remove = createRemoveButton();

    let element = document.createElement('li');
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

function saveElement(li) {
    let text = li.firstElementChild.value;
    li.removeChild(li.firstElementChild);
    li.removeChild(li.lastElementChild);
    li.removeChild(li.lastElementChild);

    li.firstElementChild.textContent = text;
    li.firstElementChild.style.display = "inline-block";
    li.insertBefore(createEditButton(), null);
    li.insertBefore(createRemoveButton(), null);
}

function cancelEdit(li) {
    li.removeChild(li.firstElementChild);
    li.removeChild(li.lastElementChild);
    li.removeChild(li.lastElementChild);

    li.firstElementChild.style.display = "inline-block";
    li.insertBefore(createEditButton(), null);
    li.insertBefore(createRemoveButton(), null);
}