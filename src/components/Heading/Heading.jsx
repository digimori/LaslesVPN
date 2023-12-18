import StartSubscribe from "../StartSubscribe";
import "./Heading.css";
import { Container, Row, Col } from "react-bootstrap";
import headingImage from "../../assets/Illustration1.svg";

const Heading = () => {
  return (
    <Container className="heading__container">
      <Row>
        <Col className="col-md-6 heading__text">
          <Row>
            <h1 className="headtext__rubik">
              Want anything to be easy with <strong>LaslesVPN.</strong>
            </h1>
          </Row>
          <Row className="heading__text-p p__rubik">
            <p>
              Provide a network for all your needs with ease and fun using
              <strong> LaslesVPN</strong> discover interesting features from us.
            </p>
          </Row>
          <Row className="heading__btncont">
            <StartSubscribe text="Get Started" />
          </Row>
        </Col>
        <Col className="col-md-5 heading__image">
          <img src={headingImage} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Heading;
