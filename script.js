document.querySelector('.navbar-search-button').addEventListener('click',()=>{
    const search = document.querySelector('.navbar-input');
    window.location.href = 'rozbory.html#'+search.value;
    location.reload();
});
const searchText = decodeURIComponent(window.location.hash.substring(1));
console.log("Vyhledávaný text: " + searchText);
