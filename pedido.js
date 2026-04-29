// Configuración de botones de agregar
document.querySelectorAll('.btn-agregar').forEach(boton => {
boton.addEventListener('click', () => {
const nombre = boton.getAttribute('data-nombre');
const precio = parseInt(boton.getAttribute('data-precio'));

pedido.push(nombre);
total += precio;

// Mostrar tablero y actualizar datos
const tablero = document.getElementById('tablero-pedidos');
tablero.classList.remove('hidden');
document.getElementById('lista-items').innerText = pedido.join(', ');
document.getElementById('total-precio').innerText = total.toLocaleString();
});
});

// Enviar a WhatsApp
document.getElementById('btn-whatsapp').addEventListener('click', () => {
const numero = "573159492619"; // Tu número según el footer
const resumen = pedido.join(', ');
const mensaje = `Hola Salchi-Mix! Quiero pedir: ${resumen}. Total: $${total}`;
const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
window.open(url, '_blank');
});


// SALCHIPAPAS //
document.getElementById('btn-agregar-salchipapa').addEventListener('click', () => {


// 1. Buscar qué base se seleccionó
const baseActiva = document.querySelector('.base-seleccionada:checked');
if (!baseActiva) {
alert("Por favor, selecciona primero una base de papas.");
return;
}

// 2. Obtener los límites y datos de esa base
const nombreBase = baseActiva.dataset.nombre;
const precioBase = parseInt(baseActiva.dataset.precio);
const limiteT = parseInt(baseActiva.dataset.limiteT);
const limiteS = parseInt(baseActiva.dataset.limiteS);

// 3. Contar cuántos toppings y salsas marcó el usuario
const seleccionadosT = document.querySelectorAll('.topping:checked');
const seleccionadosS = document.querySelectorAll('.salsa:checked');

// 4. Calcular extras
let extraT = 0;
if (seleccionadosT.length > limiteT) {
extraT = (seleccionadosT.length - limiteT) * 3000;
}

let extraS = 0;
if (seleccionadosS.length > limiteS) {
extraS = (seleccionadosS.length - limiteS) * 3000;
}

const totalFinal = precioBase + extraT + extraS;

// 5. Crear el texto para el tablero
const listaT = Array.from(seleccionadosT).map(t => t.value).join(', ');
const detalle = `${nombreBase} con: ${listaT}`;

// 6. Enviar al tablero (Usando la función que ya tienes de las hamburguesas)
if (typeof agregarAlCarrito === "function") {
agregarAlCarrito(detalle, totalFinal);
} else {
alert(`Pedido: ${detalle} \nTotal: $${totalFinal}`);
}
});
