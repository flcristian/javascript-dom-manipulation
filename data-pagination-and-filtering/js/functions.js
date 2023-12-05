const profileList = document.getElementById("student-list");
const pageList = document.getElementById("page-list");

function createName(first, last){
    let name = document.createElement('h3');
    name.textContent = `${first} ${last}`;
    return name;
}

function createAvatar(image){
    let avatar = document.createElement('img');
    avatar.classList.add("avatar");
    avatar.src = image;
    avatar.alt = "Profile Picture";
    return avatar;
}

function createEmail(emailAddress){
    let email = document.createElement('span');
    email.classList.add("email");
    email.textContent = emailAddress;
    return email;
}

function createDate(registrationDate){
    let date = document.createElement('span');
    date.classList.add("date");
    date.textContent = `Joined ${registrationDate}`;
    return date;
}

function createCard(item) {
    let name = createName(item.name.first, item.name.last);
    let avatar = createAvatar(item.picture.large);
    let email = createEmail(item.email);

    let studentDetails = document.createElement('div');
    studentDetails.appendChild(name);
    studentDetails.appendChild(avatar);
    studentDetails.appendChild(email);
    studentDetails.classList.add("student-details");

    let date = createDate(item.registered.date);
    
    let joinedDetails = document.createElement('div');
    joinedDetails.appendChild(date);
    joinedDetails.classList.add("joined-details");

    let card = document.createElement('li');
    card.appendChild(studentDetails);
    card.appendChild(joinedDetails);
    card.classList.add("student-item");
    card.classList.add("cf");

    return card;
}

function clearProfileList(){
    while(profileList.children.length > 0){
        profileList.removeChild(profileList.firstElementChild);
    }
}

function filter(dataValue, input){
    let name = dataValue.name.first + " " + dataValue.name.last;
    if(name.toLocaleLowerCase().includes(input.toLocaleLowerCase())){
        return true;
    }
    return false;
}

function filteredData(data, input){
    if(!input){
        return data;
    }
    let newData = [];
    let length = 0;
    for(let i = 0;i<data.length;i++){
        if(filter(data[i], input)){
            newData[length] = data[i];
            length++;
        }
    }
    return newData;
}

function displayPage(entries, pageNumber) {    
    clearProfileList();
    for(let i = 9 * (pageNumber - 1);i<entries.length && i<9*pageNumber;i++){
        let card = createCard(entries[i]);
        profileList.appendChild(card);
    }
}

function createPageButton(number, active){
    let button = document.createElement('button');
    button.classList.add(`page${number}`);
    if(active){
        button.classList.add("active");
    }
    button.textContent = number;
    return button;
}

function addPageButton(number, active){
    let li = document.createElement('li');
    let button = createPageButton(number, active)
    li.appendChild(button);
    pageList.appendChild(li);
}

function clearPageList(){
    while(pageList.children.length > 0){
        pageList.removeChild(pageList.firstElementChild);
    }
}

function displayPagination(entries, current) {
    clearPageList();
    let pageCount = parseInt(entries.length % 9 > 0 ? entries.length / 9 + 1 : entries.length / 9);
    for(let i = 1;i<pageCount + 1;i++){
        if(i === current){
            addPageButton(i, true);
        }else{
            addPageButton(i, false);
        }
    }
}

function display(current, input){
    let entries = filteredData(data, input);
    displayPage(entries, current);
    displayPagination(entries, current);
}