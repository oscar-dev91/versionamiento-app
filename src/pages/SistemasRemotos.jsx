import React from 'react';

export default function SistemasRemotos() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-indigo-700">Sistemas de Versionamiento Remotos: GitHub, GitLab y Bitbucket</h1>

      <p className="mb-4">
        Los sistemas de versionamiento remoto permiten que múltiples desarrolladores colaboren en un mismo proyecto desde cualquier lugar del mundo. Estas plataformas almacenan los repositorios en la nube y proporcionan herramientas de colaboración, gestión de proyectos y control de acceso.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Historia y evolución</h2>
      <p className="mb-4">
        GitHub fue fundado en 2008 y se ha consolidado como la plataforma más popular para alojar repositorios de código. GitLab surgió poco después como una alternativa de código abierto con un enfoque DevOps. Bitbucket, propiedad de Atlassian, integró Mercurial inicialmente y luego se centró en Git, atrayendo a empresas con su integración con Jira y otras herramientas de gestión.
      </p>

      <h2 className="text-xl font-semibold mb-2">Ventajas de usar sistemas remotos:</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Colaboración global:</strong> Desarrolladores de todo el mundo pueden trabajar juntos en tiempo real.</li>
        <li><strong>Copias de seguridad:</strong> Tus repositorios están almacenados de forma segura en la nube.</li>
        <li><strong>Historial compartido:</strong> Todos los miembros del equipo pueden acceder al historial completo del proyecto.</li>
        <li><strong>Automatización:</strong> Integración con herramientas CI/CD para pruebas y despliegues automáticos.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Desventajas:</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Dependencia de internet:</strong> No puedes acceder a los repositorios si estás desconectado.</li>
        <li><strong>Privacidad:</strong> Los proyectos públicos son visibles para todos si no se configura correctamente la privacidad.</li>
        <li><strong>Curva de aprendizaje:</strong> Las herramientas pueden ser abrumadoras para principiantes.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4 text-indigo-600">Comparativa entre plataformas</h2>
      <table className="w-full text-left border border-gray-300 mb-6">
        <thead className="bg-indigo-100">
          <tr>
            <th className="p-2 border">Característica</th>
            <th className="p-2 border">GitHub</th>
            <th className="p-2 border">GitLab</th>
            <th className="p-2 border">Bitbucket</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">Popularidad</td>
            <td className="p-2 border">Muy alta</td>
            <td className="p-2 border">Media</td>
            <td className="p-2 border">Media</td>
          </tr>
          <tr>
            <td className="p-2 border">Código abierto</td>
            <td className="p-2 border">No</td>
            <td className="p-2 border">Sí</td>
            <td className="p-2 border">No</td>
          </tr>
          <tr>
            <td className="p-2 border">Integración CI/CD</td>
            <td className="p-2 border">Acciones de GitHub</td>
            <td className="p-2 border">GitLab CI/CD</td>
            <td className="p-2 border">Pipelines</td>
          </tr>
          <tr>
            <td className="p-2 border">Repositorios privados gratuitos</td>
            <td className="p-2 border">Sí</td>
            <td className="p-2 border">Sí</td>
            <td className="p-2 border">Sí</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Comandos útiles al trabajar con sistemas remotos</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>git clone URL:</strong> Clona un repositorio remoto en tu máquina local. Descarga todo el historial y crea un entorno de trabajo local.</li>
        <li><strong>git remote -v:</strong> Muestra las URL asociadas a los repositorios remotos configurados en tu proyecto.</li>
        <li><strong>git push origin main:</strong> Envía tus commits locales a la rama principal (main) del repositorio remoto.</li>
        <li><strong>git pull origin main:</strong> Trae los cambios de la rama principal del repositorio remoto y los fusiona con tu trabajo local.</li>
        <li><strong>git fetch:</strong> Descarga los cambios remotos sin fusionarlos, permitiendo revisar antes de aplicar.</li>
      </ul>

      <p className="mt-6">
        En resumen, los sistemas remotos de control de versiones son esenciales para el desarrollo moderno de software, ya que permiten colaboración, seguridad y automatización. Aprender a utilizarlos adecuadamente es clave para cualquier desarrollador.
      </p>
    </div>
  );
}