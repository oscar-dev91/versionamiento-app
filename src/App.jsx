import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import DiferenciaVersiones from './pages/DiferenciaVersiones';
import SistemasRemotos from './pages/SistemasRemotos';
import HerramientasVersionamiento from './pages/HerramientasVersionamiento';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/diferenciaversiones" element={<DiferenciaVersiones />} />
        <Route path="/sistemasremotos" element={<SistemasRemotos />} />
        <Route path="/herramientasversionamiento" element={<HerramientasVersionamiento />} />
      </Routes>
    </div>
  );
}


export default App;