// Arrays de objetos con la experiencia
const exp_academica = [
  {
    titulo: "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
    centro: "IES Teis",
    periodo: "2025 - Presente",
    descripcion: "Formación centrada en desarrollo web cliente/servidor, bases de datos y despliegue de aplicaciones."
  },
  {
    titulo: "Grado Medio en Sistemas Microinformáticos y Redes (SMR)",
    centro: "IES Teis",
    periodo: "2023 - 2025",
    descripcion: "Administración de sistemas operativos, montaje de equipos, redes locales y servicios en red."
  }
];

const exp_profesional = [
  {
    puesto: "Técnico de Soporte y Sistemas",
    empresa: "Tech Solutions S.L.",
    periodo: "2025",
    descripcion: "Mantenimiento de infraestructura de red, administración de servidores Ubuntu y atención a incidencias."
  },
  {
    puesto: "Desarrollador Web Jr. (Prácticas)",
    empresa: "Estudio Creativo Digital",
    periodo: "2024",
    descripcion: "Maquetación responsive con HTML, CSS y JavaScript para sitios corporativos."
  }
];

// Función para renderizar experiencia académica
function cargarExperienciaAcademica() {
  const contenedor = document.getElementById('lista-academica');
  contenedor.innerHTML = exp_academica.map(item => `
    <article class="card">
      <h3 class="card-title">${item.titulo}</h3>
      <p class="card-subtitle">${item.centro} | ${item.periodo}</p>
      <p class="card-description">${item.descripcion}</p>
    </article>
  `).join('');
}

// Función para renderizar experiencia profesional
function cargarExperienciaProfesional() {
  const contenedor = document.getElementById('lista-profesional');
  contenedor.innerHTML = exp_profesional.map(item => `
    <article class="card">
      <h3 class="card-title">${item.puesto}</h3>
      <p class="card-subtitle">${item.empresa} | ${item.periodo}</p>
      <p class="card-description">${item.descripcion}</p>
    </article>
  `).join('');
}

// Carga inicial al completar la lectura del DOM
document.addEventListener('DOMContentLoaded', () => {
  cargarExperienciaAcademica();
  cargarExperienciaProfesional();
});