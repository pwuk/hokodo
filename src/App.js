import './App.css';

import {BrowserRouter as Router, Route} from "react-router-dom";
import React from "react";
import BookList from "./BookList";
import Book from "./Book";
import {useFetch} from './hooks';
import DataContext from "./dataContext";

export default function App() {
    const [bookData, error] = useFetch();
    return <div className="App">
        <DataContext.Provider value={[bookData, error]}>
            <Router>
                <Route path="/" exact>
                    <>
                        <h1>Technology reading list</h1>
                        <BookList/>
                    </>
                </Route>
                <Route path="/book/:isbn?">
                    <Book/>
                </Route>
            </Router>
        </DataContext.Provider>
    </div>;
}




