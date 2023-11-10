const form = document.getElementById("formulario")

console.log(form.name.value)

const validarNombre = ()=>{
    if(form.name.value==""){
        form.name.classList.add("is-invalid")
        form.name.placeholder='El nombre no puede estar vacio'
        return false
    } else {
        form.name.classList.remove("is-invalid")
        form.name.placeholder=""
        return true
    }
}
const validarPrecio = ()=>{
    if(form.price.value==""){
        form.price.classList.add("is-invalid")
        form.price.placeholder="El precio no puede estar vacio"
        return false
    }
    if (!sonTodosNumeros(form.price.value)) {
        form.price.classList.add("is-invalid")
        form.price.placeholder="Debe ingresar un precio valido"
        return false
    }
    else {
        form.price.classList.remove("is-invalid")
        form.price.placeholder=""
        return true
    }
}
const validarDescripcion = ()=>{
    if(form.description.value==""){
        form.description.classList.add("is-invalid")
        form.description.placeholder="La descripcion no puede estar vacia"
        return false
    }
    else {
        form.description.classList.remove("is-invalid")
        form.description.placeholder=""
        return true
    }
}

const validarColores = ()=>{
    if(form.colors.value==""){
        form.colors.classList.add("is-invalid")
        form.colors.placeholder="Debe ingresar un color"
        return false
    }
    else {
        form.colors.classList.remove("is-invalid")
        form.colors.placeholder=""
        return true
    }
}

const validarFecha = ()=>{
    if(form.year.value==""){
        form.year.classList.add("is-invalid")
        form.year.placeholder="Debe ingresar una fecha"
        return false
    }
    else {
        form.year.classList.remove("is-invalid")
        form.year.placeholder=""
        return true
    }
}

const validarFoto = ()=>{
    if (form.img.files.length === 0) {
        form.img.classList.add("is-invalid");
        return false
    } else {
        const nombreArchivo = form.img.files[0].name;
        if (/\.(jpg|jpeg|png|gif)$/i.test(nombreArchivo)) {
            form.img.classList.remove("is-invalid")
            return true;
        } else {
            form.img.classList.add("is-invalid");
            return false
        }
    }
}


form.name.addEventListener("blur", validarNombre)
form.price.addEventListener("blur", validarPrecio)
form.description.addEventListener("blur", validarDescripcion)
form.img.addEventListener("blur", validarFoto)
form.colors.addEventListener("blur", validarColores)
form.year.addEventListener("blur", validarFecha)

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    validarNombre()
    validarPrecio()
    validarDescripcion()
    validarFoto()
    validarColores()
    validarFecha()
    
    if (validarNombre() && validarPrecio() && validarDescripcion() && validarFoto() && validarColores() && validarFecha()) {
        form.submit()
    }
})

function sonTodosNumeros(cadena) {
    return /^\d+$/.test(cadena);
  }
