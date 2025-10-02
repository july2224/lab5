const estanteria = {
  libros: [
    { nombre: 'El caballero oscuro', autor: 'Frank Miller', leido: false },
    { nombre: 'El mundo amarillo', autor: 'Albert Espinosa', leido: false },
    { nombre: 'Harry Potter y el caliz de fuego', autor: 'J.K. Rowling', leido: true },
    { nombre: 'El ingenioso hidalgo Don Quijote de la Mancha', autor: 'Miguel de Cervantes', leido: false },
    { nombre: 'Berserk', autor: 'Kentaro Miura', leido: true },
    { nombre: 'Iliada', autor: 'Homero', leido: false }
  ],

  log() {
    const contenedor = document.getElementById('logLibros');
    let html = `
      <table>
        <thead>
          <tr>
            <th>Estado</th>
            <th>Libro</th>
            <th>Autor</th>
          </tr>
        </thead>
        <tbody>
    `;

    this.libros.forEach(libro => {
      const estado = libro.leido ? 'Leído' : 'No leído';
      html += `
        <tr>
          <td>${estado}</td>
          <td>${libro.nombre}</td>
          <td>${libro.autor}</td>
        </tr>
      `;
    });

    html += `</tbody></table>`;
    contenedor.innerHTML = html;
  },

  sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => !libro.leido);
    const contenedor = document.getElementById('sugerencia');

    if (librosNoLeidos.length === 0) {
      contenedor.innerHTML = '<p>¡Ya has leído todos los libros!</p>';
      return;
    }

    const indiceRandom = Math.floor(Math.random() * librosNoLeidos.length);
    const libroSugerido = librosNoLeidos[indiceRandom];

    contenedor.innerHTML = `
      <p>Te sugiero leer: <strong>${libroSugerido.nombre}</strong> de ${libroSugerido.autor}</p>
    `;
  }
};

estanteria.log();
estanteria.sugerencia();
