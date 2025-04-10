import React from 'react';

export default function HerramientasVersionamiento() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-indigo-700">Herramientas de Control de Versiones</h1>

      <p className="mb-4">
        Existen diversas herramientas de control de versiones que permiten a los desarrolladores gestionar los cambios en el código fuente, colaborar de manera eficiente, y mantener un historial detallado de la evolución del proyecto. Estas herramientas pueden ser de tipo local, centralizado o distribuido. A continuación, te presentamos algunas de las más importantes y ampliamente utilizadas en la industria.
      </p>

      <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Git</h2>
      <p className="mb-4">
        Git es un sistema de control de versiones distribuido creado por Linus Torvalds en 2005. Es la herramienta más popular actualmente y es usada por millones de desarrolladores en todo el mundo. Permite que cada desarrollador tenga una copia completa del repositorio, lo que facilita trabajar offline y realizar múltiples experimentos sin afectar la rama principal.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Ventajas:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Alta velocidad en operaciones locales.</li>
            <li>Posibilidad de trabajar offline.</li>
            <li>Ramas ligeras para pruebas y desarrollo paralelo.</li>
          </ul>
        </li>
        <li><strong>Desventajas:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Curva de aprendizaje pronunciada para nuevos usuarios.</li>
            <li>Puede requerir configuración adicional para trabajar en equipos grandes.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Subversion (SVN)</h2>
      <p className="mb-4">
        Subversion es un sistema de control de versiones centralizado. Fue muy popular antes de la aparición de Git. A diferencia de Git, en SVN todos los cambios se registran en un servidor central y los desarrolladores trabajan con copias locales más ligeras.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Ventajas:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Simplicidad para proyectos pequeños y equipos centralizados.</li>
            <li>Control estricto del acceso a versiones.</li>
          </ul>
        </li>
        <li><strong>Desventajas:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Dependencia del servidor central.</li>
            <li>Menor flexibilidad que Git en manejo de ramas y fusiones.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Mercurial</h2>
      <p className="mb-4">
        Mercurial es otra herramienta distribuida como Git, pero con un enfoque más simple en su uso. Fue utilizada por Bitbucket en sus inicios antes de migrar completamente a Git. Su diseño está orientado a la simplicidad y eficiencia.
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Ventajas:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Interfaz más amigable para nuevos usuarios.</li>
            <li>Rendimiento sólido para proyectos grandes.</li>
          </ul>
        </li>
        <li><strong>Desventajas:</strong>
          <ul className="list-disc list-inside ml-4">
            <li>Menor comunidad y soporte que Git.</li>
            <li>Poca adopción en proyectos modernos.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-indigo-600">Comparativa general</h2>
      <table className="w-full text-left border border-gray-300 mb-6">
        <thead className="bg-indigo-100">
          <tr>
            <th className="p-2 border">Herramienta</th>
            <th className="p-2 border">Tipo</th>
            <th className="p-2 border">Popularidad</th>
            <th className="p-2 border">Facilidad de uso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">Git</td>
            <td className="p-2 border">Distribuido</td>
            <td className="p-2 border">Alta</td>
            <td className="p-2 border">Media</td>
          </tr>
          <tr>
            <td className="p-2 border">SVN</td>
            <td className="p-2 border">Centralizado</td>
            <td className="p-2 border">Media</td>
            <td className="p-2 border">Alta</td>
          </tr>
          <tr>
            <td className="p-2 border">Mercurial</td>
            <td className="p-2 border">Distribuido</td>
            <td className="p-2 border">Baja</td>
            <td className="p-2 border">Alta</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-semibold mb-2 text-indigo-600">Comandos comunes</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>git init:</strong> Inicializa un nuevo repositorio local de Git.</li>
        <li><strong>git add .</strong>: Agrega todos los archivos modificados al área de preparación.</li>
        <li><strong>git commit -m "mensaje"</strong>: Crea un commit con los cambios preparados.</li>
        <li><strong>git log:</strong> Muestra el historial de commits.</li>
        <li><strong>svn checkout URL:</strong> Descarga una copia del repositorio SVN desde el servidor.</li>
        <li><strong>hg clone URL:</strong> Clona un repositorio de Mercurial.</li>
      </ul>

      <p>
        Elegir la herramienta adecuada depende del tipo de proyecto, el tamaño del equipo, y la infraestructura disponible. Sin embargo, dominar Git es una habilidad esencial en el mundo del desarrollo moderno.
      </p>
    </div>
  );
}
