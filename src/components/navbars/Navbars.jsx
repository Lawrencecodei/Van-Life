import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


const Navbars = () => {
    return (
        <Navbar fixed="top"  collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to="/">
                <Navbar.Brand href="/">#VANLIFE</Navbar.Brand>
                </Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar">
              <Nav className="ms-auto">
              <Link to="/">
                <Nav.Link href="/">Van</Nav.Link>
                </Link>
                <Link to="about">
                <Nav.Link href="/about">About</Nav.Link>
                </Link>
              </Nav>

              </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbars;
