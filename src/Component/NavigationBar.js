import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Style/NavigationBar.css'

function NavigationBar() {
  return (
   <div className="nav-hub">
      <Navbar className='nav' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="images/logo.png" alt="logo" width='130px' height='50px' style={{marginLeft:'30px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='link' href="/home">Home</Nav.Link>
            <Nav.Link className='link' href="/courses">Courses</Nav.Link>
            <Nav.Link className='link' href="/placement">Placements</Nav.Link>
            <Nav.Link className='link' href="/gallery">Gallery</Nav.Link>
            <Nav.Link className='link' href="about">About </Nav.Link>
            <Nav.Link className='link' href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
  );
}

export default NavigationBar;