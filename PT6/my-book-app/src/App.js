import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from './BookContext';
import BookList from './BookList';
import BookDetail from './BookDetail';
import './App.css';

const App = () => {
    return (
        <BookProvider>
            <Router>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<BookList />} />
                        <Route path="/books/:id" element={<BookDetail />} />
                    </Routes>
                </div>
            </Router>
        </BookProvider>
    );
};

export default App;
