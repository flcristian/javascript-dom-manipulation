let searchButton = document.getElementById("search-button");
let search = document.getElementById("search");
let input = "";
let currentPage = 1;

display(currentPage, input);

searchButton.addEventListener('click', () => {
    input = search.value;
    currentPage = 1;
    display(currentPage, input);
});

pageList.addEventListener('click', (event) => {
    let target = event.target;
    if(target.tagName === "BUTTON"){
        let li = target.parentNode;
        let ul = li.parentNode;
        
        let newPage = parseInt(target.classList[0].split("page")[1]);
        ul.children[currentPage - 1].firstElementChild.classList.remove("active");
        ul.children[newPage - 1].firstElementChild.classList.add("active");

        currentPage = newPage;
        display(currentPage, input);
    }
});

