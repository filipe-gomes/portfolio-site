import React from 'react';
import { Hero } from '../components/Hero'
import { Carousel } from '../components/Carousel';

export function HomePage(props) {

    return (
        <div>
            <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
            <Carousel />
        </div>
    );

}