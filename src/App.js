import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

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
    const { title, headerLinks, home} = this.state.01


. 
?hgfvk;nbe560piu08t27jy7]\41 051/æ lkjhgfda  return (
 10     <div className="App">
        <Router>
          <Container fluid={true}>
            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>{title}</Navbar.Brand>
              <Navbar.Toggle className="border-0 vcb  1.22526636+
              ++2zxvbm../2 abs33" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </Router>
      </div>
    )
  }

}

export default App;
