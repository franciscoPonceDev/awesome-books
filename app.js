/* eslint-disable max-classes-per-file */
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Display Books
class UI {
  static displayBooks() {
    const books = [
      {
        title: 'Book1',
        author: 'author1',
      },
      {
        title: 'Book2',
        author: 'author2',
      },
    ];

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><a href="#" class="delete">X</a></td>
      `;

    list.appendChild(row);
  }

  static clearInput() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

// Display Book Event
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Add Boook Event

document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  UI.addBookToList(book);

  UI.clearInput();
});

// Remove Book