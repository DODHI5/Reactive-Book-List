import React from "react";
const BookFilterInput = ({ inputBox }) => {
  return (
    <div>
      <br />
      <input type="text" placeholder="Input Text" onChange={inputBox} />

      <br />
    </div>
  );
};

export default BookFilterInput;
