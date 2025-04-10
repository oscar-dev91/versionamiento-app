import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DiferenciaVersiones from './pages/DiferenciaVersiones';
import SistemasRemotos from './pages/SistemasRemotos';
import HerramientasVersionamiento from './pages/HerramientasVersionamiento';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-700 text-white p-4 shadow-md">
          <ul className="flex space-x-4">
            <li><Link to="/">Diferencias</Link></li>
            <li><Link to="/sistemas">Sistemas Remotos</Link></li>
            <li><Link to="/herramientas">Herramientas</Link></li>
          </ul>
        </nav>
        <main className="p-6">
          <Routes>
            <Route path="/" element={<DiferenciaVersiones />} />
            <Route path="/sistemas" element={<SistemasRemotos />} />
            <Route path="/herramientas" element={<HerramientasVersionamiento />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App
