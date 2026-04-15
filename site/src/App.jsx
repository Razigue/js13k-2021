import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Twoships from './pages/Twoships';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/twoships" element={<Twoships />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
