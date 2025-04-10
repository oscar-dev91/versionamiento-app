import React from 'react';

export default function DiferenciaVersiones() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-indigo-700">Diferencia entre sistemas de versionamiento locales y remotos</h1>

      <p className="mb-4">
        Los sistemas de control de versiones permiten llevar un registro de los cambios realizados en archivos, especialmente código fuente, a lo largo del tiempo. Estos sistemas pueden ser locales o remotos, dependiendo de dónde se almacena y gestiona la información del historial de versiones.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-indigo-600">Versionamiento Local</h2>
      <p className="mb-4">
        En el versionamiento local, todo el historial de versiones se almacena en el mismo equipo donde se está desarrollando el proyecto. Git es un ejemplo de herramienta que permite trabajar de forma local sin necesidad de conexión a internet, aunque también puede conectarse a servicios remotos.
      </p>

      <h2 className="text-xl font-semibold mb-2">Ventajas del versionamiento local:</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Sin necesidad de internet:</strong> Puedes trabajar en tus proyectos sin conexión, ideal para lugares sin acceso constante a la red.</li>
        <li><strong>Mayor control personal:</strong> Toda la información está en tu equipo, por lo que puedes experimentar sin afectar a otros.</li>
        <li><strong>Rendimiento:</strong> Las operaciones son más rápidas porque no dependen de un servidor externo.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Desventajas del versionamiento local:</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Riesgo de pérdida de datos:</strong> Si tu equipo falla y no tienes copias de seguridad, puedes perder el proyecto completo.</li>
        <li><strong>Difícil colaboración:</strong> No está pensado para el trabajo en equipo, lo que complica la sincronización de versiones entre desarrolladores.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-indigo-600">Versionamiento Remoto</h2>
      <p className="mb-4">
        El versionamiento remoto implica el uso de servidores externos para alojar los repositorios, permitiendo que múltiples usuarios accedan, colaboren y mantengan sincronizados los cambios. Herramientas como GitHub, GitLab o Bitbucket son ejemplos populares.
      </p>

      <h2 className="text-xl font-semibold mb-2">Ventajas del versionamiento remoto:</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Colaboración en equipo:</strong> Facilita el trabajo simultáneo de varios desarrolladores en el mismo proyecto.</li>
        <li><strong>Respaldo en la nube:</strong> Tus archivos están seguros aunque tu equipo se dañe o pierdas la información local.</li>
        <li><strong>Control de acceso y seguridad:</strong> Puedes definir permisos para cada colaborador.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Desventajas del versionamiento remoto:</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Dependencia de internet:</strong> Para subir o descargar cambios es necesario tener conexión.</li>
        <li><strong>Complejidad inicial:</strong> Puede ser abrumador al inicio para quienes no están familiarizados con conceptos como ramas, pull requests o conflictos de fusión.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-indigo-600">Comandos básicos y explicación</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>git init:</strong> Inicializa un nuevo repositorio de Git en tu carpeta actual. Este comando crea un subdirectorio llamado <code>.git</code> que contiene todos los archivos necesarios para el versionamiento.</li>
        <li><strong>git add archivo.txt:</strong> Añade un archivo específico al área de preparación (staging area), lo que indica que deseas incluirlo en el próximo commit.</li>
        <li><strong>git commit -m "mensaje":</strong> Guarda los cambios preparados con un mensaje descriptivo. Cada commit representa un punto específico del historial del proyecto.</li>
        <li><strong>git status:</strong> Muestra el estado actual del repositorio: qué archivos han cambiado, cuáles están listos para ser confirmados y cuáles no.</li>
        <li><strong>git log:</strong> Muestra el historial completo de commits, incluyendo el autor, fecha y mensaje de cada uno, lo que ayuda a rastrear el progreso del proyecto.</li>
        <li><strong>git push:</strong> Envía tus commits locales a un repositorio remoto. Necesita una conexión previa con <code>git remote add origin URL</code>.</li>
        <li><strong>git pull:</strong> Descarga los cambios desde el repositorio remoto y los fusiona con tu trabajo local.</li>
      </ul>
    </div>
  );
}