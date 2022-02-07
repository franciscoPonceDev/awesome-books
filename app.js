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
        <td><a href="#" class="delete">X</a></td>
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

// Remove Book
