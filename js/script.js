// Obtener todos los elementos de los botones y modales
var verMenuBtns = document.querySelectorAll(".button[id^='verMenuBtn']");
var reservarMesaBtns = document.querySelectorAll(".button[id^='reservarMesaBtn']");
var añadirCarritoBtns = document.querySelectorAll(".añadir-carrito[id^='añadirCarritoBtn']");

var verMenuModals = document.querySelectorAll("[id^='verMenuModal']");
var reservarMesaModals = document.querySelectorAll("[id^='reservarMesaModal']");
var añadirCarritoModals = document.querySelectorAll("[id^='añadirCarritoModal']");

var closeVerMenuBtns = document.querySelectorAll(".close-btn[id^='closeVerMenu']");
var closeReservarMesaBtns = document.querySelectorAll(".close-btn[id^='closeReservarMesa']");
var closeAñadirCarritoBtns = document.querySelectorAll(".close-btn[id^='closeAñadirCarrito']");

// Funcionalidad para abrir los modales de Ver Menú
verMenuBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modalId = btn.id.replace('Btn', 'Modal');
        document.getElementById(modalId).style.display = "block";
    }
});

// Funcionalidad para abrir los modales de Reservar Mesa
reservarMesaBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modalId = btn.id.replace('Btn', 'Modal');
        document.getElementById(modalId).style.display = "block";
    }
});

// Funcionalidad para abrir los modales de Añadir al Carrito
añadirCarritoBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modalId = btn.id.replace('Btn', 'Modal');
        document.getElementById(modalId).style.display = "block";
    }
});

// Funcionalidad para cerrar los modales de Ver Menú
closeVerMenuBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modalId = btn.id.replace('close', '');
        document.getElementById(modalId).style.display = "none";
    }
});

// Funcionalidad para cerrar los modales de Reservar Mesa
closeReservarMesaBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modalId = btn.id.replace('close', '');
        document.getElementById(modalId).style.display = "none";
    }
});

// Funcionalidad para cerrar los modales de Añadir al Carrito
closeAñadirCarritoBtns.forEach(function(btn) {
    btn.onclick = function() {
        var modalId = btn.id.replace('close', '');
        document.getElementById(modalId).style.display = "none";
    }
});

// Cerrar los modales al hacer clic fuera de ellos
window.onclick = function(event) {
    verMenuModals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
    reservarMesaModals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
    añadirCarritoModals.forEach(function(modal) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

// Evitar que el formulario de reserva se envíe (solo para demostración)
document.querySelectorAll("[id^='reservaForm']").forEach(function(form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por ahora
        alert("Reserva enviada con éxito!");
        form.closest(".modal").style.display = "none"; // Cerrar el modal después de enviar el formulario
    });
});