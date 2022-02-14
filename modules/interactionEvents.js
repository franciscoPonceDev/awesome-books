import { Book } from './classBook.js';
import { Store } from './classStore.js';
import { Interactions } from './classInteractions.js';

// Display Book Event
export const displayBookEvent = document.addEventListener('DOMContentLoaded', Interactions.displayBooks);

// Add Boook Event

export const addBookEvent = document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  Interactions.addBookToList(book);
  Store.addBook(book);
  Interactions.clearFields();
});

export const removeBookEvent = document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from Interactions
  Interactions.deleteBook(e.target);

  // Remove book from store
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});
