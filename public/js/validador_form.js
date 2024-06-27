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
  let isValid = true;

  if (nombre.value.trim() === "") {
    mensajeError(nombre, 'Debe completar este campo');
    isValid = false;
  } else {
    inputValido(nombre);
  }

  if (email.value.trim() === "") {
    mensajeError(email, 'Debe completar este campo');
    isValid = false;
  } else {
    inputValido(email);
  }

  if (telefono.value.trim() === "") {
    mensajeError(telefono, 'Debe completar este campo');
    isValid = false;
  } else {
    inputValido(telefono);
  }

  if (mensaje.value.trim() === "") {
    mensajeError(mensaje, 'Debe completar este campo');
    isValid = false;
  } else {
    inputValido(mensaje);
  }

  return isValid;
};

function mensajeError(input, mensaje) {
  const formBox = input.parentElement;
  const msjeError = formBox.querySelector('.msje-error');
  if (msjeError) {
    msjeError.innerText = mensaje;
    formBox.className = 'form_box error';
  }
};

function inputValido(input) {
  const formBox = input.parentElement;
  formBox.className = 'form_box valido';
};
