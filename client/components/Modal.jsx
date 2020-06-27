import React, { Component } from "react";
import axios from "axios";

class Modal extends Component {
  constructor() {
    super();

    const date = new Date();

    this.state = {
      questionTitle: "",
      questionContent: "",
      unit: "",
      resolved: false,
      dateCreated: date.toLocaleString(),
    };

    this.handleQuestionTitleChange = this.handleQuestionTitleChange.bind(this);
    this.handleQuestionContentChange = this.handleQuestionContentChange.bind(
      this
    );
    this.handleUnitChange = this.handleUnitChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleQuestionTitleChange(e) {
    this.setState({
      questionTitle: e.target.value,
    });
  }

  handleQuestionContentChange(e) {
    this.setState({
      questionContent: e.target.value,
    });
  }

  handleUnitChange(e) {
    this.setState({
      unit: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { questionTitle, questionContent, unit } = this.state;

    const post = {
      questionTitle,
      questionContent,
      unit,
      resolved,
      dateCreated,
    };

    axios
      .post("/createpost", post)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div id="Modal">
          <form onSubmit={this.handleSubmit}>
            <input
              id="question-title"
              onChange={this.handleQuestionTitleChange}
            />
            <input
              id="question-content"
              onChange={this.handleQuestionContentChange}
            />
            <select onInputChange={this.handleUnitChange}>
              <option value="Unit 1">Unit 1: JS Fundamentals</option>
              <option value="Unit 2">
                Unit 2: Data Structures and Algorithms
              </option>
              <option value="Unit 3">Unit 3: Algorithms</option>
              <option value="Unit 4">Unit 4 Snake</option>
              <option value="Unit 5">Unit 5: React</option>
              <option value="Unit 6">Unit 6: Redux</option>
              <option value="Unit 7">Unit 7: AJAX</option>
              <option value="Unit 8">Unit 8: Node</option>
              <option value="Unit 9">Unit 9: Express</option>
              <option value="Unit 10">Unit 10: Databases</option>
              <option value="Unit 11">Unit 11: Authentication</option>
              <option value="Unit 12">Unit 12: Testing</option>
              <option value="Unit 13">Unit 13: Build Tools and Webpack</option>
              <option value="Other">Other</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
