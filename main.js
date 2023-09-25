const myLibrary = [];

function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " + read;
    }
};

function addBookToLibrary() {
    let title = prompt("What is the books title?");
    let author = prompt("Who wrote the book?");
    let pages = prompt("How many pages long is the book?");
    let read = prompt("Have you read the book?");

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}