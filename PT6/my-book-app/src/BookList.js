import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from './BookContext';
import './BookList.css';

const BookList = () => {
    const books = useContext(BookContext);

    return (
        <div>
            <h1>Book list</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>
                            <h2>{book.name}</h2>
                            <p>Author: {book.author}</p>
                            <p>Rating: {book.rating}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;