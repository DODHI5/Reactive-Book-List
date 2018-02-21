import React from "react";
const BookListItem = ({ title, author }) => {
  return (
    <div>
      <p>Title: {title} </p>
      <p>Author:{author}</p>
      <br />
    </div>
  );
};

export default BookListItem;
