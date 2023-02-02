import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Y0OGU3MzczODAwMTUzNzQzOWQiLCJpYXQiOjE2NzUzNDc0NjUsImV4cCI6MTY3NjU1NzA2NX0.nz-ImMilLs66a585VlvjUnd3fGDW5msnL4hTbemCLNg",
        },
      }
    );
    let data = await response.json();
    console.log(data);
    this.setState({ comments: data });
  };
  componentDidMount() {
    this.fetchComments();
  }
  render() {
    return (
      <div>
        <AddComment asin={this.props.asin} />
        {/* <CommentsList comments={this.state.comments} /> */}
      </div>
    );
  }
}

export default CommentArea;
