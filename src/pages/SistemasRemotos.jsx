export default function SistemasRemotos() {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Sistemas de Versionamiento Remoto</h1>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>GitHub:</strong> Plataforma más popular, con integración a múltiples herramientas, CI/CD, y gran comunidad.
          </li>
          <li>
            <strong>GitLab:</strong> Permite tener repositorios privados gratuitos, integración DevOps completa.
          </li>
          <li>
            <strong>Bitbucket:</strong> Integrado con Jira y Trello, ideal para equipos que usan el ecosistema Atlassian.
          </li>
        </ul>
      </div>
    );
  }