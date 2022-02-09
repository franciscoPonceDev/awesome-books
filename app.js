/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Store Class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Display Books
class Interactions {
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach((book) => Interactions.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
          <td>${book.author}</td>
          <td>${book.title}</td>
          <td class="remove-btn"><button class="delete">Remove book</button></td>
      `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

// Display Book Event
document.addEventListener('DOMContentLoaded', Interactions.displayBooks);

// Add Boook Event

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  Interactions.addBookToList(book);
  Store.addBook(book);
  Interactions.clearFields();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from Interactions
  Interactions.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});

// show date

const date = new Date();
document.getElementById('date').innerHTML = date;

// onclick List

function displayList() {
  document.getElementById('book-table').style.display = 'flex';
  document.getElementById('new-book').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('dList').style.color = '#04aa6d';
  document.getElementById('dAddBook').style.color = 'black';
  document.getElementById('dContact').style.color = 'black';
}

// onclick Add Book

function displayAddBook() {
  document.getElementById('book-table').style.display = 'none';
  document.getElementById('new-book').style.display = 'flex';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('dList').style.color = 'black';
  document.getElementById('dAddBook').style.color = '#04aa6d';
  document.getElementById('dContact').style.color = 'black';
}

// onclick Contact

function displayContact() {
  document.getElementById('book-table').style.display = 'none';
  document.getElementById('new-book').style.display = 'none';
  document.getElementById('contact').style.display = 'block';
  document.getElementById('dList').style.color = 'black';
  document.getElementById('dAddBook').style.color = 'black';
  document.getElementById('dContact').style.color = '#04aa6d';
}

// Submit book pressing enter key

const input = document.getElementById('myInput');
input.addEventListener('keyup', (event) => {
  if (event.KeyboardEvent.code === 13) {
    event.preventDefault();
    document.getElementById('myBtn').click();
  }
});