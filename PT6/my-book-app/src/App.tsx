// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BookProvider } from './BookContext';
import BookList from './components/BookList/BookList';
import BookDetail from './components/BookDetail/BookDetail';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<BookList/>}/>
                    <Route path="/books/:id" element={<BookDetail/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
