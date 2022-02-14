// onclick Lis
/* eslint-disable no-unused-vars */
const displayList = () => {
  document.getElementById('book-table').style.display = 'flex';
  document.getElementById('new-book').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('dList').style.color = '#04aa6d';
  document.getElementById('dAddBook').style.color = 'black';
  document.getElementById('dContact').style.color = 'black';
};
// onclick Add Book

const displayAddBook = () => {
  document.getElementById('book-table').style.display = 'none';
  document.getElementById('new-book').style.display = 'flex';
  document.getElementById('contact').style.display = 'none';
  document.getElementById('dList').style.color = 'black';
  document.getElementById('dAddBook').style.color = '#04aa6d';
  document.getElementById('dContact').style.color = 'black';
};
// onclick Contact

const displayContact = () => {
  document.getElementById('book-table').style.display = 'none';
  document.getElementById('new-book').style.display = 'none';
  document.getElementById('contact').style.display = 'block';
  document.getElementById('dList').style.color = 'black';
  document.getElementById('dAddBook').style.color = 'black';
  document.getElementById('dContact').style.color = '#04aa6d';
};