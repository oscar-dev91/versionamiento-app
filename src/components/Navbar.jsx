import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow">
      <ul className="flex gap-6">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/diferenciaversiones">Diferencia Versiones</Link></li>
        <li><Link to="/sistemasremotos">Sistemas Remotos</Link></li>
        <li><Link to="/herramientasversionamiento">Herramientas</Link></li>
      </ul>
    </nav>
  )
}
