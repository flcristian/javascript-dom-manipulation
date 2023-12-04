const list = document.getElementById("student-list");

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

function clearPage(){
    while(list.children.length > 0){
        list.removeChild(list.firstElementChild);
    }
}

function displayPage(pageNumber) {    
    clearPage();
    for(let i = 9 * (pageNumber - 1);i<data.length && i<9*pageNumber;i++){
        let card = createCard(data[i]);
        list.appendChild(card);
    }
}

function displayPagination() {
    let pageCount = data.length / 9;
    if(data.length % 9 > 0){
        pageCount++;
    }
    console.log(data.length);
    for(let i = 1;i<pageCount;i++){
        console.log(i);
    }
}