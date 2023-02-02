import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const Welcome = () => {
  return (
    <Jumbotron>
      <h1>EpiBooks</h1>
      <p>Lorem Ipsum</p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
};

export default Welcome;
