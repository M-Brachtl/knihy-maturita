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
    try {
        if ("abcdefghijklmnopqrstuvwxyzěščřžýáíéďťňóúů ".includes(e.key) || "ABCDEFGHIJKLMNOPQRSTUVWXYZĚŠČŘŽÝÁÍÉĎŤŇÓÚŮ ".includes(e.key)) {
            toSearch += e.key;
        } else if (e.key === "Backspace") {
            toSearch = toSearch.substring(0, toSearch.length - 1);
        };
        searchBooks(toSearch);
        
    } catch (e) { };
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
    document.getElementById('test-search').innerHTML = searchText;
};


try {
    const searchText = decodeURIComponent(window.location.hash.substring(1));
    console.log("Vyhledávaný text: " + searchText);
    document.querySelector('.big input').value = searchText;
    searchBooks(searchText);
} catch (error) { };