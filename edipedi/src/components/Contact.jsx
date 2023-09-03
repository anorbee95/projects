import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';
import './content.css';

const Contact = () => {
    return (
        <div id="kapcsolat">
            <Container>
                <Row>
                    <Col>
                        <div id="iframe-div">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.8623907851643!2d19.05259581587125!3d47.57046577918231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d99012895697%3A0x7db98fd05fb7fad1!2sBudapest%2C%20Amfite%C3%A1trum%20u.%2027%2C%201031!5e0!3m2!1shu!2shu!4v1679835989466!5m2!1shu!2shu"
                                style={{ border: '0' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                            <a href="https://goo.gl/maps/X2vqCmKdG72crFxq9" className="flex">
                                <p>1031, Budapest, Amfiteátrum utca 27.</p>
                            </a>
                        </div>
                    </Col>
                </Row>

                <Row className='logos'>
                    <Col>
                        <a href="https://www.facebook.com/profile.php?id=100091226524359" className="flex">
                            <FaFacebook className="icon" />
                            <p>EdiPedi</p>
                        </a>
                    </Col>
                    <Col>
                        <a href="tel:+36704171271" className="flex phone">
                            <FaPhone className="icon" />
                            <p>+36 70 417 1271</p>
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.instagram.com/edipedi3" className="flex">
                            <FaInstagram className="icon" />
                            <p>EdiPedi</p>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
