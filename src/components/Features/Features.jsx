import "./Features.css";
import { Container, Row, Col } from "react-bootstrap";
import illust2 from "../../assets/Illustration2.png";
import { FaCheckCircle } from "react-icons/fa";

const Features = () => {
  return (
    <Container className="features__container">
      <Row className="features__container-content">
        <Col className="col-12 col-md-6 col-lg-7">
          <img src={illust2} alt="features illustration" />
        </Col>
        <Col className="features__container-content_text col-12 col-md-6 col-lg-5">
          <h2 className="h2__rubik">We Provide Many Features You Can Use</h2>
          <p className="p__rubik">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <ul className="features__list">
            <li className="features__list-item li__text">
              <FaCheckCircle /> Powerful online protection.
            </li>
            <li className="features__list-item li__text">
              <FaCheckCircle /> Internet without borders.
            </li>
            <li className="features__list-item li__text">
              <FaCheckCircle /> Supercharged VPN
            </li>
            <li className="features__list-item li__text">
              <FaCheckCircle /> No specific time limits.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
