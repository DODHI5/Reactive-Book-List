import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import NameTag from "../components/NameTag";
import BookListAppTitle from "../components/BookListAppTitle";
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
      bookList: []
    };
  }
  componentDidMount() {
    getBooksFromFakeXHR().then(bookList => {
      this.setState({ bookList });
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Book List App</h1>
        </header>
        <p className="App-intro">Books List</p>
        <BookList books={this.state.bookList} />
      </div>
    );
  }
}

export default App;
