import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import cover from "../images/cover.png"
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Navbardb = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={cover} alt="Logo"  style={{ height: "60px" }}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex inputsearchnav">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 navinpH"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav
              className="ms-auto my-2 my-lg-0 mx-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/cat">Category</Nav.Link>
              <Nav.Link href="#action2">Explore</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Users</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  images
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Collection
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default Navbardb;
