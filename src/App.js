import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';

import { Footer } from './components/Footer';
import { HomePage } from './views/HomePage';
import { AboutPage } from './views/AboutPage';
import { ContactPage } from './views/ContactPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Filipe Gomes',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      blog: {
        blogurl: 'https://bloggr.tech'
      },
      home: {
        title: 'Welcome to my Porfolio',
        subtitle: 'Creative expression through code.',
        text: 'Have a look at some of my projects below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'How to Find Me'
      }
    }
  }

  render() {
    const { title, home } = this.state;
    return (
      <div className="App">
        <Router>
          <Container fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>{title}</Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>


                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />} />
            <Route path="/About" exact render={() => <AboutPage title={this.state.about.title} subtitle={this.state.about.subtitle} text={this.state.about.text} />} />
            <Route path="/Contact" exact render={() => <ContactPage title={this.state.contact.title} subtitle={this.state.about.subtitle} text={this.state.contact.text} />} />

            <Footer home={home} />

          </Container>
        </Router>
      </div>
    )
  }

}

export default App;
