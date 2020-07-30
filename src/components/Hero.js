import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Container, Row, Col } from 'react-bootstrap';


export function Hero(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} xs={12}>
                        { props.title && <h2 className="display-1 title font-weight-bolder">{props.title}</h2> }
                        { props.subtitle && <h3 className="display-4 subtitle font-weight-light">{props.subtitle}</h3> }
                        { props.text && <h3 className="lead text font-weight-light">{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}

export default Hero;