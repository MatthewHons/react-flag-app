import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h1>A propos</h1>
            <br />
            <p>J'ai créé ce site afin d'améliorer mes compétences en React. Avec pour objectif de trouver un stack dans cette technologie</p>
            <br />
        </div>
    );
};

export default About;