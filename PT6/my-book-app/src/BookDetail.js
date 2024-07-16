import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookContext } from './BookContext';
import './BookDetail.css';

const BookDetail = () => {
    const { id } = useParams();
    const books = useContext(BookContext);
    const book = books.find((b) => b.id === parseInt(id));

    if (!book) {
        return <h2>Book is not found</h2>;
    }

    return (
        <div className="book-detail">
            <h1>{book.name}</h1>
            <img src="https://via.placeholder.com/150" alt="Stab" />
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Rating: {book.rating}</p>
            <p>Description: {book.description}</p>
            <Link to="/">Back to book list</Link>
        </div>
    );
};

export default BookDetail;
