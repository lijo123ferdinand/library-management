// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookForm from './BookForm';
import BookList from './BookList';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:1121/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleCreateBook = async (newBook) => {
    try {
      const response = await axios.post('http://localhost:1121/api/books', newBook);
      setBooks([...books, response.data]);
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:1121/api/books/${id}`);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleUpdateBook = async (id, currentTitle, currentAuthor) => {
    const newTitle = prompt('Enter a new title:', currentTitle);
    const newAuthor = prompt('Enter a new author:', currentAuthor);
  
    if (!newTitle || !newAuthor) {
      // Handle empty input or cancelation
      return;
    }
  
    const updatedBook = { title: newTitle, author: newAuthor };
  
    try {
      const response = await axios.put(`http://localhost:1121/api/books/${id}`, updatedBook);
      const updatedBooks = books.map((book) =>
        book.id === id ? { ...book, title: newTitle, author: newAuthor } : book
      );
      setBooks(updatedBooks);
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };
  


  return (
    <div>
      <h1>Book Collection</h1>
      <BookForm onAddBook={handleCreateBook} />
      <BookList books={books} onDeleteBook={handleDeleteBook} onUpdateBook={handleUpdateBook} />
    </div>
  );
}

export default App;
