import {useHistory} from "react-router-dom";
import React, {useContext} from "react";
import DataContext from "./dataContext";
import CoverImage from "./CoverImage";
import {filterBooksByAuthorAnbISBN} from "./helpers";
import {Error} from "./Error";
import {AuthorSummary} from "./AuthorSummary";

const BookList = ({authorName, isbn}) => {
    const history = useHistory();
    const [allTheBooks, error] = useContext(DataContext);
    if (error) return <Error error={error}/>

    const bookList =authorName ? filterBooksByAuthorAnbISBN(allTheBooks, authorName, isbn) :
        allTheBooks;

    return (
        <article className={'book-list'}>
            <AuthorSummary authorName={authorName} isbn={isbn} listCount={bookList.length}/>
            <ul>
                {bookList.map((book, index) => {
                    return <li key={book.id} className={'book-thumbnail'}>
                        <CoverImage size={'S'} book={book}/>
                        <div className={'book-text-info'}>
                            <p>{book.author}</p>
                            <p>{book.title}</p>
                        </div>
                        <div className={'more-info'}>
                            <button
                                className={"link-button"}
                                onClick={() => history.push(`/book/${book.isbn}`)}
                                title={"More information about this book"}>
                                More information
                            </button>
                        </div>
                    </li>
                })}
            </ul>
        </article>
    );
}

export default BookList;