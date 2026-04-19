
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Spacewords() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navbar />

      <div className="flex flex-col items-center justify-center py-12">
        <div className="border-2 border-blue-500 p-1">
          <iframe
            src="https://shayzle.github.io/jeux-videops-space-word/"
            width="640"
            height="480"
            title="Spacewords"
            className="block"
          />
        </div>
      </div>

    </div>
  );
}

export default Spacewords;