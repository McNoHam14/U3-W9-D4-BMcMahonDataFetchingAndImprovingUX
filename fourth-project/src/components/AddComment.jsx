import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: "",
    rating: "",
  };
  render() {
    return (
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          let response = await fetch(
            "https://striveschool-api.herokuapp.com/api/comments/",
            {
              method: "POST",
              body: JSON.stringify({
                comment: this.state.comment,
                rate: this.state.rating,
                elementId: this.props.asin,
              }),
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5M2Y0OGU3MzczODAwMTUzNzQzOWQiLCJpYXQiOjE2NzUzNDc0NjUsImV4cCI6MTY3NjU1NzA2NX0.nz-ImMilLs66a585VlvjUnd3fGDW5msnL4hTbemCLNg",
                "Content-Type": "application/json",
              },
            }
          );
          let data = await response.json();
          console.log(data);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="comment here"
            value={this.state.rating}
            onChange={(e) => this.setState({ comment: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            placeholder="rating"
            value={this.state.rating}
            onChange={(e) => this.setState({ rate: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;
