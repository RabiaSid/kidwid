import { HeaderIcon } from "@/assets";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import PrimaryButton from "../Button/PrimaryButton";
import baseColors from "@/constant";
import { styles } from "@/styles/style";

function AppHeader() {
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="m-0 p-0 shadow-sm " >
          <Container className="p-0 ">
            <Navbar.Brand href="#">
              <img src={HeaderIcon} height="80vh" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={HeaderIcon} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                <Nav className="justify-content-center flex-grow-1 ">
                  <Nav.Link href="#" style={styles.HeaderText} className="nav-link active primary-header-menu-item ">
                    Topic
                  </Nav.Link>
                  <Nav.Link href="#" style={styles.HeaderText} className="nav-link active primary-header-menu-item ">
                    How it Works
                  </Nav.Link>
                  <Nav.Link href="#" style={styles.HeaderText} className="nav-link active primary-header-menu-item ">
                    Features
                  </Nav.Link>
                  <Nav.Link href="#" style={styles.HeaderText} className="nav-link active primary-header-menu-item ">
                    Pricing
                  </Nav.Link>
                  <Nav.Link href="#" style={styles.HeaderText} className="nav-link active primary-header-menu-item ">
                    FAQ
                  </Nav.Link>
                  <Nav.Link href="#" style={styles.HeaderText} className="nav-link active primary-header-menu-item ">
                    Vision
                  </Nav.Link>
                </Nav>
                <PrimaryButton
                  title="GET STARTED FOR FREE"
                  backgroundColor={baseColors.GreenColor}
                  //  width={"18vw"}
                  //  height={"6vh"}
                  fontSize={"18px"}
                  borderRadius={"7px"}
                  color={baseColors.White}
                  className="px-4  m-0"
                />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default AppHeader;
