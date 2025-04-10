export default function DiferenciaVersiones() {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Diferencias entre Versionamientos Locales y Remotos</h1>
        <p className="mb-2">🔹 <strong>Versionamiento Local:</strong> El control de versiones se realiza en tu máquina, permitiéndote hacer commits, ver historial y cambios sin conexión a internet.</p>
        <p className="mb-2">🔹 <strong>Versionamiento Remoto:</strong> Involucra servidores en la nube (como GitHub) para compartir código con otros, colaborar y hacer respaldo.</p>
        <p>✅ Ambos se complementan: trabajas local y luego sincronizas con el remoto.</p>
      </div>
    );
  }