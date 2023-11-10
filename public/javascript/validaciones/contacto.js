const form = document.getElementById("formulario")

console.log(form.nombre.value)

const validarNombre = ()=>{
    if(form.nombre.value==""){
        form.nombre.classList.add("is-invalid")
        form.nombre.placeholder='El nombre no puede estar vacio'
        return false
    } else {
        form.nombre.classList.remove("is-invalid")
        form.nombre.placeholder="Pedro"
        return true
    }
}
const validarApellido = ()=>{
    if(form.apellido.value==""){
        form.apellido.classList.add("is-invalid")
        form.apellido.placeholder="El apellido no puede estar vacio"
        return false
    } else {
        form.apellido.classList.remove("is-invalid")
        form.apellido.placeholder="Rodriguez"
        return true
    }
}
const validarEmail = ()=>{
    if(form.email.value==""){
        form.email.classList.add("is-invalid")
        form.email.placeholder="El email no puede estar vacio"
        return false
    }
    else if(!validarQueSeaEmail(form.email.value)){
        form.email.classList.add("is-invalid")
        form.email.placeholder="El email es invalido"
        return false
    }
    else {
        form.email.classList.remove("is-invalid")
        form.email.placeholder="PedroRodriguez@email.com"
        return true
    }
}
const validarCel = ()=>{
    if(form.cel.value==""){
        form.cel.classList.add("is-invalid")
        form.cel.placeholder="El telefono no puede estar vacio"
        return false
    }
    if(!sonTodosNumeros(form.cel.value)){
        form.cel.classList.add("is-invalid")
        form.cel.placeholder="El telefono es invalido"
        return false
    }
    else {
        form.cel.classList.remove("is-invalid")
        form.cel.placeholder="+54 3364525352"
        return true
    }
}
const validarMensaje = ()=>{
    if(form.mensaje.value==""){
        form.mensaje.classList.add("is-invalid")
        form.mensaje.placeholder="El mensaje no puede estar vacio"
        return false
    } else {
        form.mensaje.classList.remove("is-invalid")
        form.mensaje.placeholder="Escribi tu mensaje aqui..."
        return true
    }
}


form.nombre.addEventListener("blur", validarNombre)
form.apellido.addEventListener("blur", validarApellido)
form.email.addEventListener("blur", validarEmail)
form.cel.addEventListener("blur", validarCel)
form.mensaje.addEventListener("blur", validarMensaje)

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    validarNombre()
    validarApellido()
    validarEmail()
    validarCel()
    validarMensaje()
    
    if (validarNombre() && validarApellido() && validarEmail() && validarCel() && validarMensaje()) {
        form.submit()
    }
})

function sonTodosNumeros(cadena) {
    return /^\d+$/.test(cadena);
  }


function validarQueSeaEmail(email){
	var emailValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	return emailValido.test(email)
} 