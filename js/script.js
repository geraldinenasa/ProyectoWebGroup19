let form = document.querySelector('.form');
let nombre = document.querySelector('#nombre');
let email = document.querySelector('#email');
let telefono = document.querySelector('#telefono');
let mensaje = document.querySelector('#mensaje');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validarFormulario();
})

function validarFormulario() {
  if (nombre.value === "") {
    mensajeError(nombre, 'El nombre es requerido')
  } else {
    console.log("Nombre: " + nombre.value)
  };
  if (email.value === "") {
    mensajeError(email, 'El email es requerido')
  } else {
    console.log("Email: " + email.value)
  };
  if (telefono.value === "") {
    mensajeError(telefono, 'El teléfono es requerido')
  } else {
    console.log(telefono.value)
  }
}

function mensajeError(input, mensaje) {
  const formControl = input.parentElement;
  const mensajeError = formControl.querySelector('p');
  mensajeError.innerText = mensaje;

  formControl.className = 'form-control error';
}