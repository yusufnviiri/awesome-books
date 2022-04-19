/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

if (localStorage.getItem('list of Books') === null) {
  localStorage.setItem('list of Books', JSON.stringify([]));
}

// eslint-disable-next-line prefer-const
let booksInLS = JSON.parse(localStorage.getItem('list of Books'));

function updateLocalStorage() {
  localStorage.setItem('list of Books', JSON.stringify(booksInLS));
}

function generateListOfBooks(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i += 1) {
    items += `
        <li>${arr[i].title}</li> <br />
        <li>${arr[i].author}</li> <br />
        <li><button class="removeBtn" onclick="removeBook(${i})">Remove</button></li>
        <hr />
        `;
  }
  return items;
}

function showBooks() {
  const bookList = document.querySelector('.bookList');
  bookList.innerHTML = `
          <ul id="theBooks">List of Books: <br />
          ${generateListOfBooks(booksInLS)}</ul>
      `;
}

function addBook(bookTitle, bookAuthor) {
  const book = {
    title: bookTitle,
    author: bookAuthor,
  };
  booksInLS.push(book);
  updateLocalStorage();
  showBooks();
}

function removeBook(i) {
  booksInLS.splice(i, 1);
  updateLocalStorage();
  showBooks();
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  e.preventDefault();
  addBook(title.value, author.value);
});

window.onload = showBooks();
class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}