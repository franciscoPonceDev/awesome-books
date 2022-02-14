/* eslint-disable import/prefer-default-export */
export const input = document.getElementById('myInput');
input.addEventListener('keyup', (event) => {
  if (event.KeyboardEvent.code === 13) {
    event.preventDefault();
    document.getElementById('myBtn').click();
  }
});