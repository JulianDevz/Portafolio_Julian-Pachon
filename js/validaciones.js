export function valida(input){
	const tipoDeInput = input.dataset.tipo;
	if(validadores[tipoDeInput]){
		validadores[tipoDeInput](input);
	}

  console.log(input.parentElement)
  if(input.validity.valid){
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = ""
  }else{
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError"
]

const mensajesDeError = {
  nombre:{
    valueMissing:"El campo Nombre no puede estar vacio"
  },
  email:{
    valueMissing:"El campo Email no puede estar vacio",
    typeMismatch:"El Email no es valido"
  },
  asunto:{
    valueMissing:"El campo Asunto no puede estar vacio",
    patternMismatch:"El Asunto debe contener entre 4 a 20 caracteres"
  },
  mensaje:{
    valueMissing:"El campo Mensaje no puede estar vacio",
  }
}

const validadores = {
	nacimiento: (input) => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput,input){
  let mensaje = "";
  tipoDeErrores.forEach(error => {
    if(input.validity[error]){
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error])
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });

  return mensaje;
}

