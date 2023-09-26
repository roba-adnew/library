const myLibrary = [];
// const newONe = new Book("me", "mine", "many", "meh");
// myLibrary.push(newONe);

function Book(title, author, pages, read) {
    this.Title = title
    this.Author = author
    this.Pages = pages
    this.Read = read
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

        let bookExample = new Book();
        for (key in bookExample) {
            if (key != 'info') {
                const newField = document.createElement('input');
                newField.setAttribute("id", key);
                newField.style.cssText = 'width: 300px;'
                const newLabel = document.createElement('label');
                newLabel.style.cssText = "width: 100px";
                newLabel.innerHTML = key;
                newBookForm.appendChild(newLabel);
                newBookForm.appendChild(newField);
            }
            
        }

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

        for (const key in myLibrary[i]) {
            if (key != 'info') {
                const newCell = document.createElement('td');
                newCell.innerHTML = myLibrary[i]    [key];
                newRow.append(newCell);
            }
        }
    }
}


showcaseLibrary();