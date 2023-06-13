import { HeaderIcon } from '@/assets';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import PrimaryButton from '../Button/PrimaryButton';
import baseColors from '@/constant';

function AppHeader() {
  return (
    <>
    {['md'].map((expand) => (
      <Navbar key={expand} bg="light" expand={expand} className=" p-0">
        <Container >
          <Navbar.Brand href="#">
            <img src={HeaderIcon} height='50vh'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              <img src={HeaderIcon}/>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link href="#">Topic</Nav.Link>
                <Nav.Link href="#">How it Works</Nav.Link>
                <Nav.Link href="#">Features</Nav.Link>
                <Nav.Link href="#">Pricing</Nav.Link>
                <Nav.Link href="#">FAQ</Nav.Link>
                <Nav.Link href="#">Vision</Nav.Link>
              </Nav>
              <PrimaryButton title='GET STARTED FOR FREE' 
              backgroundColor={baseColors.GreenColor}
              width={'15vw'}
              color={baseColors.White}
              />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
  )
}

export default AppHeader