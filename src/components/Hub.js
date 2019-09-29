import React, {Component} from 'react';
import HubPanel from './HubPanels'
import { Container, Row, Col } from 'react-bootstrap'

class Hub extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <HubPanel
                            src="https://static.wirtualnemedia.pl/media/top/goscniedzielny-logo655.png"
                            title="Wpisz na listę gości"
                            text="Aplikacja do wpisywania na listę gości używana na firmowym tablecie"
                            link="/guestlist"
                        />
                    </Col>
                    <Col>
                        <HubPanel
                            src="https://apollo-ireland.akamaized.net/v1/files/eyJmbiI6ImljNnVuMTB2ODMzZzItT1RPTU9UT1BMIn0.4sfH0TA7Y1nz5L3BBtXyTYRWq4sNuYCIaLlGEw1Bw2U/image;s=1080x720;cars_;/902763457_;slot=1;filename=eyJmbiI6ImljNnVuMTB2ODMzZzItT1RPTU9UT1BMIn0.4sfH0TA7Y1nz5L3BBtXyTYRWq4sNuYCIaLlGEw1Bw2U_rev001.jpg"
                            title="Wypożycz firmowy samochód"
                            text="Dzięki tej aplikacji w łatwy sposób wypożyczysz samochód firmowy"
                            link="/car"
                        />
                    </Col>
                </Row>


            </Container>
           );
    }
}

export default Hub;