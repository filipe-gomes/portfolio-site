import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faTwitter,
    faStackOverflow,
    faGithub,
    faLinkedin
 } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(
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
                        <a className="flex flex-column items-center justify-center w-100 pa2 br2 br--top no-underline hover-bg-blue4 hover-white" 
                            target="_blank" rel="noopener noreferrer" href="https://github.com/filipe-gomes">
                            <FontAwesomeIcon icon={['fab', 'fa-github']} size="sm" />
                        </a>
                        <a className="flex flex-column items-center justify-center w-100 pa2 br2 br--top no-underline hover-bg-blue4 hover-white" 
                            target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/users/10173895/filipe">
                            <FontAwesomeIcon icon={['fab', 'fa-stack-overflow']} size="sm" />
                        </a>
                        <a className="flex flex-column items-center justify-center w-100 pa2 br2 br--top no-underline hover-bg-blue4 hover-white" 
                            target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/filipe-magalhaes-gomes/">
                            <FontAwesomeIcon icon={['fab', 'fa-linkedin-in']} size="sm" />
                        </a>
                        <a className="flex flex-column items-center justify-center w-100 pa2 br2 br--top no-underline hover-bg-blue4 hover-white" 
                            target="_blank" rel="noopener noreferrer" href="https://twitter.com/master_ulubulu">
                            <FontAwesomeIcon icon={['fab', 'fa-twitter']} size="sm" />
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