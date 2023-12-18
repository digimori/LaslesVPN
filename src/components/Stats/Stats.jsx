import "./Stats.css";
import { Container, Row, Col } from "react-bootstrap";
import user from "../../assets/user.png";
import location from "../../assets/location.png";
import server from "../../assets/Server.png";

const Stats = () => {
  return (
    <Container className="stats__container">
      <Row className="stats__container-inner w-100">
        <Col className="stats__container-inner_sides col-md-3">
          <Row>
            <Col className="col-3">
              <img src={user} alt="users-logo" />
            </Col>
            <Col>
              <h3>90+</h3>
              <p>Users</p>
            </Col>
          </Row>
        </Col>
        <Col className="stats__container-inner_middle col-md-3">
          <Row>
            <Col className="col-3">
              <img src={location} alt="users-logo" />
            </Col>
            <Col>
              <h3>30+</h3>
              <p>Locations</p>
            </Col>
          </Row>
        </Col>
        <Col className="stats__container-inner_sides col-md-3">
          <Row>
            <Col className="col-3">
              <img src={server} alt="users-logo" />
            </Col>
            <Col>
              <h3>50+</h3>
              <p>Servers</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Stats;
