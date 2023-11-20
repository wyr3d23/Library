let myLibrary = [];


const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const addBook = document.querySelector('#add-book');

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);

    myLibrary.push(book);
    showLibrary();
}

function showLibrary() {
    const bookList = document.querySelector('.tableBody');
    bookList.textContent = "";
    for (let i = 0; i < myLibrary.length; i += 1) {
        const bookRow = document.createElement('tr');
        bookRow.classList.add('book-info');
        bookList.appendChild(bookRow);

        const bookTitle = document.createElement('td');
        bookTitle.textContent = myLibrary[i].title;
        bookRow.appendChild(bookTitle);

        const bookAuthor = document.createElement('td');
        bookAuthor.textContent = myLibrary[i].author;
        bookRow.appendChild(bookAuthor);

        const bookPages = document.createElement('td');
        bookPages.textContent = myLibrary[i].pages;
        bookRow.appendChild(bookPages);
    }
}


function validateForm(e) {
    e.preventDefault();
    const form = document.querySelector('form');
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const pagesInput = document.querySelector('#pages');

    if (titleInput.value !== '' && authorInput.value !== '' && pagesInput.value !== '' && pagesInput.value !== ''
    && pagesInput.value > 0) {
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value)
    }
    form.reset();
}

function bookListener() {
    document.addEventListener('click', (e) => {
        const { target } = e;
        if (target.id === 'add-book') {
            validateForm(e);
        }
        showLibrary();
    });
}

showLibrary();
bookListener();


