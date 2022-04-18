/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

const title = document.getElementById('title');
const author = document.getElementById('author');
const bookArray = [
  {
    author: 'Lorem Ipsum',
    title: 'Testeroo Testyy',
  },
  {
    author: 'Lorem Ipsum',
    title: 'Testeroo Testyy',
  },
  {
    author: 'Lorem Ipsum',
    title: 'Testeroo Testyy',
  },
];

function addBook(bookTitle, bookAuthor) {
  bookArray.push({
    author: bookAuthor,
    title: bookTitle,
  });
}

function removeBook() {}

function displayBooks() {

}

const bookList = document.querySelector('.bookList');
const form = document.querySelector('form');

// bookList.innerHTML = ``;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBook(title.value, author.value);
});

displayBooks();
