import { Badge, Col, Row } from "react-bootstrap"
import './content.css'

const Intro = () => {
    return (
        <Row className="intro-container">
            <Col>
                <h1>Üdvözöllek az oldalamon!</h1>
                <Badge className="design-badge" bg="light" >{" "}</Badge>
                <h3 className="mt-4 mb-3 text-start">Arapovics Edina vagyok,</h3>
                <p className="intro-text fs-5">
                    mindig is fontos volt számomra az igényes, ápolt kéz és láb.
                    Ezért elvégeztem a Perfect Nails kéz- és lábápoló képzéseit,
                    hogy másoknak is tudjak segíteni. Kezeléseim során minőségi
                    termékeket használok, mint például a Sara Beauty Spa, valamint
                    a 100%-ban növényi, állatkísérlet mentes Callux.
                    Fontosnak tartom, hogy a közgondolkodással ellentétben a pedikűr
                    szolgáltatásokat ne csak a tavaszi és nyári időszakban vegyük igénybe,
                    hiszen a lábaink egész évben használatban vannak.
                    Férfiak is bátran vegyék igénybe (Ezt mint NŐ mondom 😃)!
                </p>
            </Col>
        </Row>
    )
}

export default Intro
