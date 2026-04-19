
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-black border-b-2 border-blue-500 px-8 py-4 flex items-center justify-between font-mono">

      <Link to="/" className="text-blue-500 font-black text-lg uppercase tracking-widest no-underline">
        Game<span className="text-white">R&S</span>
      </Link>

      <div className="flex gap-3">
        <Link to="/spacewords" className="bg-blue-500 text-black font-bold text-xs px-5 py-2 uppercase tracking-widest no-underline hover:bg-blue-400 transition">
          SpaceWord
        </Link>
        <Link to="/twoships" className="bg-white text-black font-bold text-xs px-5 py-2 uppercase tracking-widest no-underline hover:bg-red-500 transition">
          Two Ships Passing In The Night
        </Link>
      </div>

      <Link to="/" className="border-2 border-blue-500 text-blue-500 font-bold text-xs px-5 py-2 uppercase tracking-widest no-underline hover:bg-blue-400 hover:text-black transition">
        HOME
      </Link>

    </nav>
  );
}