import {useParams, useHistory} from "react-router-dom";
import React, {useContext} from "react";
import DataContext from "./dataContext";
import BookList from "./BookList";
import CoverImage from "./CoverImage";
import {Error} from "./Error";


const Book = () => {
    const {isbn: isbnParameter} = useParams();
    const history = useHistory();
    const [bookData, contextDataError, loading] = useContext(DataContext);
    if (contextDataError) return <Error error={contextDataError}/>;

    if(loading) return <div className={"loading"} />

   const BackButton = ()=>
       <button onClick={() => history.push('/')}
            role={"link"}
            className={'link-button'}>
        Back to list
        </button>;

    const foundBookIndex = bookData.findIndex(book => book.isbn === isbnParameter);
    if (foundBookIndex===-1) {
        return (
            <article className={"book-detail"}>
                <BackButton />
                <h3>Could not find book for ISBN {isbnParameter} </h3>
            </article>
        );
    }
    const foundBook = bookData[foundBookIndex];
    const {isbn, author, description, title} = foundBook;
    const nextIndex = foundBookIndex + 1 % (bookData.length-1);
    const prevIndex = foundBookIndex === 0 ? (bookData.length-1) : foundBookIndex - 1 % (bookData.length-1);
    const {isbn: nextIsbn} = bookData[nextIndex];
    const {isbn: prevIsbn} = bookData[prevIndex];

    return (
        <article className={"book-detail"}>
            <BackButton />
            <div className={"book-detail-inner-container"}>
              <button className={"book-detail-inner-left link-button"}
                      onClick={()=>history.push(`/book/${prevIsbn}`)} >&lt;</button>
              <div className={"book-detail-contents"}>
                <h1>{title}</h1>
                <h3>ISBN: {isbn}</h3>
                <h2>{author}</h2>
                <p className={"book-desc"}>{description}</p>
                <CoverImage imageSize={'L'} book={foundBook}/>
              </div>
              <button className={"book-detail-inner-right link-button"}
                        onClick={()=>history.push(`/book/${nextIsbn}`)} >&gt;</button>
            </div>
            <BookList isbn={isbn} authorName={author}/>
        </article>
    );
}

export default Book;