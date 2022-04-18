let bookArray = [
    {
        author: 'Lorem Ipsum',
        title: 'Testeroo Testyy'
    },
    {
        author: 'Lorem Ipsum',
        title: 'Testeroo Testyy'
    },
    {
        author: 'Lorem Ipsum',
        title: 'Testeroo Testyy'
    }
];

function addBook(bookTitle, bookAuthor) {
    bookArray.push(
        {
            author: bookAuthor,
            title: bookTitle
        }
    );
}

function removeBook() {

}

function displayBooks() {
    console.log(bookArray);
}

const bookList = document.querySelector('.bookList');
const form = document.querySelector('form');

// bookList.innerHTML = ``;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBook(title.value, author.value);
});

displayBooks();