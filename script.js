document.querySelectorAll('.navbar-search-button').forEach((element)=>{
    element.addEventListener('click',()=>{
        let search = document.querySelector('.navbar-input');
        if (search.value === "") {
            search = document.querySelector('.big input');
        };
        window.location.href = 'rozbory.html#'+search.value;
        try {
            
            const searchText = decodeURIComponent(window.location.hash.substring(1));
            console.log("Vyhledávaný text: " + searchText);
            document.querySelector('.big input').value = searchText;
            location.reload();
        } catch (error) {};
    });
});
document.addEventListener('keypress',(e)=>{
    if (e.key === 'Enter') {
        let search = document.querySelector('.navbar-input');
        if (search.value === "") {
            search = document.querySelector('.big input');
        };
        window.location.href = 'rozbory.html#'+search.value;
        try {
            const searchText = decodeURIComponent(window.location.hash.substring(1));
            console.log("Vyhledávaný text: " + searchText);
            document.querySelector('.big input').value = searchText;
            location.reload();
        } catch (error) {};
    };
});
try {
    const searchText = decodeURIComponent(window.location.hash.substring(1));
    console.log("Vyhledávaný text: " + searchText);
    document.querySelector('.big input').value = searchText;
    
} catch (error) {};