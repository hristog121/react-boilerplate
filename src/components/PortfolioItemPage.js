import React from 'react'

const PortfolioItem = (props) =>(
    <div>
        <h1>A thing i've done</h1>
        <p>This page is for the item with the ID of {props.match.params.id} </p>
    </div>
);

export default PortfolioItem;