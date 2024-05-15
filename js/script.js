let form = document.querySelector('.form');
let nombre = document.querySelector('#nombre');
let email = document.querySelector('#email');
let telefono = document.querySelector('#telefono');
let mensaje = document.querySelector('#mensaje');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validarFormulario();
});

function validarFormulario() {
  if (nombre.value.trim() === "" || email.value.trim() === "" || telefono.value || mensaje.value.trim() === "") {
    mensajeError(nombre, 'Debe completar este campo')
    mensajeError(email, 'Debe completar este campo')
    mensajeError(telefono, 'Debe completar este campo')
    mensajeError(mensaje, 'Debe completar este campo')
  } else {
    inputValido(nombre)
    inputValido(email)
    inputValido(telefono)
    inputValido(mensaje)
  }
};

function mensajeError(input, mensaje) {
  const formBox = input.parentElement;
  const msjeError = document.querySelectorAll('.msje-error');
        msjeError.forEach(msje => {
          msje.innerText = mensaje;
        formBox.className = 'form_box error';
        });
};

function inputValido(input) {
  const formBox = input.parentElement;
        formBox.className = 'form_box valido';
};