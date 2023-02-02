import { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import items from "../data/fantasy.json";
import SingleBook from "./SingleBook";

class AllTheBooks extends Component {
  state = {
    selectedBook: [],
  };

  render() {
    return (
      <Container>
        <Row className="mt-3 justify-content-center">
          {items.map((book) => {
            return (
              <Col key={book.asin} xs={12} sm={4} md={3}>
                <Card
                  className="mb-3 ml-1"
                  style={{ width: "18rem", height: "70vh" }}
                >
                  <Card.Img
                    key={book.asin}
                    onClick={() => {
                      console.log("Clicked");
                    }}
                    variant="top"
                    src={book.img}
                    style={{ height: "30vh", width: "100%" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>
                      <p>{book.title}</p>
                    </Card.Title>
                    {/* <Card.Text>
                    Genre:<p>{books.category}</p>
                  </Card.Text> */}
                    <Button
                      onClick={() => {
                        console.log("Clicked");
                      }}
                      variant="success"
                    >
                      ${book.price}
                    </Button>
                  </Card.Body>
                </Card>
                <SingleBook book={book}></SingleBook>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
