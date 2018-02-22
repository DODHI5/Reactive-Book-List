import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import NameTag from "../components/NameTag";
import BookListAppTitle from "../components/BookListAppTitle";
import BookListItem from "../components/BookListItem";
import BookFilterInput from "../components/BookFilterInput";
import NewBookForm from "../containers/NewBookForm/index.js";
import {
  getBooksFromFakeXHR,
  getBookByIdFromFakeXHR,
  addBookToFakeXHR,
  booksFromFakeDb
} from "../lib/books.db";
import BookList from "./BookList/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bookList: [],
      authorTitle: ""
    };
  }
  componentDidMount() {
    getBooksFromFakeXHR().then(bookList => {
      this.setState({ bookList });
    });
  }
  addBook(book) {
    let newBook = {
      title: book.title,
      author: book.author
    };

    addBookToFakeXHR(newBook).then(bookList => {
      this.setState({ bookList });
    });
  }
  foundBook(event) {
    const retrieveBook = event.target.value;
    this.setState({ authorTitle: retrieveBook });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Book List App</h1>
        </header>
        <p className="App-intro">Books List</p>
        <BookFilterInput inputBox={this.foundBook.bind(this)} />
        <br />
        <div>
          <BookList
            books={this.state.bookList}
            search={this.state.authorTitle}
          />
        </div>
        <br />
        <div />
        <NewBookForm addBook={this.addBook.bind(this)} />
      </div>
    );
  }
}

export default App;
