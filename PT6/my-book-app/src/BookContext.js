import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books] = useState([
        { id: 1, name: 'Book 1', author: 'Author 1', genre: 'Genre 1', rating: 4.5, description: 'Description 1' },
        { id: 2, name: 'Book 2', author: 'Author 2', genre: 'Genre 2', rating: 4.0, description: 'Description 2' },
        { id: 3, name: 'Book 3', author: 'Author 3', genre: 'Genre 3', rating: 4.3, description: 'Description 3' },
    ]);

    return (
        <BookContext.Provider value={books}>
            {children}
        </BookContext.Provider>
    );
};