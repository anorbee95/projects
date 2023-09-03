import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import IMG1 from '../assets/pedikur.jpg'
import IMG2 from '../assets/esztetikai-pedikur.jpg'
import IMG3 from '../assets/callux-pedikur.jpg'
import IMG4 from '../assets/specialis-pedikur.jpg'
import IMG5 from '../assets/hagyomanyos-lab.png'
import IMG6 from '../assets/gellak.jpg'
import IMG7 from '../assets/eltavolitas.jpg'
import IMG8 from '../assets/koromvagas.jpg'
import IMG9 from '../assets/reflexzonas.jpg'
import IMG10 from '../assets/manikur.png'
import IMG11 from '../assets/gellak.jpg'
import IMG12 from '../assets/japan.jpg'
import services from '../data/services.js'
import './content.css'

const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG10, IMG11, IMG12,]

const Services = () => {
    return (
        <Carousel>
            {services.map((service, idx) => {
                return (
                    <Carousel.Item key={service.name}>
                        <Image src={images[idx]} alt={service.name} rounded />
                        <Carousel.Caption>
                            <h3>{service.name}</h3>
                            <p>{service.desc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
            )}
        </Carousel>
    );
}

export default Services;
