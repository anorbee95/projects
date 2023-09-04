import { Image, Col, Nav, Row, Tab, Alert } from 'react-bootstrap';
import EDINA from './assets/edina-avatar.jpeg'
import { AiOutlineInstagram } from 'react-icons/ai'
import './App.css'
import Intro from './components/Intro';
import Services from './components/Services';
import Book from './components/Book';
import PriceList from './components/PriceList';
import Contact from './components/Contact';

const App = () => {
  return (
    <Tab.Container defaultActiveKey="intro">
      <Row id="edipedi-dash">
        <Col className='p-4' id='edipedi-dash-nav' sm={5} md={4} lg={3}>
          <Image className='pb-2' style={{ width: '50%' }} src={EDINA} roundedCircle />
          <h4 className='mb-1'>Arapovics Edina</h4>
          <small>EdiPedi - Pedikűr</small>
          <Nav variant="pills" className="flex-column mt-3">
            <Nav.Item>
              <Nav.Link eventKey="book">Időpontfoglalás</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="services">Szolgáltatások</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="pricelist">Árlista</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="contact">Kapcsolat</Nav.Link>
            </Nav.Item>
          </Nav>
          <a style={{ textDecoration: 'none' }} href="https://www.instagram.com/edipedi3/">
            <Alert className='mt-4 p-2 insta-badge' bg="primary">
              <Row className='d-flex align-items-center'>
                <Col sm={6} lg={6}>
                  <h4>Keress bátran Instán!</h4>
                </Col>
                <Col sm={6}>
                  <AiOutlineInstagram style={{ fontSize: "4rem" }} />
                </Col>
              </Row>
            </Alert>
          </a>
        </Col>
        <Col sm={7} md={8} lg={9}>
          <Tab.Content className='p-5'>
            <Tab.Pane eventKey="intro"><Intro /></Tab.Pane>
            <Tab.Pane eventKey="book"><Book /></Tab.Pane>
            <Tab.Pane eventKey="services"><Services /></Tab.Pane>
            <Tab.Pane eventKey="pricelist"><PriceList /></Tab.Pane>
            <Tab.Pane eventKey="contact"><Contact /></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default App
