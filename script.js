const myLibrary = [];

function Book(title, author, numPages, read){
    this.title = title
    this.author = author
    this.numPages = numPages
    this.read = read
}

function addBook(name){
    myLibrary.push(name)
}

function displayBooks(){
    const books = document.querySelectorAll('.book')
    books.forEach((book) => {
        book.remove();
    });

    for(const book of myLibrary){
        const container = document.querySelector('#shelves');
        const bookObject = document.createElement('div');
        bookObject.classList.add('book');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const status = document.createElement('div');
        bookTitle.textContent = `Title: ${book.title}`;
        bookAuthor.textContent = `Author: ${book.author}`;
        bookPages.textContent = `Pages: ${book.numPages}`;
        status.textContent = `Status: ${book.read}`;
        bookObject.appendChild(bookTitle);
        bookObject.appendChild(bookAuthor);
        bookObject.appendChild(bookPages);
        bookObject.appendChild(status);
        container.append(bookObject);
    };
} 

const showButton = document.getElementById("showDialog");
const addDialog = document.getElementById("AddBook");
const outputBox = document.getElementById("output");
const confirmBtn = addDialog.querySelector("#confirmBtn")

showButton.addEventListener('click', () => {
    addDialog.showModal()
});

confirmBtn.addEventListener('click', () =>{
    let bookTitle = document.querySelector('#title').value;
    let bookAuthor = document.querySelector('#author').value;
    let bookPages = document.querySelector('#pageNum').value;
    let bookStatus = document.querySelector('input[name=readStatus]:checked').value;
    
    const book = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
    addBook(book);
    displayBooks();
})