import { Link } from 'react-router-dom';

function Twoships() {
  return (
    <div>
      <Link to="/">Accueil</Link>
      <h1>Two Ships Passing In The Night</h1>
      <p>C'est un jeu de tir très amusant</p>
      <iframe
        src="https://razigue.github.io/js13k-2021/"
        width="640"
        height="480"
        title="Two Ships"
      ></iframe>
    </div>
  );
}

export default Twoships;
