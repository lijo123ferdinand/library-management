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
      <h2 className="text-center">All Books</h2>
      <ul className="list-group">
        {books.map((book) => (
          <li key={book.id} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <strong>{book.title}</strong> by <strong>{book.author}</strong>
              </div>
              <div>
              <div class="text-bg-light p-3">gf</div>
                <button
                 
                  // className="btn btn-danger mr-2"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdate(book.id, { title: 'Updated Title', author: 'Updated Author' })}
                >
                  Update
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
