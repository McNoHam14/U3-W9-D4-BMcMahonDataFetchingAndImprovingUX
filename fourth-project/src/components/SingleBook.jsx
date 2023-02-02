import React from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
  state = {
    selected: false,
    displayComments: false,
  };

  render() {
    return (
      <Card onClick={() => this.setState({ displayComments: true })}>
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
        {this.state.displayComments ? (
          <CommentArea id={this.props.book.asin} />
        ) : null}
      </Card>
    );
  }
}

export default SingleBook;
