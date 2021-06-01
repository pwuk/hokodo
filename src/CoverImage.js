import React from "react";
import {BOOK_COVER_URL, IMAGE_SIZES} from './Constants';

export default function CoverImage({book, imageSize = 'S'}) {
    const {width, height} = IMAGE_SIZES[imageSize];
    const unknownISBN = book.isbn === 'unknown';
    const imageSource = unknownISBN ? '/hokodo/generic-book.png' :
        `${BOOK_COVER_URL}${book.isbn}-${imageSize}.jpg`;

    return (
        <div className={`book-image ${unknownISBN ? ' default-cover-image' : ''}`}>
            <img width={width}
                 height={height}
                 alt={`${book.title}, by ${book.author}`}
                 src={imageSource}
                 loading={"lazy"}
            />
       </div>
    );
}