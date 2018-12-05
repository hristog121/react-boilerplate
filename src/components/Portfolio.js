import React from 'react'
import {Link} from 'react-router-dom'

const Portfolio = () =>(
    <div>
        <h1>My Work</h1>
        <p>Check the stuff i've done:</p>
        <Link to="/portfolio/1">Item One</Link>
        <Link to="/portfolio/2">Item Two</Link>

    </div>
);

export default Portfolio;