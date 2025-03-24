function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") // Fetch data
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Convert response to JSON
    })
    .then(data => renderBooks(data)) // Pass data to renderBooks
    .catch(error => console.error('There has been a problem with your fetch operation:', error)); // Handle errors
}

function renderBooks(books) {
  const bookList = document.getElementById("book-list"); // Get list container

  books.forEach(book => {
    const li = document.createElement("li"); // Create a list item
    li.textContent = book.name; // Set book name
    bookList.appendChild(li); // Add to the list
  });
}

document.addEventListener("DOMContentLoaded", fetchBooks);

