import React from "react";

class NewBookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: ""
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(event) {
    this.setState({ title: event.target.value });
  }
  handleAuthor(event) {
    this.setState({ author: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addBook({
      title: this.state.title,
      author: this.state.author
    });
    this.setState({ title: "", author: "" });
  }

  render() {
    return (
      <div>
        <h3>Add Book</h3>
        <form onSubmit={this.handleSubmit}>
          <br />
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleTitle}
          />
          <input
            type="text"
            placeholder="Author"
            value={this.state.author}
            onChange={this.handleAuthor}
          />
          <br />
          <input type="submit" value="submit" />
          <br />
        </form>
      </div>
    );
  }
}
export default NewBookForm;
