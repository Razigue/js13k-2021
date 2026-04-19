
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import group_star_wars from '../assets/group_star_wars_white.jpg';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Navbar />

      <div className="flex flex-col items-center pt-16 pb-10 gap-6 overflow-hidden">
        <div className="text-center">
          <h1 className="text-7xl font-black tracking-widest leading-none">
            JEUX<span className="text-blue-500">VIDE</span>OPS
          </h1>
          <p className="text-gray-400 text-sm tracking-widest mt-3 uppercase">
            Select Your Game Here!!
          </p>
        </div>

        <div className="flex gap-4 mt-2 z-10">
          <Link to="/spacewords" className="bg-blue-500 text-white font-black text-sm px-7 py-3 uppercase tracking-widest no-underline hover:bg-blue-400 transition">
            SpaceWord
          </Link>
          <Link to="/twoships" className="border-2 border-white text-white font-black text-sm px-7 py-3 uppercase tracking-widest no-underline hover:bg-white hover:text-black transition">
            Two Ships Passing In The Night
          </Link>
        </div>
      </div>


      <div className="flex-1 overflow-hidden rounded-2xl">
        <img src={group_star_wars} className="w-full h-64 object-cover"/>
      </div>

  
      <footer className="border-t border-blue-400 py-6 text-center text-blue-500 text-xs tracking-widest uppercase">
        copyrights 2026 JeuxVideOPS : Epitech Paris
      </footer>

    </div>
  );
}

export default Home;