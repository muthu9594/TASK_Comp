import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Navbarr = () => {
  return (
    <div>
      <Navbar fixed="top" style={{ height: 60, background: " #6A0DAD" }}>
        <Container>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              padding: 100,
              fontSize: "1.5rem",
              fontWeight: 600,
            }}
            to="/flightdetails"
          >
            Task
          </Link>
          <Nav className="me-auto">
            <Link
              style={{ textDecoration: "none", color: "white", padding: 20 }}
              to="/flightdetails"
            >
              Flight Details
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white", padding: 20 }}
              to="/form"
            >
              Form
            </Link>
            <Link
              style={{ textDecoration: "none", color: "white", padding: 20 }}
              to="/chat"
            >
              Chat
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
