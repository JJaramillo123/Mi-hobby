// Mi Hobby: El Fútbol - script.js

document.addEventListener('DOMContentLoaded', function () {

  // Menú móvil
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('show');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('show');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Año actual en el footer
  var yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Validación del formulario de contacto
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  function validarCampo(id, condicion, mensajeError) {
    var campo = document.getElementById(id);
    var error = document.getElementById('error-' + id);
    if (condicion(campo.value)) {
      error.textContent = '';
      return true;
    } else {
      error.textContent = mensajeError;
      return false;
    }
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nombreOk = validarCampo('nombre', function (v) {
        return v.trim().length >= 2;
      }, 'Escribe tu nombre.');

      var correoOk = validarCampo('correo', function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
      }, 'Escribe un correo válido.');

      var mensajeOk = validarCampo('mensaje', function (v) {
        return v.trim().length >= 10;
      }, 'Escribe un mensaje un poco más largo.');

      if (nombreOk && correoOk && mensajeOk) {
        status.textContent = '¡Gracias! Tu mensaje fue enviado.';
        status.classList.add('success');
        form.reset();
      } else {
        status.textContent = 'Revisa los campos marcados en rojo.';
        status.classList.remove('success');
      }
    });
  }

});
