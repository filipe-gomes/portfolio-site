import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faTwitter,
    faStackOverflow,
    faGithub,
    faLinkedin
 } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(
    fab,
    faTwitter,
    faStackOverflow,
    faGithub,
    faLinkedin
)

export const Footer = () => {
    return <div className="footer">
        <footer className="mt-5">
            <Container>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        <a className="float-left p-2" style={{color: "#212529"}} 
                            target="_blank" rel="noopener noreferrer" href="https://github.com/filipe-gomes">
                            <FontAwesomeIcon icon={['fab', 'github']} size="1x" />
                        </a>
                        <a className="float-left p-2" style={{color: "#212529"}}  
                            target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/10173895/filipe">
                            <FontAwesomeIcon icon={['fab', 'stack-overflow']} size="1x" />
                        </a>
                        <a className="float-left p-2" style={{color: "#212529"}}  
                            target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/filipe-magalhaes-gomes/">
                            <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="1x" />
                        </a>
                        <a className="float-left p-2" style={{color: "#212529"}}  
                            target="_blank" rel="noopener noreferrer" href="https://twitter.com/filipecodes">
                            <FontAwesomeIcon icon={['fab', 'twitter']} size="1x" />
                        </a>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                    &copy; {1900 + new Date().getYear()} Filipe Gomes
                </Col>
                </Row>
            </Container>
        </footer>
    </div>
}