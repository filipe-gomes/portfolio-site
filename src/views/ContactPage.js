import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';
import Axios from 'axios';

export class ContactPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);
                
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
        
    }

    render() {
        return (
            <div>
                <Hero title={this.props.title} />
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label className="float-left" htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="float-left" htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="float-left" htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="5" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </Form>
                </Content>
            </div>
        );
    }

}

