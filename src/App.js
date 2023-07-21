import PlayerCard from './components/PlayerCard';
import './styles/App.css';
import playerData from './constants/players';

export default function App() {
    return (
        <div className="App">
            <h1 className='title'>Transfer Market</h1>

            <div className="categories">
                <button className="category">All</button>
                <button className="category">Cheap</button>
                <button className="category">Mid-range</button>
                <button className="category">Expensive</button>
            </div>

            <div className="cards-container">
                {playerData.map(player => {
                    return (<PlayerCard 
                        key={player.id}
                        {...player}
                    />);
                })}
            </div>
        </div>
    );
}
