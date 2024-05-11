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
  if (nombre.value.trim() === "") {
    mensajeError(nombre, 'Debe rellenar este campo')
  } else {
    inputValido(nombre)
  }
  
  if (email.value.trim() === "") {
    mensajeError(email, 'Debe rellenar este campo')
  } else {
    inputValido(email)
  }
  
  if (telefono.value.trim() === "") {
    mensajeError(telefono, 'Debe rellenar este campo')
  } else {
    inputValido(telefono)
  }

  if (mensaje.value.trim() === "") {
    mensajeError(mensaje, 'Debe rellenar este campo')
  } else {
    inputValido(mensaje)
  }
}

function mensajeError(input, mensaje) {
  const formBox = input.parentElement;
  const msjeError = document.querySelectorAll('.msje-error');
        msjeError.forEach((msje) => {
          msje.innerText = mensaje;
        formBox.className = 'form_box error';
        });
}

function inputValido(input) {
  const formBox = input.parentElement;
        formBox.className = 'form_box valido';
}