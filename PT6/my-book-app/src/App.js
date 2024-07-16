// src/App.js
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookList from './BookList';
import BookDetail from './BookDetail';
import {BookProvider} from "./BookContext";
import './App.css';

const App = () => {
    return (
        <BookProvider>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={BookList}/>
                        <Route path="/books/:id" component={BookDetail}/>
                    </Switch>
                </div>
            </Router>
        </BookProvider>
    );
};

export default App;