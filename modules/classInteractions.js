/* eslint-disable import/prefer-default-export */
import { Store } from './classStore.js';

export class Interactions {
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