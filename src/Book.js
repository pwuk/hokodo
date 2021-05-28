import {useParams, useHistory} from "react-router-dom";
import React, {useContext} from "react";
import DataContext from "./dataContext";
import BookList from "./BookList";
import CoverImage from "./CoverImage";
import {Error} from "./Error";


const Book = () => {
    const {isbn: isbnParameter} = useParams();
    const history = useHistory();
    const [bookData, contextDataError] = useContext(DataContext);
    if (contextDataError) return <Error error={contextDataError}/>;

   const BackButton = ()=>
       <button onClick={() => history.push('/')}
            role={"link"}
            className={'link-button'}>
        Back to list
        </button>;

    const foundBook = bookData.find(book => book.isbn === isbnParameter);
    if (!foundBook) {
        return (
            <article className={"book-detail"}>
                <BackButton />
                <h3>Could not find book for ISBN {isbnParameter} </h3>
            </article>
        );
    }
    const {isbn, author, description, title} = foundBook;

    return (
        <article className={"book-detail"}>
            <BackButton />
            <h1>{title}</h1>
            <h3>ISBN: {isbn}</h3>
            <h2>{author}</h2>
            <p>{description}</p>
            <CoverImage imageSize={'L'} book={foundBook}/>
            <BookList isbn={isbn} authorName={author}/>
        </article>
    );
}

export default Book;