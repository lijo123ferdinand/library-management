// BookList.js
import React from 'react';

const BookList = ({ books, onDeleteBook, onUpdateBook }) => {
  const handleDelete = (id) => {
    onDeleteBook(id);
  };

  const handleUpdate = (id, updatedBook) => {
    onUpdateBook(id, updatedBook);
  };

  return (
    <div>
      <h2>All Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}{' '}
            <button onClick={() => handleDelete(book.id)}>Delete</button>{' '}
            <button onClick={() => handleUpdate(book.id, { title: 'Updated Title', author: 'Updated Author' })}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
