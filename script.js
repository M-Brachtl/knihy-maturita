document.querySelectorAll('.navbar-search-button').forEach((element) => {
    element.addEventListener('click', () => {
        let search = document.querySelector('.navbar-input');
        if (search.value === "") {
            search = document.querySelector('.big input');
        };
        window.location.href = 'rozbory.html#' + search.value;
        try {

            const searchText = decodeURIComponent(window.location.hash.substring(1));
            console.log("Vyhledávaný text: " + searchText);
            document.querySelector('.big input').value = searchText;
            location.reload();
        } catch (error) { };
    });
});
let toSearch = "";
document.addEventListener('keydown', (e) => {
    setTimeout(() => {
    if(document.activeElement === document.querySelector('.big input')){
    try {
        // if (("abcdefghijklmnopqrstuvwxyzěščřžýáíéďťňóúů ".includes(e.key) || "ABCDEFGHIJKLMNOPQRSTUVWXYZĚŠČŘŽÝÁÍÉĎŤŇÓÚŮ ".includes(e.key)) && e.ctrlKey === false) {
        //     toSearch =document.querySelector('.big input').value;
        // } else if (e.key === "Backspace") {
        //     toSearch = document.querySelector('.big input').value//toSearch.substring(0, toSearch.length - 1);
        // } else {
        //     toSearch = document.querySelector('.big input').value;
        // }
        toSearch =document.querySelector('.big input').value;
        searchBooks(toSearch);
    } catch (e) { };
    console.log(toSearch);
    }},1);
    if (e.key === 'Enter') {
        let search = document.querySelector('.navbar-input');
        if (search.value === "") {
            search = document.querySelector('.big input');
        };
        window.location.href = 'rozbory.html#' + search.value;
        try {
            const searchText = decodeURIComponent(window.location.hash.substring(1));
            console.log("Vyhledávaný text: " + searchText);
            document.querySelector('.big input').value = searchText;
            location.reload();
        } catch (error) { };
    };
});

function searchBooks(searchText) {
    const books = document.querySelectorAll('.seznam-knih li');
    books.forEach((book)=>{
        if(book.textContent.toLowerCase().includes(searchText.toLowerCase())){
            book.style.display = "list-item";
        } else {
            book.style.display = "none";
        };
    });
};


// try {
//     const searchText = decodeURIComponent(window.location.hash.substring(1));
//     console.log("Vyhledávaný text: " + searchText);
//     document.querySelector('.big input').value = searchText;
// } catch (error) { };

async function getBooks() {
    const response = await fetch('knihy.json');
    const data = await response.json();
    data.forEach((book) => {
        document.querySelector('.seznam-knih').innerHTML += `<li><a class="seznam-button" onclick="document.querySelector('object').data='${book.path}'">${book.name}</a></li>`;
    });
};
try {
    getBooks().then(() => {
        const searchText = decodeURIComponent(window.location.hash.substring(1));
        console.log("Vyhledávaný text: " + searchText);
        document.querySelector('.big input').value = searchText;
        searchBooks(searchText);
    });
} catch (error) {};