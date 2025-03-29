let myLibrary = [];

// Book object constructor
function Book(title, author, pages, readOrNot) {
    console.log('book constr called')
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readOrNot = readOrNot;
    // this.info = function info() {
    //     return `${title} by ${author}, ${pages} pages, ${readOrNot}`
    // }
}

// Card div function
function Card(book) {
    console.log('card constr called')
    let cardMain = document.createElement('div');
    cardMain.className = 'card';
    let cardTitle = document.createElement('div');
    cardTitle.innerText = `Title:${book.title}`;
    let cardAuthor = document.createElement('div');
    cardAuthor.innerText = `Author:${book.author}`;
    let cardPages = document.createElement('div');
    cardPages.innerText = `Pages:${book.pages}`;
    let cardBookStatus = document.createElement('button');
    cardBookStatus.className = 'book-status-btn';
    cardBookStatus.innerText = book.readOrNot;
    if (book.readOrNot == "Read the book") {
        cardBookStatus.style.backgroundColor = 'green';
    }
    else {
        cardBookStatus.style.backgroundColor = 'palevioletred';
    }
    cardBookStatus.addEventListener('click', changeStatus);
    let delIcon = document.createElement('button');
    delIcon.className = 'delete-card-btn';
    delIcon.innerHTML = '<i class="fa-solid fa-trash-can fa-xl"></i>';
    delIcon.addEventListener('click', deleteCard);
    cardMain.append(cardTitle, cardAuthor, cardPages, cardBookStatus, delIcon);
    console.log(cardMain)
    return cardMain
}

// Function to add books to myLibrary array
function addBookToLibrary() {
    console.log('add books to lib func called')
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let readOrNot;
    if (document.getElementById('read-or-not').checked) {
        readOrNot = "Read the book";
    }
    else {
        readOrNot = "Yet to read";
    }
    const newBook = new Book(title, author, pages, readOrNot);
    myLibrary.push(newBook);
    document.getElementById('form').reset();
    console.log(myLibrary);
    addBookToDisplay(newBook);

}

// Function to diplay books in the myLibrary list as cards
function addBookToDisplay(book) {
    console.log('add to disp func called')
    let displayBooks = document.querySelector('.display-books');
    const addBook = Card(book);
    displayBooks.appendChild(addBook);
    console.log(book)
}

// Function to change book status
function changeStatus(e) {
    console.log('change status called')
    // let statusBtn = e.target.className;
    if (e.target.style.backgroundColor == 'palevioletred') {
        e.target.style.backgroundColor = 'green';
        e.target.textContent = "Read the book";
    }
    else {
        e.target.style.backgroundColor = 'palevioletred';
        e.target.textContent = "Yet to read";
    }

}

// Function to delete a card
function deleteCard(e) {
    const delDiv = e.target.parentNode.parentNode;
    delDiv.remove();

}

// Add book button
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', addBookToLibrary);

