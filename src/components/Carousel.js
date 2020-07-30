import React, { Component }  from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Card from '../components/Card';

import bloggr from '../assets/images/bloggr.png';
import aliens from '../assets/images/aliens.png'
import nracalc from '../assets/images/nracalc.png'


export class Carousel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Kill The Party Aliens!',
                    subtitle: 'Space Invaders clone built with Pygame',
                    imgSrc: aliens,
                    link: 'https://github.com/filipe-gomes/party_aliens',
                    selected: false
                },
                {
                    id: 1,
                    title: 'bloggr.tech',
                    subtitle: 'Multi-user blog site created with Django',
                    imgSrc: bloggr,
                    link: 'https://bloggr.tech',
                    selected: false
                },
                {
                    id: 2,
                    title: 'NRA Calculator (collaborator)',
                    subtitle: 'Collaboration made with team at CodeForKC',
                    imgSrc: nracalc,
                    link: 'https://codeforkc.org/nra_calc/',
                    selected: false
                }
            ]

        }
    }

    handleCardClick = (id) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({items});
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} handleClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}