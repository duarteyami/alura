

// Constructor para manejar amigos
function AmigoSecreto() {
  this.nombres = [];
}

AmigoSecreto.prototype.agregar = function(nombre) {
  const nombreLimpio = nombre.trim();
  if (nombreLimpio === '') {
    return false;
  }
  this.nombres.push(nombreLimpio);
  return true;
}

AmigoSecreto.prototype.getNombres = function() {
  return this.nombres;
}

AmigoSecreto.prototype.sortear = function() {
  if (this.nombres.length === 0) return null;
  const indice = Math.floor(Math.random() * this.nombres.length);
  return this.nombres[indice];
}

// Instancia global
const amigoSecreto = new AmigoSecreto();

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  amigoSecreto.getNombres().forEach(nombre => {
    const li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

// Función para mostrar resultado del sorteo
function mostrarResultado(nombre) {
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';
  if (nombre) {
    const li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${nombre}`;
    resultado.appendChild(li);
  }
}

// Función llamada al presionar botón "Añadir"
function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value;
  if (!amigoSecreto.agregar(nombre)) {
    alert('Por favor, ingresa un nombre válido');
    return;
  }
  input.value = '';
  actualizarLista();
  mostrarResultado(null); // limpia resultado si añaden más nombres
}

// Función llamada al presionar botón "Sortear amigo"
function sortearAmigo() {
  const nombre = amigoSecreto.sortear();
  if (!nombre) {
    alert('No hay nombres para sortear');
    return;
  }
  mostrarResultado(nombre);
  }