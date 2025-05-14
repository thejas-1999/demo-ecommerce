import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">E-commerce</Navbar.Brand>
          <Nav>
            <Nav.Link href="/cart">
              <FaShoppingCart />
              Cart
            </Nav.Link>
            <Nav.Link href="/profile">
              <FaUser />
              Sign In
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
