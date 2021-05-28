import React from "react";

const authorInformation = (booksBySameAuthorCount) =>
    booksBySameAuthorCount === 0 ? <h4>No other books by this author</h4> :
        <h4>{booksBySameAuthorCount} other book{booksBySameAuthorCount === 1 ? '' : 's'} by this author...</h4>;

const filterBooksByAuthorAnbISBN = (bookList, authorName, isbn) => bookList.filter(book => book.author === authorName && book.isbn !== isbn);


export {authorInformation, filterBooksByAuthorAnbISBN};