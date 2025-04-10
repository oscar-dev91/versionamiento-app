export default function DiferenciaVersiones() {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Diferencias entre Versionamiento Local y Remoto</h1>
        <table className="table-auto w-full border-collapse border border-gray-300 text-left">
          <thead className="bg-blue-100">
            <tr>
              <th className="border px-4 py-2">Aspecto</th>
              <th className="border px-4 py-2">Versionamiento Local</th>
              <th className="border px-4 py-2">Versionamiento Remoto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Ubicación</td>
              <td className="border px-4 py-2">Solo en tu equipo</td>
              <td className="border px-4 py-2">En servidores en la nube</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Colaboración</td>
              <td className="border px-4 py-2">Limitada</td>
              <td className="border px-4 py-2">Permite trabajo en equipo</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Acceso</td>
              <td className="border px-4 py-2">Sin internet</td>
              <td className="border px-4 py-2">Requiere conexión</td>
            </tr>
          </tbody>
        </table>
        <img src="https://www.gitkraken.com/_nuxt/img/0a19c7a.svg" alt="Comparación" className="rounded-xl shadow-md mt-6" />
      </div>
    );
  }