import {useHistory} from "react-router-dom";
import React, {useContext} from "react";
import DataContext from "./dataContext";
import CoverImage from "./CoverImage";
import {filterBooksByAuthorAnbISBN} from "./helpers";
import {Error} from "./Error";
import {AuthorSummary} from "./AuthorSummary";

const BookList = ({authorName, isbn}) => {
    const history = useHistory();
    const [allTheBooks, contextDataError, loading] = useContext(DataContext);
    if (contextDataError) return <Error error={contextDataError}/>
    if(loading) return <div className={'loading'}/>

    const bookList = authorName ? filterBooksByAuthorAnbISBN(allTheBooks, authorName, isbn) :
        allTheBooks;

    return (
        <article className={'book-list'}>
            <AuthorSummary authorName={authorName} isbn={isbn} listCount={bookList.length}/>
            <ul>
                {bookList.map(book => {
                    return (
                        <li key={book.id} className={'book-thumbnail'}>
                            <CoverImage size={'S'} book={book}/>
                            <div className={'book-text-info'}>
                                <p>{book.title}</p>
                                <p>{book.author}</p>
                           </div>
                            <div className={'more-info'}>
                                <button
                                    role={"link"}
                                    className={"link-button"}
                                    onClick={() => history.push(`/book/${book.isbn}`)}
                                    title={"More information about this book"}>
                                    More information
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </article>
    );
}

export default BookList;