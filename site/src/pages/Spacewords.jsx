import { Link } from 'react-router-dom';

function Spacewords() {
  return (
    <div>
      <Link to="/">Accueil</Link>
      <h1>Spacewords</h1>
      <p>C'est un jeu très amusant</p>
      <iframe
        src="https://shayzle.github.io/space-word-jeux-videops/"
        width="640"
        height="480"
        title="Spacewords"
      ></iframe>
    </div>
  );
}

export default Spacewords;
