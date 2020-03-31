import React from 'react';
import { Hero } from '../components/hero/Hero'

export function HomePage(props) {

    return (
        <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
    );

}