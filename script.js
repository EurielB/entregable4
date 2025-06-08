document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.querySelector('.form-contacto');

  formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío automático

    // Obtener valores
    const nombre = document.getElementById('nombre').value.trim();
    const motivo = document.getElementById('motivo').value.trim();
    const correo = document.getElementById('correo').value.trim();

    // Validación: campos vacíos
    if (nombre === '' || motivo === '' || correo === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Validación: nombre mínimo 3 caracteres
    if (nombre.length < 3) {
      alert('El nombre debe tener al menos 3 caracteres.');
      return;
    }

    // Validación: el nombre no debe contener números
    if (/\d/.test(nombre)) {
      alert('El nombre no debe contener números.');
      return;
    }

    // Validación: motivo no debe ser solo números
    if (/^\d+$/.test(motivo)) {
      alert('El motivo no puede contener solo números.');
      return;
    }

    // Validación: correo válido
    const correoRegex = /^\S+@\S+\.\S+$/;
    if (!correoRegex.test(correo)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
    }

    // Si pasa todas las validaciones
    alert('Formulario enviado correctamente.');
    formulario.reset(); // Limpia el formulario
  });
});
