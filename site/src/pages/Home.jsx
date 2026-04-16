import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>JeuVideOPS by R&S</h1>
      <p>Bienvenue sur notre site de jeu</p>
      <nav>
        <Link to="/twoships">Two Ships Passing In The Night</Link>
      </nav>
      <nav>
        <Link to="/spacewords">Spacewords</Link>
      </nav>
    </div>
  );
}

export default Home;
