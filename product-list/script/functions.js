function createItem(value) {

    // Initializing buttons
    const up = document.createElement('button');
    up.textContent = "Up";
    up.classList.add('add');
    const down = document.createElement('button');
    down.textContent = "Down";
    down.classList.add('down');
    const remove = document.createElement('button');
    remove.textContent = "Remove";
    remove.classList.add('remove');

    // Initializing element
    let element = document.createElement('li');
    element.textContent = value;
    element.appendChild(up);
    element.appendChild(down);
    element.appendChild(remove);

    return element;
}

function moveUp(element) {

}

function moveDown(element) {

}