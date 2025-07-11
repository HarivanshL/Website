import { Container, Navbar, Nav, Carousel, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      {/* Toolbar */}
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Harivansh</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Slideshow */}
      <Carousel fade>
        <Carousel.Item>
          <div className="carousel-slide slide1">
            <h2>Hi, I'm Harivansh</h2>
            <p>I build cool things with code.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-slide slide2">
            <h2>React • ML • Systems</h2>
            <p>Always learning, always building.</p>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Cards */}
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Card className="mb-4" id="about">
              <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>Learn more about who I am and what I do.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4" id="projects">
              <Card.Body>
                <Card.Title>Programming Projects</Card.Title>
                <Card.Text>Explore my favorite personal and academic projects.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4" id="contact">
              <Card.Body>
                <Card.Title>Contact</Card.Title>
                <Card.Text>Let’s get in touch and collaborate.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
