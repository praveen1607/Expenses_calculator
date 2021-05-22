import React from 'react';

import './Card.css'

const Card = props =>{

    const classes='card ' + props.className; // give the space after tha card 
    return <div className={classes}>{props.children}</div>
};

export default Card;