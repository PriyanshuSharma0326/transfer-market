import PlayerCard from './components/PlayerCard';
import './styles/App.css';
import playerData from './constants/players';
import Categories from './components/Categories';
import { useState } from 'react';

export default function App() {
    const [playerList, setPlayerList] = useState(playerData);

    const filterMenuItems = (category) => {
        if (category === 'All') {
            setPlayerList(playerData);
            return;
        }

        else if(category === 'Cheap') {
            let newPlayerList = playerData.filter(player => player.playerPrice <= 30);
            setPlayerList(newPlayerList);
        }

        else if(category === 'Mid-range') {
            let newPlayerList = playerData.filter(player => player.playerPrice > 30 && player.playerPrice <= 60);
            setPlayerList(newPlayerList);
        }
        
        else if(category === 'Expensive') {
            let newPlayerList = playerData.filter(player => player.playerPrice > 60);
            setPlayerList(newPlayerList);
        }
    };

    return (
        <div className="App">
            <h1 className='title'>Transfer Market</h1>

            <Categories filterMenuItems={filterMenuItems} />

            <div className="cards-container">
                {playerList.map(player => {
                    return (<PlayerCard 
                        key={player.id}
                        {...player}
                    />);
                })}
            </div>
        </div>
    );
}
