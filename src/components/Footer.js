import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = (props) => {
    return <div className="footer">
        <footer className="mt-5">
            <Container>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        {props.home.subtitle}
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                    &copy; {1900 + new Date().getYear()} Filipe Gomes
                </Col>
                </Row>
            </Container>
        </footer>
    </div>
}