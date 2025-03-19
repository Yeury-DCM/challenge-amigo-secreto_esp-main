// Lista para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del input
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el input no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre');
        return;
    }
    
    // Verificar si el nombre ya existe en la lista
    if (amigos.includes(nombreAmigo)) {
        alert('Este amigo ya está en la lista');
        return;
    }
    
    // Añadir el amigo a la lista de amigos
    amigos.push(nombreAmigo);
    
    // Mostrar el amigo en la lista del HTML
    const listaAmigos = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.classList.add('name-item');
    li.textContent = nombreAmigo;
    listaAmigos.appendChild(li);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    inputAmigo.focus();
}

// Función para realizar el sorteo de amigo secreto
function sortearAmigo() {
    const resultadoList = document.getElementById('resultado');
    resultadoList.innerHTML = '';
    
    // Verificar que haya amigos en la lista
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear');
        return;
    }
    
    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
    
    // Mostrar el amigo seleccionado en la interfaz
    const li = document.createElement('li');
    li.classList.add('result-item');
    li.textContent = `Tu amigo secreo es...: ${amigoSeleccionado}`;
    resultadoList.appendChild(li);
}

// Añadir evento para que el botón Enter en el input ejecute agregarAmigo()
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});