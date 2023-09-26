const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " + read;
    }
}

function openNewBookForm() {
    const newBookButton = document.getElementById('newbook');
    newBookButton.addEventListener('click', function() {
        const newBookForm = document.createElement('form');
        newBookForm.style.cssText = 
            "display: flex; flex-direction: column; flex-basis: 50px; margin: 10px" ;
        document.body.appendChild(newBookForm);

        const newTitle = document.createElement('input');
        newTitle.setAttribute("id", "title");
        newTitle.style.cssText = 'width: 300px;'
        const titleLabel = document.createElement('label');
        titleLabel.style.cssText = "width: 100px";
        titleLabel.innerHTML = "Title";
        newBookForm.appendChild(titleLabel);
        newBookForm.appendChild(newTitle);

        const newAuthor = document.createElement('input');
        newAuthor.setAttribute("id", "author");
        newAuthor.style.cssText = 'width: 300px;'
        const authorLabel = document.createElement('label');
        authorLabel.style.cssText = "width: 100px";
        authorLabel.innerHTML = "Author";
        newBookForm.appendChild(authorLabel);
        newBookForm.appendChild(newAuthor);

        const newPages = document.createElement('input');
        newPages.setAttribute("id", "pages");
        newPages.style.cssText = 'width: 300px;'
        const pagesLabel = document.createElement('label');
        pagesLabel.style.cssText = "width: 100px";
        pagesLabel.innerHTML = "Pages";
        newBookForm.appendChild(pagesLabel);
        newBookForm.appendChild(newPages);

        const newRead = document.createElement('input');
        newRead.setAttribute("id", "read");
        newRead.style.cssText = 'width: 300px;'
        const readLabel = document.createElement('label');
        readLabel.style.cssText = "width: 100px";
        readLabel.innerHTML = "Read";
        newBookForm.appendChild(readLabel);
        newBookForm.appendChild(newRead);

        const submitButton = document.createElement('button');
        submitButton.setAttribute("id", "submit-new-book");
        submitButton.style.cssText = 'width: 300px; margin: 5px'
        submitButton.innerHTML = "Add this book";
        newBookForm.appendChild(submitButton);
    })
}

openNewBookForm();

function addBookToLibrary() {


    let title = prompt("What is the books title?");
    let author = prompt("Who wrote the book?");
    let pages = prompt("How many pages long is the book?");
    let read = prompt("Have you read the book?");

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function createNewTable() { 
    const table =  document.createElement('table');
    table.setAttribute('id', 'library');
    document.body.appendChild(table);

    const header = document.createElement('tr');
    table.appendChild(header);

    const titleHeader = document.createElement('th');
    titleHeader.innerHTML = 'Title';
    header.appendChild(titleHeader);

    const authorHeader = document.createElement('th');
    authorHeader.innerHTML = 'Author';
    header.appendChild(authorHeader);

    const pagesHeader = document.createElement('th');
    pagesHeader.innerHTML = 'Pages';
    header.appendChild(pagesHeader);

    const readHeader = document.createElement('th');
    readHeader.innerHTML = 'Read';
    header.appendChild(readHeader);
}

createNewTable();  
function showcaseLibrary() {

    const currentTable = document.querySelector('table');
    currentTable.replaceChildren();

    for (let i = 0; i < myLibrary.length; i++) {
        const newRow = document.createElement('tr');
        currentTable.append(newRow)

        const newTitle = document.createElement('td');
        newTitle.innerHTML = myLibrary[i].title;
        newRow.append(newTitle);

        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = myLibrary[i].author;
        newRow.append(newAuthor);

        const newPages = document.createElement('td');
        newPages.innerHTML = myLibrary[i].pages;
        newRow.append(newPages);

        const newRead = document.createElement('td');
        newRead.innerHTML = myLibrary[i].read;
        newRow.append(newRead);
    }
}


showcaseLibrary();