const myLibrary = [];
// const newONe = new Book('me', 'mine', 'many', 'meh');
// myLibrary.push(newONe);

function Book(title, author, pages, read) {
    this.Title = title
    this.Author = author
    this.Pages = pages
    this.Read = read
    this.info = function() {
        return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
    }
}

function addNewBookForm() {
    const newBookButton = document.getElementById('newbook');
    
    newBookButton.addEventListener('click', function() {
        function createForm() {
            const newBookForm = document.createElement('form');
            newBookForm.setAttribute('id','form');
            newBookForm.style.cssText = 
            'display: flex; flex-direction: column; flex-basis: 50px; margin: 10px' ;
            document.body.appendChild(newBookForm);

            let bookExample = new Book();
            for (key in bookExample) {
                if (key != 'info') {
                    const newLabel = document.createElement('label');
                    newLabel.style.cssText = 'width: 100px';
                    newLabel.innerHTML = key;
                    newBookForm.appendChild(newLabel);
                    
                    const newField = document.createElement('input');
                    newField.setAttribute('id', key);
                    newField.style.cssText = 'width: 300px;'
                    newBookForm.appendChild(newField);
                } 
            } 

            const submitButton = document.createElement('button');
            submitButton.setAttribute('id', 'submit-newbook');
            submitButton.style.cssText = 'width: 300px; margin: 5px'
            submitButton.innerHTML = 'Add this book';
            newBookForm.appendChild(submitButton);
            return
        }
        createForm();

        function submitBook() {
            newBookForm = document.getElementById('form');
            submitButton = document.getElementById('submit-newbook');
            submitButton.addEventListener('click', function(event) {
                event.preventDefault();
                const newBook = new Book(
                    newBookForm.Title.value, 
                    newBookForm.Author.value,
                    newBookForm .Pages.value, 
                    newBookForm.Read.value
                )
                myLibrary.push(newBook);
                newBookForm.replaceChildren();

                // createNewTable();
                clearLibraryTable();
                showCaseLibrary();
            })
        }
        submitBook();
    })
}

function createNewTable() { 
    const table =  document.createElement('table');
    table.setAttribute('id', 'library');
    document.body.appendChild(table);

    const header = document.createElement('tr');
    header.setAttribute('id', 'header');
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

function clearLibraryTable() {
    const currentTable = document.querySelector('table');
    currentTable.replaceChildren();
};

function showCaseLibrary() {

    const currentTable = document.querySelector('table');

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

createNewTable();
addNewBookForm();
showCaseLibrary();