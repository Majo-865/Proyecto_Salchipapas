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