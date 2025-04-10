export default function Inicio() {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Proyecto de Versionamiento de Código</h1>
        <p className="mb-4">
          Este proyecto tiene como finalidad enseñar y profundizar sobre el uso de sistemas de control de versiones tanto locales como remotos. A través de una aplicación desarrollada en React, aprenderás a distinguir conceptos claves, comparar plataformas populares y conocer herramientas especializadas para la gestión del código.
        </p>
        <p className="mb-4">
          El control de versiones es fundamental en el desarrollo de software moderno. Permite a los equipos trabajar de manera colaborativa, revertir errores, documentar cambios y mantener un historial completo de la evolución del proyecto. Aprender sobre estos sistemas no solo mejora la calidad del código, sino también la eficiencia y organización del trabajo en equipo.
        </p>
        <p className="mb-4">
          Existen dos tipos principales de control de versiones: local y remoto. El control local se enfoca en el manejo de cambios dentro de un solo equipo, mientras que el control remoto permite la colaboración entre múltiples desarrolladores a través de plataformas en línea como GitHub, GitLab y Bitbucket.
        </p>
        <img src="https://s3.mordorintelligence.com/version-control-system-market/version-control-system-market_1594822857903_Picture1.webp" alt="Control de Versiones" className="rounded-xl shadow-md mt-4" />
      </div>
    );
  }