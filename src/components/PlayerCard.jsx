import React from 'react';
import '../styles/PlayerCard.css';

function PlayerCard({ imageURL, playerPrice, playerName, playerClub }) {
    return (
        <div className='player-card-container'>
            <img 
                src={imageURL}
                alt='' 
            />

            <div className="price-tag">
                <text>£<span className="player-price">{playerPrice}</span>M</text>
            </div>

            <div className="player-info">
                <h1 className="player-name">{playerName}<span>, </span><span className='club-name'>{playerClub}</span></h1>                
            </div>
        </div>
    );
}

export default PlayerCard;
