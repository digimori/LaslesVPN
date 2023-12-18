import "./NavigationBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import { Button } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      data-bs-theme="light"
      style={{ top: "15px" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="logo" />
          Lasles<span>VPN</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center col-8">
            <Nav.Link href="#home" className="">
              Home
            </Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
          </Nav>
          <Nav className="col-4">
            <Nav.Link className="signIn ">Sign In</Nav.Link>
            <Nav.Link>
              <Button className="nav__button">Sign Up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
