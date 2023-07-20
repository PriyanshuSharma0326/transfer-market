import PlayerCard from "./PlayerCard";
import '../styles/App.css';

export default function App(props) {
    return (
        <div className="App">
            <PlayerCard 
                imageURL={'https://cdn3.mozzartsport.co.ke/upload/player/haland.png_1673701268443.png'} 
                playerPrice='180' 
                playerName='Erling Haaland' 
                playerClub='Manchester City FC' 
            />

            <PlayerCard 
                imageURL={'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwYsnLbohTzOYVCCMVAaFMpKUYIqciFFc_tlZSZHrdhgfMDzeoWlfn3StEwyvOAt5VnEIAZOrWhHsCoam01bW8e0BjzV-Vv-jzrzWdCsP4uo1BVuf1xvMvdZaYHeGhKZ0QeYtDiO20Z4lTAhuPgN17W6YUFLqQsJ0vO0m94cU5Zkg5bkyBFqcf0qhC/s500/Rolnaldo.png'} 
                playerPrice='15' 
                playerName='Cristiano ronaldo' 
                playerClub='Al-Nassr FC' 
            />

            <PlayerCard 
                imageURL={'https://www.pngall.com/wp-content/uploads/13/Harry-Kane-PNG-Photo.png'} 
                playerPrice='90' 
                playerName='Harry Kane' 
                playerClub='FC Bayern München' 
            />

            <PlayerCard 
                imageURL={'https://i.bundesliga.com/player/dfl-obj-0002f5-dfl-clu-00000g-dfl-sea-0001k7.png'} 
                playerPrice='75' 
                playerName='Joshua Kimmich' 
                playerClub='FC Bayern München' 
            />

            <PlayerCard 
                imageURL={'https://resources.premierleague.com/premierleague/photos/players/250x250/p171314.png'} 
                playerPrice='105' 
                playerName='Rúben Dias' 
                playerClub='Manchester City FC' 
            />

            <PlayerCard 
                imageURL={'https://i.bundesliga.com/player/dfl-obj-0000ia-dfl-clu-00000g-dfl-sea-0001k7.png'} 
                playerPrice='12' 
                playerName='Thomas Müller' 
                playerClub='FC Bayern München' 
            />

            <PlayerCard 
                imageURL={'https://resources.premierleague.com/premierleague/photos/players/250x250/p219847.png'} 
                playerPrice='55' 
                playerName='Kai Havertz' 
                playerClub='Chelsea FC' 
            />
        </div>
    );
}
