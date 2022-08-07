let myLibrary = [];
class Book {
    constructor(title, author, pages, readOrNot) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readOrNot = readOrNot;
    }
    addBookToDisplay() {
        let displayBooks = document.querySelector('.display-books');
        const addBook = this.Card();
        displayBooks.appendChild(addBook);
    }
    Card() {
        let cardMain = document.createElement('div');
        cardMain.className = 'card';
        let cardTitle = document.createElement('div');
        cardTitle.innerText = `Title:${this.title}`;
        let cardAuthor = document.createElement('div');
        cardAuthor.innerText = `Author:${this.author}`;
        let cardPages = document.createElement('div');
        cardPages.innerText = `Pages:${this.pages}`;
        let cardBookStatus = document.createElement('button');
        cardBookStatus.className = 'book-status-btn';
        cardBookStatus.innerText = this.readOrNot;
        if (this.readOrNot == "Read the book") {
            cardBookStatus.style.backgroundColor = 'green';
        }
        else {
            cardBookStatus.style.backgroundColor = 'palevioletred';
        }
        cardBookStatus.addEventListener('click', this.changeStatus);
        let delIcon = document.createElement('button');
        delIcon.className = 'delete-card-btn';
        delIcon.innerHTML = '<i class="fa-solid fa-trash-can fa-xl"></i>';
        delIcon.addEventListener('click', this.deleteCard);
        cardMain.append(cardTitle, cardAuthor, cardPages, cardBookStatus, delIcon);
        return cardMain
    }
    changeStatus(e) {
        if (e.target.style.backgroundColor == 'palevioletred') {
            e.target.style.backgroundColor = 'green';
            e.target.textContent = "Read the book";
        }
        else {
            e.target.style.backgroundColor = 'palevioletred';
            e.target.textContent = "Yet to read";
        }

    }
    deleteCard(e) {
        const delDiv = e.target.parentNode.parentNode;
        delDiv.remove();
    }
}

function addBookToLibrary() {
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
    newBook.addBookToDisplay();

}
const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', addBookToLibrary);