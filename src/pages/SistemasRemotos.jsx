export default function SistemasRemotos() {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Sistemas de Versionamiento Remoto</h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">GitHub</h2>
            <p>Plataforma ampliamente utilizada por desarrolladores. Permite crear repositorios públicos y privados, integrar CI/CD, GitHub Actions y trabajar con una gran comunidad.</p>
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className="w-20 mt-2" alt="GitHub" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">GitLab</h2>
            <p>Ofrece herramientas DevOps completas, integración continua, y repositorios privados gratuitos. Ideal para proyectos empresariales autoalojados.</p>
            <img src="https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png" className="w-20 mt-2" alt="GitLab" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Bitbucket</h2>
            <p>Plataforma de Atlassian que se integra con Jira y Trello. Popular en empresas que ya usan ese ecosistema.</p>
            <img src="https://wac-cdn.atlassian.com/dam/jcr:e76553b1-90c2-45e5-b85d-3d7a497e67cd/bitbucket-atlassian-logo.png" className="w-20 mt-2" alt="Bitbucket" />
          </div>
        </div>
      </div>
    );
  }