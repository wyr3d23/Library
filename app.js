

// Constructor to make book objects

function Book(title, author, numpages, readornot) {
    this.title = title;
    this.author = author;
    this.numpages = numpages;
    this.readornot = readornot;
    this.info = function() {
        return title + ' by ' + author + ', ' + numpages + ' pages, ' + readornot;
    };
}

const book1 = new Book('The Hobbit', 'J.R.R Tolkien', 255, 'not read');

console.log(book1.info());
