export default function HerramientasVersionamiento() {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Herramientas de Versionamiento</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Git</h2>
            <p>La herramienta de control de versiones distribuido más utilizada. Permite registrar y gestionar los cambios en el código de manera eficiente.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">GitKraken</h2>
            <p>Cliente gráfico que facilita la visualización de ramas, commits y conflictos. Ideal para equipos visuales.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">GitHub Desktop</h2>
            <p>Aplicación de escritorio para GitHub. Ideal para usuarios que prefieren evitar la línea de comandos.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">SourceTree</h2>
            <p>Herramienta gratuita de Atlassian para Git y Mercurial. Muy útil para trabajo con repositorios remotos complejos.</p>
          </div>
        </div>
      </div>
    );
  }