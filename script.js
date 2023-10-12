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

    let i = 0;

    for(const book of myLibrary){
        const container = document.querySelector('#shelves');
        const bookObject = document.createElement('div');
        bookObject.classList.add('book');
        bookObject.setAttribute('data-read', `${book.read}`)
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const removeButton = document.createElement('button')
        const changeReadStatus = document.createElement('button')
        removeButton.classList.add('remove')
        removeButton.setAttribute('index', `${i}`)
        changeReadStatus.classList.add('changeStatus')
        changeReadStatus.setAttribute('index', `${i}`)
        bookTitle.textContent = `Title: ${book.title}`;
        bookAuthor.textContent = `Author: ${book.author}`;
        bookPages.textContent = `Pages: ${book.numPages}`;
        removeButton.textContent = 'Remove Book'
        if(book.read == 'True'){
            changeReadStatus.textContent = 'Mark as Unread'
        }
        else{
            changeReadStatus.textContent = "Mark as Read"
        }
        bookObject.appendChild(bookTitle);
        bookObject.appendChild(bookAuthor);
        bookObject.appendChild(bookPages);
        bookObject.appendChild(removeButton);
        bookObject.appendChild(changeReadStatus);
        container.append(bookObject);
        i+=1;
    };
} 

const showButton = document.getElementById("showDialog");
const addDialog = document.getElementById("AddBook");
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

document.addEventListener("click", e => {
    if(e.target.matches('.remove')) {
        myLibrary.splice(e.target.getAttribute('index'),1);
        displayBooks();
    }
})

document.addEventListener("click", e => {
    if(e.target.matches('.changeStatus')) {
        if(e.target.parentElement.getAttribute('data-read')=='True'){
            myLibrary[e.target.getAttribute('index')].read = 'False'
        }
        else{
            myLibrary[e.target.getAttribute('index')].read = 'True'
        }
        displayBooks();
    }
})