import React from "react";
import BookListItem from "../../components/BookListItem";
const BookList = ({ books, search }) => {
  return (
    <div>
      {books
        .filter(book => {
          console.log(search);
          console.log(book.title.indexOf(search));
          return (
            book.title.indexOf(search) !== -1 ||
            book.author.indexOf(search) !== -1
          );
        })
        .map(book => {
          return (
            <BookListItem
              key={book._id}
              title={book.title}
              author={book.author}
            />
          );
        })}
    </div>
  );
};
export default BookList;
