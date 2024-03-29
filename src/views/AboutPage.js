import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import filipe from '../assets/images/filipe.jpeg';

export function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <img src={filipe} alt={filipe} className="rounded profile float-right ml-3" />
                <p align="justify">Hello, my name is Filipe. I am a self-taught software engineer with experience in a wide array of technologies spanning frontend and backend development.</p>
                <p align="justify">My true passion, however, lies in the frontend. I've been developing with React for about 5 years, and next.js for 2 years. I enjoy trying out new tech and finding the most optimal solution to a given problem.</p>
                <p align="justify">I have an entreprenurial spirit and I had the pleasure of running my own startup company from February 2015 to June 2017. My experience helped to propel my career in the software industry, and since then I've had the opportunity to work at some fun places in the Kansas City area.</p>
                <p align="justify">I'm interested in continuous learning and self-improvement, and I'm very passionate about UI/UX. You can find me on Linkedin and Twitter, and I encourage you to check out my projects on GitHub.</p>
                <p align="justify">Thank you for taking the time to read this, and I hope you have a great rest of your day.</p>
                <p align="justify">-Filipe</p>
            </Content>
        </div>
    );

}