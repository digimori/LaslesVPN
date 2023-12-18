import StartSubscribe from "../StartSubscribe";
import "./Heading.css";
import { Container, Row, Col } from "react-bootstrap";
import headingImage from "../../assets/Illustration1.svg";

const Heading = () => {
  return (
    <Container>
      <Row>
        <Col className="col-md-6">
          <Row>
            <h1>
              Want anything to be easy with <span>LaslesVPN.</span>
            </h1>
          </Row>
          <Row>
            <p>
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </p>
          </Row>
          <Row>
            <StartSubscribe text="Get Started" />
          </Row>
        </Col>
        <Col className="col-md-6">
          <img src={headingImage} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Heading;
