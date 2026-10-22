class GestorPestanas {
    constructor(selectorContenedor) {
        this.contenedor = document.querySelector(selectorContenedor);
        if (!this.contenedor) return;

        this.botones = this.contenedor.querySelectorAll('.tab-btn');
        this.contenidos = this.contenedor.querySelectorAll('.tab-contenido');

        this.iniciar();
    }

    iniciar() {
        this.botones.forEach(boton => {
            boton.addEventListener('click', (e) => this.seleccionarPestana(e.currentTarget));
        });
    }

    seleccionarPestana(botonSeleccionado) {
        const idObjetivo = botonSeleccionado.dataset.tab;

        // Remover estado activo de todos los botones y contenidos
        this.botones.forEach(btn => btn.classList.remove('activo'));
        this.contenidos.forEach(cnt => cnt.classList.remove('activo'));

        // Activar el botón presionado y su contenido correspondiente
        botonSeleccionado.classList.add('activo');
        const contenidoObjetivo = this.contenedor.querySelector(`#${idObjetivo}`);

        if (contenidoObjetivo) {
            contenidoObjetivo.classList.add('activo');
        }
    }
}

// Inicializar la clase cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    new GestorPestanas('.contenedor-principal');
});