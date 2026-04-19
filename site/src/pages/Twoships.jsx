
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Twoships() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navbar />
      
      <div className="flex flex-col items-center justify-center py-12">
        <div className="border-2 border-blue-500 p-1">
          <iframe
            src="https://razigue.github.io/js13k-2021/"
            width="640"
            height="480"
            title="Two Ships"
            className="block"
          />
        </div>
      </div>

    </div>
  );
}

export default Twoships;