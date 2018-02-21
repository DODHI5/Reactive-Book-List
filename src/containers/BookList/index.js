import React from "react";
import BookListItem from "../../components/BookListItem";
const BookList = ({ books, findBook }) => {
  return (
    <div>
      {books
        // .filter(book => {
        //   console.log(findBook);
        //   console.log(book.title.indexOf(findBook));
        //   return (
        //     book.title.indexOf(findBook) >= 0 ||
        //     book.author.indexOf(findBook) >= 0
        //   );
        // })
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
