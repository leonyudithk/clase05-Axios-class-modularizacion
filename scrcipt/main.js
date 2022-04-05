import Usuario from "./user.js";

let formulario = document.getElementById('formulario');
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');

const usuario = new Usuario();

formulario.addEventListener('submit', e => {
    e.preventDefault();
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastName').value;
    let correo = document.getElementById('email').value;

    console.log(nombre + " " + apellido + " " + correo)

    usuario.nombre = nombre
    usuario.apellido = apellido
    usuario.correo = correo

    console.log(usuario)

    usuario.crearUsuarioApi(usuario)
})


btnCorreo.addEventListener('click', () => {
    let inputCorreo = document.getElementById('email').value

    console.log(inputCorreo)

    usuario.buscarCorreoUsuario(inputCorreo)

    let traerUsuarioLS = JSON.parse(localStorage.getItem('Buscar'))
    console.log(traerUsuarioLS)

    const { nombre, apellido, id, correo } = traerUsuarioLS
    document.getElementById('name').value = nombre
    document.getElementById('lastName').value = apellido
    document.getElementById('email').value = correo
    document.getElementById('id').value = id

})

btnEditar.addEventListener('click', ()=>{
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastName').value;
    let correo = document.getElementById('email').value;
    let id = document.getElementById('id').value;

    console.log(nombre + " " + apellido + " " + correo+ " " +id)

    usuario.nombre = nombre
    usuario.apellido = apellido
    usuario.correo = correo

    usuario.editarUsuario(usuario, id)
})

btnEliminar.addEventListener('click', ()=>{
    let id = document.getElementById('id').value;
    console.log(id)
    usuario.eliminarUsuario(id)
})