try {
    if(localStorage.theme == 'dark'){
        console.log('dark');
        document.getElementById('styles').disabled = true;
        document.querySelector('.theme-mode-switch button').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>';
    }else{
        console.log('light');
        document.getElementById('dark-styles').disabled = true;
    }
} catch (error) {
    console.log('light+');
    document.getElementById('dark-styles').disabled = true;
}


let darkmode;
try {
    darkmode = localStorage.theme === 'dark';
} catch (error) {
    localStorage.setItem('theme', 'light');
    darkmode = localStorage.theme === 'dark';
}

document.querySelectorAll('.navbar-search-button').forEach((element) => {
    element.addEventListener('click', () => {
        let search = document.querySelector('.navbar-input');
        if (search.value === "") {
            search = document.querySelector('.big input');
        };
        window.location.href = 'rozbory.html#' + search.value;
        try {

            const searchText = decodeURIComponent(window.location.hash.substring(1));
            //console.log("Vyhledávaný text: " + searchText);
            document.querySelector('.big input').value = searchText;
            location.reload();
        } catch (error) { };
    });
});
// function sectionPDF(bookInfo){
//     console.log("AAAAAAAAAAAAAAAAAAAAAAAAa");
//     document.querySelector('object').data='${book.path}';
//     // mobile view
//     const mobileView = document.querySelector('#mobile-pdf');
//     mobileView.childNodes[0].textContent = bookInfo.name;
//     mobileView.childNodes[1].textContent = bookInfo.author;
//     mobileView.childNodes[2].href = bookInfo.path;
// }
let toSearch = "";
document.addEventListener('keydown', (e) => {
    setTimeout(() => {
        if (document.activeElement === document.querySelector('.big input')) {
            try {
                // if (("abcdefghijklmnopqrstuvwxyzěščřžýáíéďťňóúů ".includes(e.key) || "ABCDEFGHIJKLMNOPQRSTUVWXYZĚŠČŘŽÝÁÍÉĎŤŇÓÚŮ ".includes(e.key)) && e.ctrlKey === false) {
                //     toSearch =document.querySelector('.big input').value;
                // } else if (e.key === "Backspace") {
                //     toSearch = document.querySelector('.big input').value//toSearch.substring(0, toSearch.length - 1);
                // } else {
                //     toSearch = document.querySelector('.big input').value;
                // }
                toSearch = document.querySelector('.big input').value;
                searchBooks(toSearch);
            } catch (e) { };
            console.log(toSearch);
        }
    }, 1);
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
    books.forEach((book) => {
        if (book.textContent.toLowerCase().includes(searchText.toLowerCase())) {
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
        document.querySelector('.seznam-knih').innerHTML += `<li class="seznam-button"><a class="seznam-button-text">${book.name}<span>- ${book.author}</span></a></li>`;
    });
    for (let i = 0; i < data.length; i++) {
        let book = data[i];
        document.querySelector('.seznam-knih').childNodes[i+1].addEventListener('click',() => {
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAa");
            document.querySelector('object').data = book.path;
            // mobile view
            const mobileView = document.querySelector('#mobile-pdf');
            mobileView.childNodes[1].textContent = book.name;
            mobileView.childNodes[3].textContent = book.author;
            mobileView.childNodes[5].href = book.path;
        });
    };
    // document.querySelectorAll('li').forEach((button) => {
    //     if (button.childNodes[0].getBoundingClientRect().width < button.childNodes[1].clientWidth) {
    //         button.childNodes[0].style.paddingRight = button.childNodes[1].clientWidth - button.childNodes[0].getBoundingClientRect().width + 16 + 6 + "px";
    //     }
    // });
};
try {
    getBooks().then(() => {
        const searchText = decodeURIComponent(window.location.hash.substring(1));
        console.log("Vyhledávaný text: " + searchText);
        document.querySelector('.big input').value = searchText;
        searchBooks(searchText);
        if (document.querySelector('.navbar-heading').clientWidth == 0) {
            console.log("Mobilní zařízení");
            document.querySelector('object').style.display = "none";
        } else {
            document.getElementById('mobile-pdf').style.display = "none";
        }
    });
} catch (error) { };


// Adamův prostor //

const navButtonMenu = document.querySelector(".menu-button");
const dropMenu = document.querySelector(".dropdown");
dropMenu.style.opacity = "0";
navButtonMenu.addEventListener("click", () => {
    if (dropMenu.style.opacity === "0") {
        dropMenu.style.opacity = "1";
        dropMenu.style.visibility = "visible";
    } else {
        dropMenu.style.opacity = "0";
        dropMenu.style.visibility = "hidden";
    }
});

// sidebar //

const sidebar = document.querySelector('aside');
const sidebarWidth = sidebar.getBoundingClientRect().width + 2 + 'px'; // 2px je border
sidebar.style.left = '-' + sidebarWidth;

sidebar.addEventListener('mouseenter', () => {
    sidebar.style.left = '0px';
    let leftArrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    leftArrow.setAttribute('height', '24');
    leftArrow.setAttribute('viewBox', '0 -960 960 960');
    leftArrow.setAttribute('width', '24');
    leftArrow.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    leftArrow.innerHTML = '<path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z"/>';
    leftArrow.id = 'aside-button-svg';
    document.querySelector('#sidebar-btn').innerHTML = '';
    document.querySelector('#sidebar-btn').appendChild(leftArrow);
});

sidebar.addEventListener('mouseleave', () => {
    console.log('mouseleave');
    sidebar.style.left = '-' + sidebarWidth; // šířka sidebaru bez tlačítka
    let rightArrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    rightArrow.setAttribute('height', '24');
    rightArrow.setAttribute('viewBox', '0 -960 960 960');
    rightArrow.setAttribute('width', '24');
    rightArrow.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    rightArrow.innerHTML = '<path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/>';
    rightArrow.id = 'aside-button-svg';
    document.querySelector('#sidebar-btn').innerHTML = '';
    document.querySelector('#sidebar-btn').appendChild(rightArrow);
});