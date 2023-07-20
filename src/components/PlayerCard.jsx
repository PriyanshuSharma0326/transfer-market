import React from 'react';
import '../styles/PlayerCard.css';

function PlayerCard(props) {
    return (
        <div className='player-card-container'>
            <img 
                src={props.imageURL}
                alt='' 
            />

            <div className="price-tag">
                <text>£<span className="player-price">{props.playerPrice}</span>M</text>
            </div>

            <div className="player-info">
                <h1 className="player-name">{props.playerName}<span>, </span><span className='club-name'>{props.playerClub}</span></h1>                
            </div>
        </div>
    );
}

export default PlayerCard;
