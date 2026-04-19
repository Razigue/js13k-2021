import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Twoships from './pages/Twoships';
import Spacewords from './pages/Spacewords';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/twoships" element={<Twoships />} />
        <Route path="/Spacewords" element={<Spacewords />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;