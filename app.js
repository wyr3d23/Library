let myLibrary = [];


const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const addBook = document.querySelector('#add-book');

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    const book = new Book(title, author, pages, isRead);

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

        const isRead = document.createElement('td');
        isRead.textContent = myLibrary[i].isRead;
        bookRow.appendChild(isRead);

        const deleteRow = document.createElement('td');
        deleteRow.classList.add('delete-row');
        bookRow.appendChild(deleteRow);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteRow.appendChild(deleteBtn);
    }
}
function clearEntry() {
    const bookList = document.querySelector('.tableBody');
    const bookRow = document.querySelector('tr');
    bookList.removeChild(bookRow);

    const bookTitle = document.querySelector('td');
    bookRow.removeChild(bookTitle);

    const bookAuthor = document.querySelector('td');
    bookRow.removeChild(bookAuthor);

    const bookPages = document.querySelector('td');
    bookRow.removeChild(bookPages);

    const isRead = document.querySelector('td');
    bookRow.removeChild(isRead);

    const deleteRow = document.querySelector('td');
    bookRow.removeChild(deleteRow);

    const deleteBtn = document.querySelector('button');
    deleteRow.removeChild(deleteBtn);

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
        } else if (target.className === 'delete-btn') {
            clearEntry();
        }
        showLibrary();
    });
}

showLibrary();
bookListener();


