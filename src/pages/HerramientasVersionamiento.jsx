export default function HerramientasVersionamiento() {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Herramientas de Versionamiento</h1>
        <ul className="space-y-2 list-disc pl-5">
          <li>
            <strong>Git:</strong> Sistema de control de versiones distribuido, rápido y confiable.
          </li>
          <li>
            <strong>GitHub Desktop:</strong> Interfaz gráfica para usuarios que no usan terminal.
          </li>
          <li>
            <strong>SourceTree:</strong> Cliente gráfico para Git y Mercurial.
          </li>
          <li>
            <strong>GitKraken:</strong> Potente interfaz visual, ideal para trabajo en equipo.
          </li>
        </ul>
      </div>
    );
  }