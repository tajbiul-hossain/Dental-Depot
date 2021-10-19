import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "./Header.css";
import useAuth from "../../../hooks/useAuth";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container className="font-link">
          <Navbar.Brand href="/home">Dental Depot</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#dentists">
              Dentists
            </Nav.Link>
            {user?.email ? (
              <div className="d-flex align-items-center">
                <Nav.Link className="username">{user.displayName}</Nav.Link>
                <img
                  className="user-image"
                  src={user.photoURL}
                  alt=""
                  style={{ height: "2rem", borderRadius: "50%" }}
                />
                <button
                  onClick={logOut}
                  className="btn default-btn register-btn"
                >
                  Log out
                </button>
              </div>
            ) : (
              <Nav.Link
                as={Link}
                to="/register"
                className="btn default-btn register-btn"
              >
                Register
              </Nav.Link>
            )}
            {/* <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
