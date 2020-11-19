// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card ,Button,Navbar, Form, Nav, FormControl, Accordion, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container>

      {/* navbar */}

      {/* top nav */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">DSA</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      {/* next nav */}
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Resources</Nav.Link>
          <Nav.Link href="#pricing">YouTube channels</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>

      {/* card */}
      <Card>
        <Card.Header>Why Learn Data Structures and Algorithms?</Card.Header>
        <Card.Body>
          <Card.Title>What are Algorithms?</Card.Title>
          <Card.Text>
          An algorithm is nothing but a mention of steps to solve a problem. They are essentially a solution.
          <br />
          
          Programming is all about data structures and algorithms. Data structures are used to hold data while algorithms are used to solve the problem using that data.
          <br />
          
          Data structures and algorithms (DSA) goes through solutions to standard problems in detail and gives you an insight into how efficient it is to use each one of them. It also teaches you the science of evaluating the efficiency of an algorithm. This enables you to choose the best of various choices.
          <br />
          <br />
          --reference - Programiz
          </Card.Text>
          <Button variant="primary">Get Started</Button>
        </Card.Body>
      </Card>

      {/* Accordian */}
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              What are the best Resources for data structures and algorithm?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>For Data Structures and algorithm, watch Abdul Bari channel or Jenny's Lecture. And Practice Questions from GFG(geeksforgeeks).</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Motivational videos for computer engineers?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Watch Love Babber Channel (especially before interviews). And other videos which motivate you.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <Card border="info" style={{ width: '18rem' }}>
              <Card.Header>Data Structures</Card.Header>
              <Card.Body>
                <Card.Title>Stack | Queue | LinkedList | Doubly LL | Hash Table</Card.Title>
                <Card.Text>
                  Refer Programiz website
                </Card.Text>
              </Card.Body>
            </Card>
            <br/>

          </Col>
          <Col>
          <Card border="warning" style={{ width: '18rem' }}>
            <Card.Header>Trees</Card.Header>
            <Card.Body>
              <Card.Title>Type of Trees | Insertion and Deletion of Node</Card.Title>
              <Card.Text>
              Refer Programiz website
              </Card.Text>
            </Card.Body>
          </Card> 
          <br />

          </Col>
          <Col>
          <Card border="danger" style={{ width: '18rem' }}>
            <Card.Header>Graphs</Card.Header>
            <Card.Body>
              <Card.Title>Types of graph and its traversal methods</Card.Title>
              <Card.Text>
              Refer Programiz website
              </Card.Text>
            </Card.Body>
          </Card>

          </Col>
        </Row>
        <br/>
      </Container>
      <br />
    </Container>
    
  );
}

export default App;
